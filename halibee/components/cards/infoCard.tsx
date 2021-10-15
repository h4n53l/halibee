
export default function InfoCard({ title, value }) {
    return (
        <div className="relative flex smx:mb-40 flex-col  text-center min-w-0 break-words bg-white dark:text-darkMode  text-primary w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
                <h6 className="text-xl font-bold">{title}</h6>
            </div>
            <h4 className=" mt-4 mb-4 text-3xl font-semibold">
                {value}
            </h4>
        </div>
    )
}