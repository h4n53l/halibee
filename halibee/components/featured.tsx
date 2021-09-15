import Card from "./card";

export default function Featured(props) {
    
    return (
        <div className="w-full bg-transparent p-auto m-5">
            <h3 className="text-primary text-center mb-5 text-3xl font-bold">
                Featured HaLiBees
            </h3>
            
            <div className="grid flex flex-wrap sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {props.featured.map(data => (

                <Card
                    link={'profiles/'+data.displayName.stringValue}
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
    );
}

