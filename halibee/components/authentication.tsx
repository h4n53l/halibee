import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { signOut } from "@firebase/auth"
import Swal from "sweetalert2";
import { auth } from "../modules/firebase/initialiseFirebase";
import { Toast } from "../modules/utilities/utilities";
import { XIcon } from '@heroicons/react/solid'



export default function Authentication({showAuth, setShowAuth}) {

    const [newUser, setNewUser] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const router = useRouter()

    const logout = () => {
        signOut(auth)
        setShowAuth(false)
    }

    const createAccount = async () => {
        try {
            if (password === repeatPassword) {

                await createUserWithEmailAndPassword(auth, email, password)
                    .then(function (result) {
                        return updateProfile(result.user, {
                            displayName: username,
                            photoURL: "https://firebasestorage.googleapis.com/v0/b/halibee.appspot.com/o/images%2FdefaultImages%2Fprofile_placeholder.png?alt=media&token=38390ea9-171a-49e9-9ee3-d585b08686c6"
                        })
                    })
                    .then(function () {
                        const user = auth.currentUser
                        sendEmailVerification(user)
                            .then(() => {
                                Swal.fire(
                                    {
                                        icon: 'success',
                                        title: 'Welcome!',
                                        text: 'Please verify your email through the link sent to you!',
                                        showCloseButton: true,
                                        showConfirmButton: false
                                    }
                                )
                                logout()
                            })
                    })
                    setShowAuth(false)
            } else {
                Swal.fire(
                    {
                        title: 'Sign Up Error',
                        text: 'Please check if your passwords match.',
                        showCloseButton: true,
                        showConfirmButton: false,
                        icon: 'error'
                    }
                )
            }
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                showCloseButton: true,
                icon: 'error',
                showConfirmButton: false
            });
        }
    }

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            
            if (!auth.currentUser.emailVerified) {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        Toast.fire(
                            {
                                title: 'Welcome!',
                                icon: 'success',
                                text: 'Please verify your email through the link sent to you!',
                                showCloseButton: false,
                                showConfirmButton: false
                            }
                        )
                        logout()
                    })
            }
            else {
                Toast.fire(
                    {
                        title: 'Welcome!',
                        showCloseButton: false,
                        showConfirmButton: false,
                        icon: 'success'
                    }
                )
                
                }
            setShowAuth(false)
        } catch (error) {
            console.log(error);
            Swal.fire(
                {
                    title: 'Error',
                    text: error.message,
                    showCloseButton: true,
                    showConfirmButton: false,
                    icon: 'error'
                }
            )
        }
    }

    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            Swal.fire(
                {
                    title: 'Sent',
                    text: "Please check your email to reset your password.",
                    showCloseButton: true,
                    showConfirmButton: false,
                    icon: 'info'
                }
            )
        } catch (error) {
            Swal.fire(
                {
                    title: 'Error',
                    text: error.message,
                    showCloseButton: true,
                    showConfirmButton: false,
                    icon: 'error'
                }
            )
        }
    }


    return (
        <>
{showAuth ?
(
            <div className="container center absolute inset-y-80 z-50 flex items-center justify-center flex-1 h-full mx-auto">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <div className="max-w-sm p-10 m-auto bg-primary dark:bg-darkMode bg-opacity-90 rounded shadow-xl">
                          <XIcon
                        className="h-6 w-6 text-white cursor-pointer"
                        onClick={() => setShowAuth(false)}
                        />  
                        
                            <p className="mb-8 text-2xl font-light text-center text-white">
                                Welcome!
                            </p>
                            {newUser &&
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        required
                                        />
                                    </div>
                                </div>
                            }
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                        required
                                        />
                                </div>
                            </div>

                            {!forgotPassword &&
                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                            placeholder="Enter Password"
                                            required
                                            />
                                    </div>
                                </div>
                            }
                            {newUser &&

                                <div className="mb-2">
                                    <div className=" relative ">
                                        <input type="password"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                            placeholder="Confirm Password"
                                            required
                                            />
                                    </div>
                                </div>}
                            {!forgotPassword ?
                                <div>
                                    {newUser ? (<div className="flex items-center justify-between mt-4">
                                        <button
                                            className="py-2 px-4 text-primary dark:text-secondary bg-secondary dark:bg-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            onClick={createAccount}
                                        >
                                            Create Account
                                        </button>
                                    </div>)
                                        :
                                        (<div className="flex items-center justify-between mt-4">
                                            <button
                                                className="py-2 px-4 text-primary dark:text-secondary bg-secondary dark:bg-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                onClick={signIn}
                                            >
                                                Log In
                                            </button>
                                        </div>)
                                    }


                                    {!newUser ?
                                        <div className="flex flex-col justify-between align-end">
                                            <button
                                                className="mt-6 px-4 text-secondary dark:text-primary bg-primary dark:bg-secondary w-full h-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                onClick={() => {
                                                    setShowAuth(false)
                                                    router.push('/authentication')
                                                }}
                                            >
                                                Create Account?
                                            </button>

                                            <label
                                                className="mt-6 cursor-pointer text-secondary underline"
                                                onClick={() => setForgotPassword(true)}
                                            >
                                                Forgot Password?
                                            </label>
                                        </div>
                                        :
                                        <button
                                            className="mt-6 px-4 text-secondary dark:text-primary bg-primary dark:bg-secondary w-full h-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                            onClick={() => setNewUser(false)}
                                        >
                                            Already have an account?
                                        </button>
                                    }
                                </div>
                                :
                                <div>
                                    <button
                                        className="py-2 px-4 text-primary dark:text-secondary bg-secondary dark:bg-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                        onClick={() => resetPassword(email)}
                                    >
                                        Reset Password
                                    </button>
                                    <button
                                        className="mt-6 px-4 text-secondary dark:text-primary bg-primary dark:bg-secondary w-full h-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                        onClick={() => setForgotPassword(false)}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            )
            :
            (null)
}

</>
    )
}