export default function Projects() {
    return (
        <div>
            <section className="mx-20 text-primary dark:text-darkMode ">
                <div className=" flex flex-col w-full items-center">
                    <h4 className="text-center font-bold text-3xl">
                        Hire Requests
                    </h4>
                    <div className="relative flex h-auto mx-2 smx:mb-40 flex-row justify-between min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full mb-8 shadow-lg rounded-lg">
                        <div className="relative p-2 flex flex-col w-auto ">
                            <h5 className="font-bold text-sm uppercase">
                                Client
                                </h5>
                            <img 
                            src="/assets/images/freelancer.png"
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                            />
                            <p className="text-sm italic">
                                Username
                                </p>
                        </div>
                        
                        <div className="relative p-2 flex flex-col w-auto ">
                            <h5 className="font-bold text-sm uppercase">
                                Title
                                </h5>
                            <p className="text-sm">
                                Title
                                </p>
                        </div>
                        
                        <div className="relative p-2  flex flex-col w-auto ">
                            <h5 className="font-bold text-sm uppercase">
                                Date
                                </h5>
                            <p className="text-sm">
                                25/10/2021
                                </p>
                        </div>
                        
                    </div>
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