import { useRouter } from "next/router";
import { auth, database, firestore } from "../../modules/firebase/initialiseFirebase";
import { collection, getDocs, query, where, limit } from '@firebase/firestore'
import { GetStaticPaths } from "next";
import { useEffect, useState } from "react";
import { push, ref, set } from "@firebase/database";
import InfoCard from "../../components/cards/infoCard";
import { useAuthState } from "react-firebase-hooks/auth";

export const getStaticProps = async () => {

    const response = await getDocs(collection(firestore, "freelancers"))

    const userData = []
    response.forEach((doc: any) => {
        userData.push(doc._document.data.value.mapValue.fields)
    })

    return {
        props: { userData }
    }

}

export const getStaticPaths: GetStaticPaths = async () => {
    const response: any = await getDocs(collection(firestore, "freelancers"))
    const paths = []
    response.forEach((doc: any) => {
        paths.push('/profiles/' + doc._document.data.value.mapValue.fields.displayName.stringValue)
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const dateTime = new Date().getTime()

export default function ProfilePage() {
    const [userInfo, setUserInfo] = useState(null)
    const router = useRouter()
    const { username } = router.query
    const [hireForm, setHireForm] = useState(null)
    const [projectDescription, setProjectDescription] = useState(null)
    const [projectTitle, setProjectTitle] = useState(null)
    const [agreement, setAgreement] = useState(null)
    const [currentUser, loading, error] = useAuthState(auth)
    const hiveOwner = userInfo



    async function fetchUserData() {
        const response = await getDocs(
            query(collection
                (firestore, "freelancers"),
                where("displayName", "==", username),
                limit(1)))
        setUserInfo(response.docs[0]['_document'].data.value.mapValue.fields)
    }

    useEffect(() => {

        fetchUserData()
    }, [])



    const toggleHireButton = () => {
        if (currentUser) {
            setHireForm(true)
        }
        else {
            router.push('/authentication')
        }
    }

    const requestHire = () => {
        const hireRequestData = {
            title: projectTitle,
            description: projectDescription,
            clientUID: currentUser.uid,
            client: currentUser.displayName,
            freelancerUID: hiveOwner.uniqueID.stringValue,
            freelancer: hiveOwner.displayName.stringValue,
            requestStatus: 'Awaiting Reply',
            time: dateTime,
            clientAvatar: currentUser.photoURL
        }

        push(ref(database,
            currentUser.uid + '/projectOut'),
            hireRequestData
        )
            .then((snap) => {
                push(ref(database,
                    hiveOwner.uniqueID.stringValue + '/hireRequests'),
                    {
                        ...hireRequestData,
                        requestReference: snap.key
                    }
                )
            })

        setHireForm(null)
    }

    if (!userInfo || loading) {
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
        <div className="">
            <div
                style={{ backgroundImage: "url(" + userInfo.bannerImageURL.stringValue + ")" }}
                className="relative md:pt-32 bg-center z-0 pb-52 pt-12">


            </div>

            <div className="flex flex-wrap justify-center mb-16 align-center">
                <div className="z-10 -mt-10 sm:-mt-20 z-10 smx:h-60 h-90 w-40 lg:w-60  cursor-pointer m-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
                    <img
                        className="w-full max-h-60 object-cover"
                        src={userInfo.cardImageURL.stringValue}
                        alt="Photo"
                    />
                    <div className="text-center relative py-5">

                        <h1 className="mb-1 text-2xl font-sans font-semibold text-primary dark:text-darkMode hover:text-secondary cursor-pointer">
                            {userInfo.hiveName.stringValue}
                        </h1>
                        <span className="text-lg text-secondary hover:text-primary">{userInfo.skill.stringValue}</span>
                    </div>
                </div>
            </div>
            {!hireForm &&
                <div>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap ">
                            <div className=" pt-10 md:-mt-40 lg:-mt-40 sm:mt-20  w-full md:w-4/12 px-4">

                                <InfoCard
                                    title='Average Rating'
                                    value={userInfo.rating.integerValue}
                                />

                            </div>


                            <div className="w-full smx:-mt-96 z-10 lg:mt-7 md:mt-7 sm:-mt-64 md:w-4/12 px-4 text-center">

                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    {hiveOwner.uniqueID.stringValue != currentUser.uid &&
                                        <button
                                            className="py-2 px-4  bg-primary dark:bg-darkMode text-secondary w-full text-center text-base font-semibold rounded-lg"
                                            onClick={() => toggleHireButton()}
                                        >
                                            Hire Me
                                        </button>
                                    }
                                </div>
                            </div>

                            <div className=" pt-10 lg:-mt-40 md:-mt-40 -mt-40 sm:-mt-10  w-full md:w-4/12 px-4">

                                <InfoCard
                                    title='Projects Completed'
                                    value={userInfo.projects.integerValue}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            }
            {hireForm &&
                <div className="mx-12">
                    <form className="form bg-white rounded-lg p-6 my-10 relative">

                        <h3 className="text-2xl text-primary text-center dark:text-darkMode font-bold">
                            Project Details
                        </h3>

                        <input
                            name="projectTitle"
                            type="text"
                            maxLength={91}
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Project Title"
                        />

                        <textarea
                            name="projectDescription"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                            placeholder="Short description of project"
                            className="border p-2 mt-3 w-full" />
                        <a className="font-bold text-sm mt-3 text-primary">Terms and Conditions</a>
                        <div className="flex items-baseline space-x-2 mt-2">
                            <input
                                name="agreement"
                                type="checkbox"
                                value="agreed"
                                onChange={(e) => setAgreement(e.target.value)}
                                className="inline-block"
                            />
                            <p className="text-gray-900 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                        </div>
                        <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
                            <button
                                className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                                onClick={() => requestHire()}
                            >
                                Submit
                            </button>

                        </div>
                    </form>
                </div>

            }

            <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        About {userInfo.displayName.stringValue}
                    </h4>
                    <p className="text-center">
                        {userInfo.about.stringValue}
                    </p>
                </div>
            </section>

            <section className="m-5 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Portfolio
                    </h4>
                </div>
            </section>
            <section className="m-5 text-primary dark:text-darkMode ">
                <div className="flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Reviews
                    </h4>
                </div>
            </section>
        </div >
    );
}