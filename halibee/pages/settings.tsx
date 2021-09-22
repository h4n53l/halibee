import { doc, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "../modules/firebase/initialiseFirebase";

export default function Settings() {
    const [user, loading, error] = useAuthState(auth)
    const [profileImage, setProfileImage] = useState(null)
    const [cardImage, setCardImage] = useState(null)
    const [bannerImage, setBannerImage] = useState(null)
    const [profileEdit, setProfileEdit] = useState(null)
    const [AccountSettingsEdit, setAccountSettingsEdit] = useState(null)
    const [about, setAbout] = useState(null)
    const [description, setDescription] = useState(null)
    const [hiveName, setHiveName] = useState(null)

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


    const uploadProfileImage = async () => {
        setProfileEdit(null)
        const storageRef = ref(storage, 'images/' + profileImage.name)
        const uploadTask = uploadBytesResumable(storageRef, profileImage, metadata);
        await uploadBytesResumable(storageRef, profileImage, metadata)
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
            updateProfile(user, {
                photoURL: downloadURL
            })
        })

    }

    const updateDatabase = async (collection, document, data) => {
        const userDocument = await getDoc(doc(firestore, collection, document))

        if (userDocument.exists()) {
            await updateDoc(doc(firestore, collection, document), data)
        } else {
            setDoc(doc(firestore, collection, document), {
                ...data,
                prolects: 0,
                rating: 0,
                category: "",
                skill: ""
            })
        }

    }

    const updateProfileData = async () => {
        setProfileEdit(null)
        if (profileImage != null) {
            uploadProfileImage()
        }
        if (bannerImage != null) {
            const storageRef = ref(storage, 'images/' + bannerImage.name)
            const uploadTask = uploadBytesResumable(storageRef, bannerImage, metadata)
            await uploadBytesResumable(storageRef, bannerImage, metadata)
            getDownloadURL(uploadTask.snapshot.ref).then((bannerURL) => {
                updateDatabase("freelancers", user.uid, { bannerImageURL: bannerURL })
            })
        }
        if (cardImage != null) {
            const storageRef = ref(storage, 'images/' + cardImage.name)
            const uploadTask = uploadBytesResumable(storageRef, cardImage, metadata)
            await uploadBytesResumable(storageRef, cardImage, metadata)
            getDownloadURL(uploadTask.snapshot.ref).then((cardURL) => {
                updateDatabase("freelancers", user.uid, { cardImageURL: cardURL })
            })
        }
        if (hiveName != null) {
            updateDatabase("freelancers", user.uid, { 
                hiveName: hiveName,
                displayName: user.displayName
             })
        }
        if (about != null) {
            updateDatabase("freelancers", user.uid, { about: about })
        }
        if (description != null) {
            updateDatabase("freelancers", user.uid, { description: description })
        }
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
                    onClick={() => setAccountSettingsEdit(true)}
                    className="py-2 px-4  mx-3 bg-primary dark:bg-secondary text-secondary dark:text-primary w-full text-center text-base font-semibold rounded-lg ">
                    Account Settings
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
                                        type="text"
                                        value={hiveName}
                                        onChange={(e) => setHiveName(e.target.value)}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your Hive Name"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        maxLength={91}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Short description"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input
                                        type="text"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Long description"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <label >Upload Profile Image</label>
                                    <input
                                        type="file"
                                        accept="image/**"
                                        onChange={(e) => setProfileImage(e.target.files[0])}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your Profile photo"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <label >Upload Card Image</label>
                                    <input
                                        type="file"
                                        accept="image/**"
                                        onChange={(e) => setCardImage(e.target.files[0])}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your Profile photo"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <label >Upload Banner Image</label>
                                    <input
                                        type="file"
                                        accept="image/**"
                                        name="Banner Image"
                                        onChange={(e) => setBannerImage(e.target.files[0])}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your Banner Image"
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button"
                                        onClick={updateProfileData}
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
                        You can change this at any time in the future.
                    </p>
                </div>
            </div>}

            {AccountSettingsEdit &&
                <div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input
                                type="text"
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Your Bio" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-name"
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Your Bio" />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}