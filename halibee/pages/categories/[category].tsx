import { query, where, getDocs, collection } from "@firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Listings from "../../components/listings";
import { firestore } from "../../modules/firebase/initialiseFirebase";


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

export const getStaticPaths: GetStaticPaths = async () => {
    const response: any = await getDocs(collection(firestore, "categories"))
    const more_paths = []
    response.forEach((doc: any) => {
        more_paths.push('/categories/' + doc._document.data.value.mapValue.fields.skill.stringValue)
    })
    return {
        paths: more_paths,
        fallback: false
    }
}

export default function () {
    const [userData, setUserData] = useState(null)
    const router = useRouter()
    const { category } = router.query

    console.log(category)

    useEffect(() => {
        async function fetchUserData() {
            const response = await getDocs(
                query(collection
                    (firestore, "freelancers"),
                    where("category", "==", category)))
            const freelancers = response.docs
            const data = []
            freelancers.forEach((doc: any) => {
                data.push(doc._document.data.value.mapValue.fields)
              })

              setUserData(data)
        }

        fetchUserData()
    }, [])
    
    console.log(userData)
    if (userData === null) {
        return (
            <div className="p-40">Coming Soon</div>
        )
    }

    return (
        <div className="p-10">
            <Listings title={category} featured={userData} />
        </div>
    );
}