import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../../components/button";
import { auth, firestore } from "../../modules/firebase/initialiseFirebase";
import { collection, getDocs, query, where, limit } from '@firebase/firestore'
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect, useState } from "react";

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


export default function () {
    const [userData, setUserData] = useState(null)
    const router = useRouter()
    const { username } = router.query


    useEffect(() => {
        async function fetchUserData() {
            const response = await getDocs(
                query(collection
                    (firestore, "freelancers"),
                    where("displayName", "==", username),
                    limit(1)))
            setUserData(response.docs[0]['_document'].data.value.mapValue.fields)
        }

        fetchUserData()
    }, [])

    if (userData === null) {
        return (
            <div>Loading</div>
        )
    }
    console.log(userData)

    return (
        <div>
            <div
                style={{ backgroundImage: "url(" + userData.bannerImageURL.stringValue + ")" }}
                className="relative md:pt-32 bg-center z-0 pb-52 pt-12">


            </div>

            <div className="flex flex-wrap justify-center align-center">
                <div className="z-10 -mt-10 sm:-mt-20 z-10 h-90 w-40 lg:w-60  cursor-pointer m-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
                    <img
                        className="w-full max-h-60 object-cover"
                        src={userData.cardImageURL.stringValue}
                        alt="Photo"
                    />
                    <div className="text-center relative py-14">

                        <h1 className="mb-1 text-2xl font-sans font-semibold text-primary hover:text-secondary cursor-pointer">{userData.hiveName.stringValue}</h1>
                        <span className="text-lg text-secondary hover:text-primary">{userData.skill.stringValue}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap ">
                    <div className=" pt-10 md:-mt-40 lg:-mt-40 sm:mt-20  w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white text-primary w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <h6 className="text-xl font-bold">Ratings</h6>
                            </div>
                            <h4 className=" mt-4 mb-4 text-primary text-5xl font-bolder">
                                {userData.rating.integerValue}
                            </h4>
                        </div>
                    </div>

                    <div className="w-full lg:mt-7 md:mt-7 sm:-mt-64 md:w-4/12 px-4  text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <Button>
                                Hire Me
                            </Button>
                        </div>
                    </div>

                    <div className=" pt-10 lg:-mt-40 md:-mt-40 -mt-40 sm:-mt-10  w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white text-primary w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <h6 className="text-xl font-bold">Projects Completed</h6>
                            </div>
                            <h4 className=" mt-4 mb-4 text-primary text-5xl font-bolder">
                                {userData.projects.integerValue}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mx-20 text-primary">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        About {userData.displayName.stringValue}
                    </h4>
                    <p className="text-center">
                        {userData.about.stringValue}
                    </p>
                </div>
            </section>

            <section className="m-5 text-primary">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Portfolio
                    </h4>
                </div>
            </section>
            <section className="m-5 text-primary">
                <div className="flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Reviews
                    </h4>

                    <div className="px-10">
                        <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">LOGO</div>
                            <div className="mt-4">
                                <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">Product Review</h1>
                                <div className="flex mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <p className="mt-4 text-md text-gray-600">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happines.</p>
                                <div className="flex justify-between items-center">
                                    <div className="mt-4 flex items-center space-x-4 py-6">
                                        <div className="">
                                            <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80" alt="" />
                                        </div>
                                        <div className="text-sm font-semibold">John Lucas • <span className="font-normal"> 5 minutes ago</span></div>
                                    </div>
                                    <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}