import { CometChat } from "@cometchat-pro/chat";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../modules/firebase/initialiseFirebase";

export default function() {
    const [user, loading, error] = useAuthState(auth)
    const chatKey = process.env.COMETCHAT_AUTH_KEY
    const chatUser = new CometChat.User(user.displayName)

        const createChatUser = async() =>{
        await CometChat.createUser(chatUser, chatKey).then(
            chatUser => {
                console.log("user created", chatUser);
            },error => {
                console.log("error", error);
            }
            )
            console.log("window.innerHeight", window.innerHeight);
         } 
         if(user){
             createChatUser()
         }

    return (
        <div>
            Enter
        </div>
    );
}