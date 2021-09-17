export default function Footer() {
    return (
        
<footer className="bg-primary dark:bg-secondary pt-4 pb-8 xl:pt-8">
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-secondary dark:text-primary text-md font-bold uppercase mb-4">
                        About Us
                    </h2>
                    <ul>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background text-background transition-colors duration-200">
                            <a href="#">
                                Who We Are
                            </a>
                        </li>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Testimonials
                            </a>
                        </li>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Terms of Service
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-secondary font-bold dark:text-primary text-md uppercase mb-4">
                        Social Media
                    </h2>
                    <ul>
                        
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Twitter
                            </a>
                        </li>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-secondary font-bold dark:text-primary text-md uppercase mb-4">
                        Contact Us
                    </h2>
                    <ul>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Customer Support
                            </a>
                        </li>
                        <li className="mb-4 hover:text-secondary dark:hover:text-background dark:text-white text-background transition-colors duration-200">
                            <a href="#">
                                Give a Suggestion
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </li>
        </ul>
        
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            Created by the HaLi Team
        </div>
    </div>
</footer>

    );
}