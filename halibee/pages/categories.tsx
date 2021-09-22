import { collection, getDocs } from "@firebase/firestore";
import { GetStaticProps } from "next";
import { firestore } from "../modules/firebase/initialiseFirebase";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const response = await getDocs(collection(firestore, "categories"))
  const categories = []
  
  response.forEach((doc: any) => {
    categories.push(doc._document.data.value.mapValue.fields)
  })

  return {
    props: { categories }
  }

}


export default function Categories({ categories }) {


  return (
    <div className="p-10">
      <div className="bg-transparent min-h-screen py-12 smx:py-20  px-auto ">
        <h3 className="text-primary text-center uppercase mb-5 text-3xl font-bold">
          Categories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
        {categories.map (category => (
          <div className="container bg-secondary smx:w-40 px-auto mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
        <Link href={'/categories/'+ category.skill.stringValue}>
          <a>
            <img src={category.image.stringValue}
              alt={category.skill.stringValue}
              className="rounded-t-lg w-full" />
            <div className="p-6">
              <h1 className="md:text-1xl  text-xl hover:text-white transition duration-200  font-bold text-primary ">
                {category.skill.stringValue}
                </h1>
            </div>
            </a>
            </Link>
          </div>

        ))
        }
        </div>


      </div>


    </div>
       
    );
}