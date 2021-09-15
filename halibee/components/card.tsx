import { StarIcon } from "@heroicons/react/solid";

export default function Card(props) {
    return (
        <div className="overflow-hidden shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg h-90 w-60 lg:w-80 cursor-pointer m-auto">
            <a href={props.link} className="w-full block h-full">
                {props.image ? 
                <img alt="card image" src={props.image} className="max-h-40 w-full object-cover" />
                :
                <img alt="card image" src="props.image" className="max-h-40 w-full object-cover" />
            }
                <div className="bg-yellow-300 dark:bg-gray-800 w-full p-4">
                    <p className="text-primary text-center text-md font-medium">
                        {props.skill}
                    </p>
                    <p className="text-dark text-center dark:text-white text-lg font-bold mb-2">
                        {props.hiveName}
                    </p>
                    <p className="text-dark text-sm">
                        {props.description}
                    </p>
                    <div className="flex flex-row justify-between text-sm">
                                <p className="text-dark flex flex-row font-black">
                                    Rating: &nbsp;
                                    {props.rating}<StarIcon className="h-4 text-primary mt-1 w-4"/>
                                </p>

                                <p className="text-dark font-black">
                                    Projects: {props.projects}
                                </p>
                            </div>
                </div>
            </a>
        </div>
    );
}