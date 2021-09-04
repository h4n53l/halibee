export default function Featured() {
    return (
        <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
            <div className="title">
                <p className="text-4xl font-bold text-gray-800 mb-4">
                    Lastest articles
                </p>
                <p className="text-2xl font-light text-gray-400">
                    All article are verified by 2 experts and valdiate by the CTO
                </p>
            </div>
            <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/1.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                Video
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                Work at home
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                Work at home, remote, is the new age of the job, every person can work at home....
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/2.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                Oui
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                test
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supercar is here, 543 cv and 140 000$ !!
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/3.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                Oui
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                test
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supercar is here, 543 cv and 140 000$ !!
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/4.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                test
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supercar is here, 543 cv and 140 000$ !!
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/5.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                test
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supercar is here, 543 cv and 140 000$ !!
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/6.jpg" className="max-h-40 w-full object-cover"/>
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                Oui
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                test
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                The new supercar is here, 543 cv and 140 000$ !!
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}