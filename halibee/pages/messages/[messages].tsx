import { onValue, ref, serverTimestamp, update } from "@firebase/database";
import { useState } from "react";
import { auth, database } from "../../modules/firebase/initialiseFirebase";
import { dateTime } from "../profiles/[username]";

export default function () {

  const [message, setMessage] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const currentUser = auth.currentUser

  const sendMessage = (collection, data) => {

    update(ref(database, collection), {
      ...data,
      time: dateTime,
      username: currentUser.displayName,
      displayPhoto: currentUser.photoURL,
      timeStamp: serverTimestamp()
    })

  }

  const submit = () => {
    sendMessage(
      'chats',
      {
        text: message
      })
  }


  // onValue(ref(database, 'chats/'), (snapshot) => {
  //   setFeedback(snapshot.val())
  //   console.log('typing')
  // });

  return (
    <div className="p-24">
      <div className=" bg-white rounded-lg p-6 my-10 relative">

        <h3 className="text-2xl text-primary text-center dark:text-darkMode font-bold">
          Messaging
        </h3>

        <p className="p-10 text-xl">
            {feedback}
        </p>

        <input
          type="text"
          maxLength={91}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Short description"
        />

        <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
          <button
            className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
            onClick={() => submit()}
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
}