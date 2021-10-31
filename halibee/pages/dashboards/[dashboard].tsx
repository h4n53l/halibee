import { useEffect, useState } from "react";
import { GetStaticPaths } from "next";
import InfoCard from "../../components/cards/infoCard";
import { useRouter } from "next/router";
import { auth, database, firestore } from "../../modules/firebase/initialiseFirebase";
import { collection, getDocs, query, where, limit } from '@firebase/firestore'
import { useAuthState } from "react-firebase-hooks/auth";
import { onValue, push, query as realQuery, ref, remove, update } from "@firebase/database";
import { snapshot, useSnapshot } from "valtio";
import { state } from "../../modules/valtio/state";
import { onAuthStateChanged } from "@firebase/auth";
import { Menu } from "@headlessui/react";
import { formatRelative } from "date-fns";


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
    const [myProjects, setMyProjects] = useState([])
    const [completedProjects, setCompletedProjects] = useState([])
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


    const parseDate = (date) => {
        return formatRelative(
            new Date(date),
            new Date()
        )
    }

    const createClientProject = (projectDetails) => {
        push(ref(database,
            currentUser.uid + '/clientProjects'),
            {
                ...projectDetails,
                startDate: new Date().getTime(),
                endDate: new Date().getTime() + 7884000,
                messages: {
                    sender: projectDetails.client,
                    text: projectDetails.description,
                    time: new Date().getTime(),
                    avatar: projectDetails.clientAvatar
                }
            }
        )
            .then((freelancerProjectReference) => {
                update(ref(database,
                    projectDetails.clientUID + '/myProjects/' + projectDetails.requestReference),
                    {
                        requestStatus: 'Ongoing',
                        freelancerProjectReference: freelancerProjectReference.key
                    }
                )
            }
            )

            remove(ref(database,
                projectDetails.clientUID + '/hireRequests/' + projectDetails.hireRequestReference)
            )
    }


    useEffect(() => {

        const hireRequestsList = []
        const clientProjectsList = []
        const myProjectsList = []
        const completedProjectList = []

        onAuthStateChanged(auth, user => {
          onValue(ref(database, user.uid  + '/hireRequests/'), (snapshot) => {

          if (snapshot.val()){

          for(var p in snapshot.val()){
            hireRequestsList.push(snapshot.val()[p]);
            }
}
            setHireRequests(hireRequestsList)

        })
          onValue(ref(database, user.uid  + '/clientProjects/'), (snapshot) => {

          if (snapshot.val()){

          for(var p in snapshot.val()){
            clientProjectsList.push(snapshot.val()[p]);
            }
}
            setClientProjects(clientProjectsList)

        })
          onValue(ref(database, user.uid  + '/myProjects/'), (snapshot) => {

          if (snapshot.val()){

          for(var p in snapshot.val()){
            myProjectsList.push(snapshot.val()[p]);
            }
}
            setMyProjects(myProjectsList)

        })
          onValue(ref(database, user.uid  + '/completedProjects/'), (snapshot) => {

          if (snapshot.val()){

          for(var p in snapshot.val()){
            completedProjectList.push(snapshot.val()[p]);
            }
}
            setCompletedProjects(completedProjectList)

        })
    } )
        
        }, [database]);




    return (
        <div className="pt-10 px-3">
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

                </div>

                <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Hire Requests
                    </h4>
                    {hireRequests.length > 0 ?
                        (
                            <div className="w-full">
                                {hireRequests.map(hireRequest => (

                                    <div className="relative flex flex-col w-100">
                                        <div className="relative flex h-auto mx-2 smx:mb-40 flex-row flex-wrap justify-between min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full m-3 shadow-lg rounded-lg">

                                            <div className="relative p-2 flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Client
                                                </h5>
                                                <img
                                                    src={hireRequest.clientAvatar}
                                                    alt="Avatar"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <p className="text-sm italic">
                                                    {hireRequest.client}
                                                </p>
                                            </div>

                                            <div className="relative p-2 flex flex-col justify-between align-center text-center w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Title
                                                </h5>
                                                <p className="text-sm">
                                                    {hireRequest.title}
                                                </p>
                                                <Menu as="div" className="ml-0 relative">
                                                    <Menu.Button>
                                                        <button className="uppercase h-auto px-2 mt-3 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg">
                                                            Details
                                                        </button>
                                                    </Menu.Button>
                                                    <Menu.Items>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div className="bg-white rounded-lg relative">

                                                                    <div className="flex items-baseline space-x-2 mt-2">

                                                                        <p className="text-sm">{hireRequest.description}</p>
                                                                    </div>
                                                                    <div className="relative flex flex-row items-center justify-between min-w-40 break-words w-full mb-8 ">
                                                                        <button
                                                                            className="uppercase h-auto px-2 mt-3 mr-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                            onClick={() => createClientProject(hireRequest)}
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(hireRequest)}
                                                                        >
                                                                            Decline
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>

                                            <div className="relative p-2  flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Date
                                                </h5>
                                                <p className="text-sm">
                                                    {parseDate(hireRequest.time)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        (
                            <div className="relative p-2 m-3 text-center w-full bg-white h-auto rounded-lg">
                                <h5 className="font-semibold text-md">
                                    There are no Hire Requests at the moment.
                                </h5>
                            </div>
                        )
                    }
                </div>
            </section>
                <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Client Projects
                    </h4>
                    {clientProjects.length > 0 ?
                        (
                            <div className="w-full">
                                {clientProjects.map(clientProject => (

                                    <div className="relative flex flex-col w-100">
                                        <div className="relative flex h-auto mx-2 smx:mb-40 flex-row flex-wrap justify-between min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full m-3 shadow-lg rounded-lg">

                                            <div className="relative p-2 flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Client
                                                </h5>
                                                <img
                                                    src={clientProject.clientAvatar}
                                                    alt="Avatar"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <p className="text-sm italic">
                                                    {clientProject.client}
                                                </p>
                                            </div>

                                            <div className="relative p-2 flex flex-col justify-between align-center text-center w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Title
                                                </h5>
                                                <p className="text-sm">
                                                    {clientProject.title}
                                                </p>
                                                <Menu as="div" className="ml-0 relative">
                                                    <Menu.Button>
                                                        <button className="uppercase h-auto px-2 mt-3 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg">
                                                            Details
                                                        </button>
                                                    </Menu.Button>
                                                    <Menu.Items>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div className="bg-white rounded-lg relative">

                                                                    <div className="flex items-baseline space-x-2 mt-2">

                                                                        <p className="text-sm">{clientProject.description}</p>
                                                                    </div>
                                                                    <div className="relative flex flex-row items-center justify-between min-w-40 break-words w-full mb-8 ">
                                                                        <button
                                                                            className="uppercase h-auto px-2 mt-3 mr-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                            onClick={() => router.push('/messages/1')}
                                                                        >
                                                                            Messages
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(clientProject)}
                                                                        >
                                                                            Media
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(clientProject)}
                                                                        >
                                                                            Summary
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>

                                            <div className="relative p-2  flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Date
                                                </h5>
                                                <p className="text-sm">
                                                    {parseDate(clientProject.time)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        (
                            <div className="relative p-2 m-3 text-center w-full bg-white h-auto rounded-lg">
                                <h5 className="font-semibold text-md">
                                    There are no Client Projects at the moment.
                                </h5>
                            </div>
                        )
                    }
                </div>
            </section>
                <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        My Projects
                    </h4>
                    {completedProjects.length > 0 ?
                        (
                            <div className="w-full">
                                {completedProjects.map(myProject => (

                                    <div className="relative flex flex-col w-100">
                                        <div className="relative flex h-auto mx-2 smx:mb-40 flex-row flex-wrap justify-between min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full m-3 shadow-lg rounded-lg">

                                            <div className="relative p-2 flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Client
                                                </h5>
                                                <img
                                                    src={myProject.clientAvatar}
                                                    alt="Avatar"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <p className="text-sm italic">
                                                    {myProject.client}
                                                </p>
                                            </div>

                                            <div className="relative p-2 flex flex-col justify-between align-center text-center w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Title
                                                </h5>
                                                <p className="text-sm">
                                                    {myProject.title}
                                                </p>
                                                <Menu as="div" className="ml-0 relative">
                                                    <Menu.Button>
                                                        <button className="uppercase h-auto px-2 mt-3 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg">
                                                            Details
                                                        </button>
                                                    </Menu.Button>
                                                    <Menu.Items>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div className="bg-white rounded-lg relative">

                                                                    <div className="flex items-baseline space-x-2 mt-2">

                                                                        <p className="text-sm">{myProject.description}</p>
                                                                    </div>
                                                                    <div className="relative flex flex-row items-center justify-between min-w-40 break-words w-full mb-8 ">
                                                                        <button
                                                                            className="uppercase h-auto px-2 mt-3 mr-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                            onClick={() => router.push('/messages/')}
                                                                        >
                                                                            Messages
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(myProject)}
                                                                        >
                                                                            Media
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(myProject)}
                                                                        >
                                                                            Summary
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>

                                            <div className="relative p-2  flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Date
                                                </h5>
                                                <p className="text-sm">
                                                    {parseDate(myProject.time)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        (
                            <div className="relative p-2 m-3 text-center w-full bg-white h-auto rounded-lg">
                                <h5 className="font-semibold text-md">
                                    You have not hired any freelancer yet.
                                </h5>
                            </div>
                        )
                    }
                </div>
            </section>
                <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Completed Projects
                    </h4>
                    {completedProjects.length > 0 ?
                        (
                            <div className="w-full">
                                {completedProjects.map(completedProject => (

                                    <div className="relative flex flex-col w-100">
                                        <div className="relative flex h-auto mx-2 smx:mb-40 flex-row flex-wrap justify-between min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full m-3 shadow-lg rounded-lg">

                                            <div className="relative p-2 flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Client
                                                </h5>
                                                <img
                                                    src={completedProject.clientAvatar}
                                                    alt="Avatar"
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <p className="text-sm italic">
                                                    {completedProject.client}
                                                </p>
                                            </div>

                                            <div className="relative p-2 flex flex-col justify-between align-center text-center w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Title
                                                </h5>
                                                <p className="text-sm">
                                                    {completedProject.title}
                                                </p>
                                                <Menu as="div" className="ml-0 relative">
                                                    <Menu.Button>
                                                        <button className="uppercase h-auto px-2 mt-3 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg">
                                                            Details
                                                        </button>
                                                    </Menu.Button>
                                                    <Menu.Items>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div className="bg-white rounded-lg relative">

                                                                    <div className="flex items-baseline space-x-2 mt-2">

                                                                        <p className="text-sm">{completedProject.description}</p>
                                                                    </div>
                                                                    <div className="relative flex flex-row items-center justify-between min-w-40 break-words w-full mb-8 ">
                                                                        <button
                                                                            className="uppercase h-auto px-2 mt-3 mr-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                            onClick={() => router.push('/messages/')}
                                                                        >
                                                                            Messages
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(completedProject)}
                                                                        >
                                                                            Media
                                                                        </button>
                                                                        <button 
                                                                        className="uppercase h-auto px-2 mt-3 ml-6 bg-primary dark:bg-darkMode text-secondary w-max text-center font-semibold rounded-lg"
                                                                        onClick={() => console.log(completedProject)}
                                                                        >
                                                                            Summary
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>

                                            <div className="relative p-2  flex flex-col w-auto ">
                                                <h5 className="font-bold text-sm uppercase">
                                                    Date
                                                </h5>
                                                <p className="text-sm">
                                                    {parseDate(completedProject.time)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        (
                            <div className="relative p-2 m-3 text-center w-full bg-white h-auto rounded-lg">
                                <h5 className="font-semibold text-md">
                                    You have not completed any project yet.
                                </h5>
                            </div>
                        )
                    }
                </div>
            </section>
              
            </div>
    );
}