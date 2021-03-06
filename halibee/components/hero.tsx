

export default function Hero() {
    return (
        <div
            className="flex flex-col w-full h-screen text-yellow-400 z-10 text-center justify-center align-center bg-center bg-cover"
            style={{ backgroundImage: "url('/assets/images/freelancer.png')" }}
            >
            <span className="w-full h-full z-20 absolute opacity-10 bg-primary dark:bg-darkMode"></span>
                
                <h1 className="uppercase z-30 font-bolder mt-20 sm:mt-0 text-5xl ">
                Go <span className="font-bold text-6xl">Big</span> with <span className="font-bold text-6xl">Halibee</span>.
            </h1>
                <p className="font-bold z-30 text-3xl">
                    We connect you to highly skilled and vetted freelancers.
                </p>
        </div>

    );
}