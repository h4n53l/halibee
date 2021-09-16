import { StarIcon } from "@heroicons/react/solid";

export default function Card(props) {
    return (

        <div className="container mx-auto w-60 h-80 flex flex-col justify-between shadow-lg overflow-hidden rounded-lg max-w-md hover:shadow-2xl transition duration-300">
            <a href={props.link} className="w-full  h-full">
                {props.image &&
                    <img src={props.image} alt="" className="max-h-40 w-full object-cover" />
                }
                <div className="bg-yellow-300 h-full w-full p-2">
                    <h4 className="text-primary text-center text-md font-medium">{props.skill}</h4>
                    <h1 className="text-dark text-center dark:text-white text-lg font-bold mb-2">{props.hiveName}</h1>
                    <p className="text-dark text-sm text-center mb-2 hover-text-900 ">{props.description}</p>
                    
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

        // <div className="overflow-hidden shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 rounded-lg h-90 w-60 lg:w-80 cursor-pointer m-auto">
        //     <a href={props.link} className="w-full block h-full">
        //         {props.image ? 
        //         <img alt="card image" src={props.image} className="rounded-t-lg w-full" />
        //         :
        //         <img alt="card image" src="props.image" className="rounded-t-lg w-full" />
        //     }
        //         <div className="bg-yellow-300 w-full p-4">
        //             <p className="text-primary text-center text-md font-medium">
        //                 {props.skill}
        //             </p>
        //             <p className="text-dark text-center dark:text-white text-lg font-bold mb-2">
        //                 {props.hiveName}
        //             </p>
        //             <p className="text-dark text-sm">
        //                 {props.description}
        //             </p>
        //             <div className="flex flex-row justify-between text-sm">
        //                         <p className="text-dark flex flex-row font-black">
        //                             Rating: &nbsp;
        //                             {props.rating}<StarIcon className="h-4 text-primary mt-1 w-4"/>
        //                         </p>

        //                         <p className="text-dark font-black">
        //                             Projects: {props.projects}
        //                         </p>
        //                     </div>
        //         </div>
        //     </a>
        // </div>
    );
}