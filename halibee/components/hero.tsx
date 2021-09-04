

export default function Hero() {
    return (
        <div
            className="w-full h-screen text-yellow-400 z-10 dark:text-blue-600 flex flex-col text-center justify-center align-center bg-center bg-cover"
            style={{ backgroundImage: "url('/assets/images/freelancer.png')" }}
            >
            <span className="w-full h-full z-20 absolute opacity-10 bg-primary dark:bg-secondary"></span>
                <h1 className="uppercase z-30 font-bolder text-5xl ">
                Go <span className="font-bold text-6xl">Big</span> with <span className="font-bold text-6xl">Halibee</span>.
            </h1>
                <p className="font-bold z-30 text-3xl">
                    We connect you to highly skilled and vetted freelancers.
                </p>
        </div>

    );
}