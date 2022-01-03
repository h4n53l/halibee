import axios from "axios";
import { formatRelative } from "date-fns";
import Swal from "sweetalert2";
import convert from "image-file-resize";

//NOTE This is a collection of funtions which are exported for use by other parts of the code base.

/* -- This Function converts Javascript time string to readable date format - */
export const parseDate = (date) => {
  return formatRelative(new Date(date), new Date());
};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const downloadImage = async (url) => {
  let response = await fetch(url);
  let data = await response.blob();

  return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
};

export const createChatUser = async (username, uid, photoURL) => {
  let formdata = new FormData();
  formdata.append("username", username);
  formdata.append("secret", uid);

  downloadImage(photoURL).then(async (avatar) => {
    formdata.append("avatar", avatar, avatar.name);

    await axios
      .put("https://api.chatengine.io/users/", formdata, {
        headers: {
          "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY,
        },
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error,
          icon: "error",
        });
      });
  });
};

export const createChat = async (
  title: string,
  text: string,
  participants: Array<string>,
  username: string,
  userSecret: string
) => {
  axios
    .put(
      "https://api.chatengine.io/chats/",
      { title, usernames: participants },
      {
        headers: {
          "project-id": process.env.CHAT_ENGINE_PROJECT_ID,
          "user-name": username,
          "user-secret": userSecret,
        },
      }
    )
    .then((response) => {
      axios.post(
        "https://api.chatengine.io/chats/" +
          response.data.id.toString() +
          "/messages/",
        { text },
        {
          headers: {
            "project-id": process.env.CHAT_ENGINE_PROJECT_ID,
            "user-name": username,
            "user-secret": userSecret,
          },
        }
      );
    })
    .catch((error) => console.log("Error:", error.response));
};

export const imageResizer = async (image, width, height) => {
  console.log(image);
  let newImage = await convert({
    file: image,
    width,
    height,
    type: "jpeg",
  });
  console.log(newImage);
  return newImage;
};
