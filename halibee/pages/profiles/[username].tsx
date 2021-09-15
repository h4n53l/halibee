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
    const [userInfo, setUserInfo] = useState(null)
    const router = useRouter()
    const { username } = router.query

    (async () => {
        const details = await getDocs(
            query(collection
                (firestore, "freelancers"),
                where("displayName", "==", username),
                limit(1)))
            .then((detail) => {
                // userInfo = detail.docs[0]['_document'].data.value.mapValue.fields
                setUserInfo(detail.docs[0]['_document'].data.value.mapValue.fields)
            }
            )
    })()
    const getUserDetails = async () => {
         const details = await getDocs(
            query(collection
                (firestore, "freelancers"),
                where("displayName", "==", username),
                limit(1)))
            .then((detail) => {
                // userInfo = detail.docs[0]['_document'].data.value.mapValue.fields
                setUserInfo(detail.docs[0]['_document'].data.value.mapValue.fields)
            }
            )
    }
    useEffect(() => {
    })
    console.log(userInfo)

    return (
        <div>
            <div
                style={{ backgroundImage: "url('/assets/images/bamboo_craft.jpeg')" }}
                className="relative md:pt-32 bg-center z-0 pb-32 pt-12">


            </div>
            <div className="flex flex-wrap justify-center align-center">


                <div className="overflow-hidden -mt-20 sm:-mt-10 z-10 shadow-lg rounded-lg h-90 w-40 lg:w-60  cursor-pointer">

                    <img alt={"Profile photo"}
                        src="/assets/images/image_1.jpg"
                        className="max-h-60 sm:max-h-40 w-full object-cover" />
                    <div className="bg-white dark:bg-primary w-full p-4">
                        <p className="text-primary dark:text-secondary text-center text-xl font-medium">
                            HB0001
                        </p>
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
                            <h4 className=" mt-4 mb-4 text-primary text-5xl font-bold">
                                5
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
                            <h4 className=" mt-4 mb-4 text-primary text-5xl font-bold">
                                256
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <section className="m-5 text-primary">
                <div className=" border-black">
                    <h4 className="text-center font-bolder text-3xl">
                        About {username}
                    </h4>
                </div>
            </section>

            <section className="m-5 text-primary">
                <div className=" border-black w-full h-20">
                    <h4 className="text-center font-bolder text-3xl">
                        Portfolio
                    </h4>
                </div>
            </section>
            <section className="m-5 text-primary">
                <div className=" border-black">
                    <h4 className="text-center font-bolder text-3xl">
                        Reviews
                    </h4>
                </div>
            </section>
        </div>
    );
}