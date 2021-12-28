import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../modules/firebase/initialiseFirebase";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

export default function Messages() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  async function getFile(url) {
    let response = await fetch(url, {mode: 'no-cors'});
    console.log(response)
    let data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          axios
            .get("https://api.chatengine.io/users/me/", {
              headers: {
                "project-id": process.env.CHAT_ENGINE_PROJECT_ID,
                "user-name": user.email,
                "user-secret": user.uid,
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((e) => {
              let formdata = new FormData();
              formdata.append("email", user.email);
              formdata.append("username", user.email);
              formdata.append("secret", user.uid);

              getFile(user.photoURL).then((avatar) => {
                  console.log(avatar)
                //formdata.append("avatar", avatar, avatar.name);

                axios
                  .post("https://api.chatengine.io/users/", formdata, {
                    headers: {
                      "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY,
                    },
                  })

                  .then(() => setLoading(false))
                  .catch((error) => console.log("Error:", error.response));
              });
            });
        } else {
          router.push("/");
        }
      });
    }

    return function cleanup() {
      mounted = !mounted;
    };
  }, [user]);

  if (!user || loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
          <svg
            fill="none"
            className="w-6 h-6 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <div>Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={process.env.CHAT_ENGINE_PROJECT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
