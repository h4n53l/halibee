import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, database, storage } from "../modules/firebase/initialiseFirebase";
import { Button } from "../components/button"

export default function Settings() {
    const [user, loading, error] = useAuthState(auth)
    const [image, setImage] = useState<Blob>(null)
    const [banner, setBanner] = useState<Blob>(null)
    const [profileEdit, setProfileEdit] = useState(null)
    const [dashboardEdit, setDashboardEdit] = useState(null)

    if (user === null || loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const metadata = {
        contentType: 'image/**'
    };


    const uploadImage = async () => {
        setProfileEdit(null)
        const storageRef = ref(storage, 'images/' + image.name)
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        await uploadBytesResumable(storageRef, image, metadata)
        console.log('got here 1')
        console.log(image)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            updateProfile(user, {
                photoURL: downloadURL
            })
        })

    }

    const updateDashboard = async () => {
        setDashboardEdit(null)
        const storageRef = ref(storage, 'dashboard/' + banner.name)
        const uploadTask = uploadBytesResumable(storageRef, banner, metadata)
        await uploadBytesResumable(storageRef, banner, metadata)
    }


    return (
        <div>

            <p className="font-bold text-center z-30 text-3xl">
                Hi {user.displayName}
            </p>

            <div className="flex flex-row justify-between content-between justify-items-center m-10">

                <button
                    onClick={() => setProfileEdit(true)}
                    className="py-2 px-4 mx-3  bg-primary dark:bg-secondary text-secondary dark:text-primary w-full text-center text-base font-semibold rounded-lg ">
                    Edit Profile
                </button>
                <button
                    onClick={() => setDashboardEdit(true)}
                    className="py-2 px-4  mx-3 bg-primary dark:bg-secondary text-secondary dark:text-primary w-full text-center text-base font-semibold rounded-lg ">
                    Edit Dashboard
                </button>
            </div>

            {profileEdit && <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                                Edit your profile
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                    <input
                                        type="file"
                                        accept="image/**"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        placeholder="Your Profile photo" />
                                </div>
                            </div>

                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button"
                                        onClick={uploadImage}
                                        className="py-2 px-4  bg-primary dark:bg-secondary text-secondary dark:text-primary w-full text-center text-base font-semibold rounded-lg ">
                                        Submit
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                        This change is irreversible.
                    </p>
                </div>
            </div>}

            {dashboardEdit &&
                <div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input
                                type="text"
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                placeholder="Your Bio" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-name"
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                placeholder="Your Bio" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}