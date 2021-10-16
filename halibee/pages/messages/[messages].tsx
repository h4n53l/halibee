import { onChildAdded, onValue, push, ref, serverTimestamp, update } from "@firebase/database";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database } from "../../modules/firebase/initialiseFirebase";
import { formatRelative } from "date-fns"

export default function Messages() {
  const dummySpace = useRef();
  const [newMessage, setNewMessage] = useState("")
  const [currentUser, loading, error] = useAuthState(auth)
  const [messages, setMessages] = useState([]);
 

  const handleSubmit = (e) => {
    e.preventDefault()
    push(ref(database, 'messages/'), {
      text: newMessage,
      sender: currentUser.displayName,
      avatar: currentUser.photoURL,
      timeStamp: serverTimestamp()
    }).then((snap) => {
      console.log(snap.root)
   })

    setNewMessage("");

    if (dummySpace) 
    dummySpace.current.scrollIntoView({ behavor: "smooth" });

  }

  useEffect(() => {
    const messageList = []
    onValue(ref(database, 'messages'), (snapshot) => {
      if (snapshot.val())

      for(var p in snapshot.val()){
          messageList.push(snapshot.val()[p]);
        }

        setMessages(messageList)

    });

  }, [database]);


  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">

          <svg fill='none' className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
            <path clip-rule='evenodd'
              d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
              fill='currentColor' fill-rule='evenodd' />
          </svg>

          <div>Loading ...</div>

        </div>
      </div>
    )
  }



  return (
    <div className="p-24">

{messages.length > 0 && <ul >
        {messages.map(message => (
          <li 
          className=" bg-white rounded-lg p-6 my-10 relative"
          >
            <section>
              
               {message.avatar ? (
                <img
                  src={message.avatar}
                  alt="Avatar"
                  className="w-12 h-12 display-block"
                />
              ) : null}
            </section>

            <section>

              <p >{message.text}
              {message.id}
              </p>


              {message.sender ? <span className="text-primary">{message.sender}</span> : null}
              <br />

              {message.timeStamp ? (
                <span className="text-gray-600">
                  {formatRelative(
                    new Date(message.timeStamp),
                    new Date()
                  )}
                </span>
              ) : null}
            </section>
          </li>
        ))}
      
      </ul>}

      <section ref={dummySpace}></section>

      <form 
      onSubmit={handleSubmit}
      className=" bg-white rounded-lg p-6 my-10 mt-24 relative"
      >

        <h3 className="text-2xl text-primary text-center dark:text-darkMode font-bold">
          Messaging
        </h3>


        
        <input
          type="text"
          maxLength={91}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Short description"
        />

        <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
          <button
            className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
            type="submit"
            disabled={!newMessage}
          >
            Send
          </button>

        </div>
      </form>
      
    </div>
  );
}