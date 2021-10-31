import { formatRelative } from "date-fns";
import { Menu, Transition } from '@headlessui/react'
import { push, ref, update } from "@firebase/database";
import { auth, database } from "../modules/firebase/initialiseFirebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Projects(props) {
    const hireRequests = props.hireRequests
    const [currentUser, loading, error] = useAuthState(auth)

    const parseDate = (date) => {
        return formatRelative(
            new Date(date),
            new Date()
        )
    }

    const createProjectIn = (projectDetails) => {
        push(ref(database,
            currentUser.uid + '/projectIn'),
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
            .then((snap) => {
                update(ref(database,
                    projectDetails.clientUID + '/projectOut/' + projectDetails.requestReference),
                    {
                        requestStatus: 'Accepted',
                        projectReference: snap.key
                    }
                )
            }
            )
    }

    return (
        <div>
            <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Hire Requests
                    </h4>
                    {props.hireRequests ?
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
                                                <Menu as="div" className="ml-0 z-50 relative">
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
                                                                            onClick={() => createProjectIn(hireRequest)}
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
                        Ongoing Projects
                    </h4>
                    <p className="text-center">
                        ''
                    </p>
                </div>
            </section>
            <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Projects Out
                    </h4>
                    <p className="text-center">
                        ''
                    </p>
                </div>
            </section>
            <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Completed Projects
                    </h4>
                    <p className="text-center">
                        ''
                    </p>
                </div>
            </section>
        </div>
    );
}