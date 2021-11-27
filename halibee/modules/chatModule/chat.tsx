import { onValue, push, ref, serverTimestamp, update } from "@firebase/database";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { auth, database } from "../firebase/initialiseFirebase";
import { parseDate } from "../utilities/utilities";


const Picker = dynamic(() => {
 return import('emoji-picker-react')
}, {ssr: false}
)

export const GetSortOrder = (key) => {    
  return function(a, b) {    
      if (a[key] > b[key]) {    
          return 1;    
      } else if (a[key] < b[key]) {    
          return -1;    
      }    
      return 0;    
  }    
}    

export default function Chat({ reference, closeFunction }) {
  const [newMessage, setNewMessage] = useState("")
  const currentUser = auth.currentUser
  const [messages, setMessages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setNewMessage(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newMessage)
    {
    push(ref(database, reference), {
      text: newMessage,
      sender: currentUser.displayName,
      avatar: currentUser.photoURL,
      timeStamp: serverTimestamp()
    })
}
    setNewMessage("");

  }

  useEffect(() => {
    const messageList = []
    onValue(ref(database, reference), (snapshot) => {
      if (snapshot.val())

        for (var p in snapshot.val()) {
          messageList.push(snapshot.val()[p]);
        }

      setMessages(messageList.sort(GetSortOrder("timeStamp")))

    }, {
      onlyOnce: true
    });
  }, [messages, database]);



  return (
    <>
            <div className="py-6 px-3" >
              <button
                onClick={() => closeFunction()}
              >
                Close
              </button>
              {
                messages.length > 0 && 
                <div className="">
                  {messages.map(message => (
                    <div
                      className={"flex flex-row w-max bg-white rounded-lg justify-items-center p-2 my-10 relative"
                        +
                        (message.sender === currentUser.displayName ? 'bg-gray-500' : 'bg-white')
                      }
                    >
                      <div className="mx-4">
                        {message.avatar ?
                          <img
                            src={message.avatar}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full "
                          />
                          : null}
                        {message.sender ?
                          <span className="text-primary">{message.sender}</span>
                          : null}
                      </div>

                      <div
                        className="flex flex-col align-justify justify-between mx-4"
                      >
                        {message.text ?
                          <p >{message.text}
                          </p>
                          : null}
                        {message.timeStamp ?
                          <p className="text-gray-600 text-right">
                            {parseDate(message.timeStamp)}
                          </p>
                          : null}
                      </div>
                    </div>
                  ))}

                </div>
              }


              < form
                onSubmit={handleSubmit}
                className=" bg-white rounded-lg p-6 my-10 mt-24 relative"
              >
<div>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-60 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                type="image"
                  className="absolute right-6"
                  src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                  onClick={() => setShowPicker(val => !val)} />
                {showPicker && <Picker
                  pickerStyle={{ width: '100%' }}
                  onEmojiClick={onEmojiClick} />}
</div>
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

            </div >
    </>
  )}