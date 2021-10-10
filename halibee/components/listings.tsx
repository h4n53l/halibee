import Card from "./card";

export default function Listings(props) {

    return (
        <div className="bg-transparent min-h-screen py-12 mx-auto px-auto ">
            {props.title && <h3 className="text-primary dark:text-darkMode text-center mb-5 text-3xl font-bold">
                {props.title}
            </h3>}
            {props.featured && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">


                {props.featured.map(data => (

                    <Card
                        link={'/profiles/' + data.displayName.stringValue}
                        image={data.cardImageURL.stringValue}
                        skill={data.skill.stringValue}
                        hiveName={data.hiveName.stringValue}
                        description={data.description.stringValue}
                        rating={data.rating.stringValue}
                        projects={data.projects.integerValue}
                    />
                ))
                }


            </div>}


            </div>
       
    );
}

