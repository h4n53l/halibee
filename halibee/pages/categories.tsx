import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from "../components/button";
import { auth } from "../modules/firebase/initialiseFirebase";

export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth)
    const [username, setUsername] = useState("")

    

    return (
        <div>
            <div
                style={{ backgroundImage: "url('/assets/images/bamboo_craft.jpeg')" }}
                className="relative md:pt-32 bg-center z-0 pb-32 pt-12">


            </div>
            <div className="flex flex-wrap justify-center align-center">


                <div className="overflow-hidden -mt-40 z-10 shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">

                    <img alt="Profile photo"
                        src="assets/images/image_1.jpg"
                        className="max-h-60 w-full object-cover" />
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-indigo-500 text-md font-medium">
                        </p>
                        <p className="text-primary dark:text-secondary text-center text-xl font-medium mb-2">
                            HB0001
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className=" pt-10 -mt-40 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white text-primary w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <h6 className="text-xl font-bold">Ratings</h6>
                            </div>
                            <h4 className=" mt-4 mb-4 text-primary text-5xl font-bold">
                      5
                    </h4>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mt-7 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <Button>
                                    Hire Me
                                    </Button>
                        </div>
                    </div>

                    <div className=" pt-10 -mt-40 w-full md:w-4/12 px-4 text-center">
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
                <div className=" border-black">
                    <h4 className="text-center font-bolder text-3xl">
                                            Services
                    </h4>
                    </div>
            </section>
            <section className="m-5 text-primary">
                <div className=" border-black">
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