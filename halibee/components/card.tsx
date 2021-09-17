import { StarIcon } from "@heroicons/react/solid";

export default function Card(props) {
    return (

        <div className="container mx-auto w-60 h-80 flex flex-col justify-between shadow-lg overflow-hidden rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <a href={props.link} className="w-full  h-full">
                {props.image &&
                    <img src={props.image} alt={props.hiveName} className="max-h-40 w-full object-cover" />
                }
                <div className="bg-yellow-300 h-full w-full p-2">
                    {props.skill && <h4 className="text-primary text-center text-md font-medium">{props.skill}</h4>}
                    {props.hiveName && <h1 className="text-dark text-center text-lg font-bold mb-2">{props.hiveName}</h1>}
                    {props.description && <p className="text-dark text-sm text-center mb-2 hover-text-900 ">{props.description}</p>}

                    <div className="flex flex-row justify-between text-sm">
                        <p className="text-dark flex flex-row font-black">
                            Rating: &nbsp;
                            {props.rating}<StarIcon className="h-4 text-primary mt-1 w-4" />
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