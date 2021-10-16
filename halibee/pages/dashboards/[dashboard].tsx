import { GetStaticPaths } from "next";
import InfoCard from "../../components/cards/infoCard";
import { useRouter } from "next/router";
import { auth, database, firestore } from "../../modules/firebase/initialiseFirebase";
import { collection, getDocs, query, where, limit } from '@firebase/firestore'
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { query as realQuery, ref } from "@firebase/database";
import { snapshot, useSnapshot } from "valtio";
import { state } from "../../modules/valtio/state";


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
        paths.push('/dashboards/' + doc._document.data.value.mapValue.fields.displayName.stringValue)
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
    const [clientProjects, setClientProjects] = useState([])
    const [hireRequests, setHireRequests] = useState([])
    const [projectTitle, setProjectTitle] = useState(null)
    const [agreement, setAgreement] = useState(null)
    const [currentUser, loading, error] = useAuthState(auth)
    const userState = useSnapshot(state)

    async function fetchUserData() {
        const response = await getDocs(
            query(collection
                (firestore, "freelancers"),
                where("displayName", "==", username),
                limit(1)))
        setUserInfo(response.docs[0]['_document'].data.value.mapValue.fields)
    }

    function fetchStuff(){
        const hireRequestsList = []
        if(currentUser) {
          const snapshot = realQuery(ref(database, currentUser.uid + '/hireRequests')) 

          console.log(snapshot)
          
        //   if (snapshot.val())

        //   for(var p in snapshot.val()){
        //     hireRequestsList.push(snapshot.val()[p]);
        //     }

            setHireRequests(hireRequestsList)
            console.log(hireRequestsList)

        
        console.log(currentUser)
    }

    }





    if (loading ) {
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
        <div className="p-24">
            <div className="grid gap-6 my-8 md:grid-cols-2 xl:grid-cols-4">
                <InfoCard
                    title="Total clients"
                    value="6389"
                />

                <InfoCard
                    title="Total Income"
                    value="$ 46,760.89"
                />

                <InfoCard
                    title="Average Monthly Income"
                    value="$ 760.89"
                />

                <InfoCard
                    title="Average Monthly Clients"
                    value="89"
                />

                <h1 className="uppercase mt-12">Client Projects</h1>

                {hireRequests.length > 0 &&
                    <div >
                        {hireRequests.map(hireRequest => (
                            <div className="w-40 h-60">
                                <h3 className="my-6">{hireRequest.title}</h3>
                                <p className="my-6">{hireRequest.description}</p>
                                <p>{hireRequest.requestStatus}</p>

                                <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
                                    <button
                                        className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                                    >
                                        Accept
                                    </button>

                                </div>
                                <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
                                    <button
                                        className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                                    >
                                        Reject
                                    </button>

                                </div>

                            </div>
                        ))
                        }
                    </div>
                }
            </div>
        </div>
    );
}