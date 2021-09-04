import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import {useEffect, useState } from "react";
import { auth } from "../modules/firebase/initialiseFirebase";
import { useAuthState } from "react-firebase-hooks/auth"

export default function Authentication() {

    const [newUser, setNewUser] = useState(false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()
    

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }

    if (user) 
        router.push('/')
    }, 
    [user, loading]);

    const createAccount = async () => {
        try {
            if (password === repeatPassword) {
                await createUserWithEmailAndPassword(auth, email, password).then(function(result) {
                    return updateProfile(result.user, {
                      displayName: username,
                      photoURL: '/assets/images/profile_placeholder.png'
                    })
                    
                  }).catch(function(error) {
                    console.log(error);
                  })
            } else {
                alert("Sorry, passwords do not match.")
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

        const signIn = async () => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }

        const resetPassword = async (email) => {
            try {
                await sendPasswordResetEmail(auth, email);
                alert("Password reset link sent!");
            } catch (error) {
                console.log(error);
                alert(error.message);
            }
        }
        console.log(user)
        return (

            <div className="w-full h-screen font-sans bg-cover">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <div className="max-w-sm p-10 m-auto bg-primary dark:bg-secondary bg-opacity-25 rounded shadow-xl">
                                <p className="mb-8 text-2xl font-light text-center text-white">
                                    Welcome!
                                </p>
                                {newUser && <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            />
                                    </div>
                                </div>}
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="Enter Password"
                                        />
                                    </div>
                                </div>
                                {newUser &&

                                    <div className="mb-2">
                                        <div className=" relative ">
                                            <input type="password"
                                                value={repeatPassword}
                                                onChange={(e) => setRepeatPassword(e.target.value)}
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                placeholder="Confirm Password"
                                            />
                                        </div>
                                    </div>}
                                {newUser ? (<div className="flex items-center justify-between mt-4">
                                    <button
                                        className="py-2 px-4 text-secondary dark:text-primary bg-primary dark:bg-secondary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                        onClick={createAccount}
                                    >
                                        Create Account
                                    </button>
                                </div>)
                                    :
                                    (<div className="flex items-center justify-between mt-4">
                                        <button
                                            className="py-2 px-4 text-secondary dark:text-primary bg-primary dark:bg-secondary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            onClick={signIn}
                                        >
                                            Log In
                                        </button>
                                    </div>)
                                }
<div>
                                {!newUser ? 
                                    <label
                                        onClick={() => setNewUser(true)}
                                    >
                                        Are you a new user?
                                    </label>
:
                                    <label
                                        onClick={() => setNewUser(false)}
                                    >
                                        Already have an account?
                                    </label>

                                }
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }