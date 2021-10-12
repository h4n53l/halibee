import { GetStaticProps } from 'next'
import Head from 'next/head'
import CallToAction from '../components/callToAction'
import Hero from '../components/hero'
import { collection, getDocs } from '@firebase/firestore'
import { firestore } from '../modules/firebase/initialiseFirebase'
import Listings from '../components/listings'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

export const getStaticProps: GetStaticProps = async () =>  {
  const response = await getDocs(collection(firestore, "freelancers"))

  const userData = []
  response.forEach((doc: any) => {
    userData.push(doc._document.data.value.mapValue.fields)
  })

  return {
    props: {userData }
  }
  
}

const appID = process.env.COMETCHAT_APP_ID;
const region = process.env.COMETCHAT_REGION;

const CometChat = dynamic(
  () => import('@cometchat-pro/chat'),
  { ssr: false }
)

const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

useEffect(() => {
  
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now call login function.
    },
    error => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
}, [])

export default function Home({userData}) {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>HaLiBee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <CallToAction />

      <Listings title="Featured Halibees" featured={userData}/>

      <div className="w-full bg-primary dark:bg-darkMode mx-auto grid md:grid-cols-2 gap-8 lg:grid-cols-4 sm:grid-cols-1 py-8 text-center">
        <div className="w-full">
          <h5 className="text-secondary text-5xl font-bold ">
            <span className="inline text-secondary ">
              2179
            </span>
            <span className="text-secondary ">
              +
            </span>
          </h5>
          <p className="text-secondary  tracking-wide text-xs font-medium uppercase">
            Users
          </p>
        </div>
        <div>
          <h5 className="text-secondary  text-5xl font-bold text-primary">
            <span className="inline text-secondary ">
              13
            </span>
            <span className="text-secondary ">
              +
            </span>
          </h5>
          <p className="text-secondary  tracking-wide text-xs font-medium uppercase">
            Ongoing projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-primary">
            <span className="inline text-secondary ">
              31
            </span>
            <span className="text-secondary ">
              +
            </span>
          </h5>
          <p className="text-secondary  tracking-wide text-xs font-medium uppercase">
            Finished projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-primary">
            <span className="inline text-secondary ">
              3
            </span>
            <span className="text-secondary ">
              +
            </span>
          </h5>
          <p className="text-secondary  tracking-wide text-xs font-medium uppercase">
            Years in business
          </p>
        </div>
      </div>




    </div>
  )
}
