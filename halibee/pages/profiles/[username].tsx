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

    // (async () => {
    //     const details = await getDocs(
    //         query(collection
    //             (firestore, "freelancers"),
    //             where("displayName", "==", username),
    //             limit(1)))
    //         .then((detail) => {
    //             // userInfo = detail.docs[0]['_document'].data.value.mapValue.fields
    //             setUserInfo(detail.docs[0]['_document'].data.value.mapValue.fields)
    //         }
    //         )
    // })()
    // const getUserDetails = async () => {
    //      const details = await getDocs(
    //         query(collection
    //             (firestore, "freelancers"),
    //             where("displayName", "==", username),
    //             limit(1)))
    //         .then((detail) => {
    //             // userInfo = detail.docs[0]['_document'].data.value.mapValue.fields
    //             setUserInfo(detail.docs[0]['_document'].data.value.mapValue.fields)
    //         }
    //         )

    // }

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
                className="relative md:pt-32 bg-center z-0 pb-32 pt-12">


            </div>
            <div className="flex flex-wrap justify-center align-center">


                <div className="overflow-hidden -mt-40 z-10 shadow-lg h-90 w-60 md:w-80 cursor-pointer m-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
                    <img className="w-full max-h-60 object-cover" src={userData.cardImageURL.stringValue} alt="" />
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
                        {userData.description.stringValue}
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
                </div>
            </section>
        </div>
    );
}