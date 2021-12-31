import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "../modules/firebase/initialiseFirebase";
import {ChatEngine, ChatSettingsTop, PhotosSettings } from 'react-chat-engine';
import { useAuthState } from "react-firebase-hooks/auth";


export default function Messages() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          axios
            .get("https://api.chatengine.io/users/me/", {
              headers: {
                "project-id": process.env.CHAT_ENGINE_PROJECT_ID,
                "user-name": user.displayName,
                "user-secret": user.uid,
              },
            })
            .then(() => {
            })
            .catch((e) => {
              console.log("No messages yet");
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

          <div>No Messages Yet</div>
        </div>
      </div>
    );
  }

  return (
    <div >
      <ChatEngine
        projectID={process.env.CHAT_ENGINE_PROJECT_ID}
        userName={user.displayName}
        userSecret={user.uid}
        renderNewChatForm={(creds) => null}
        renderPhotosSettings={(chat) => <PhotosSettings />}        
        renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
        renderPeopleSettings={(creds, chat) => null}
        renderOptionsSettings={(creds, chat) => null}
      />
    </div>
  );
}
