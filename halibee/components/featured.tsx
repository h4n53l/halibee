import Card from "./card";

export default function Featured(props) {

    return (
        <div className="bg-transparent min-h-screen py-12 px-10 ">
            <h3 className="text-primary text-center mb-5 text-3xl font-bold">
                Featured HaLiBees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">


            {props.featured.map(data => (

                    <Card
                        link={'profiles/' + data.displayName.stringValue}
                        image={data.cardImageURL.stringValue}
                        skill={data.skill.stringValue}
                        hiveName={data.hiveName.stringValue}
                        description={data.description.stringValue}
                        rating={data.rating.stringValue}
                        projects={data.projects.integerValue}
                    />
                ))
                }
                

            </div>
        </div>
        //         <div className="w-full bg-transparent p-auto m-5">
        //             <h3 className="text-primary text-center mb-5 text-3xl font-bold">
        //                 Featured HaLiBees
        //             </h3>

        //             <div className="bg-gray-100 min-h-screen py-32 px-10 ">
        //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 
        //                 {props.featured.map(data => (

        //                     <Card
        //                         link={'profiles/' + data.displayName.stringValue}
        //                         image={data.cardImageURL.stringValue}
        //                         skill={data.skill.stringValue}
        //                         hiveName={data.hiveName.stringValue}
        //                         description={data.description.stringValue}
        //                         rating={data.rating.stringValue}
        //                         projects={data.projects.integerValue}
        //                     />
        //                 ))
        //                 }

        //             </div>
        //             </div>
        //         </div>
    );
}

