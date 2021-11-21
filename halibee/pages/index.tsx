import { GetStaticProps } from 'next'
import Head from 'next/head'
import CallToAction from '../components/callToAction'
import Hero from '../components/hero'
import { collection, getDocs } from '@firebase/firestore'
import { auth, firestore } from '../modules/firebase/initialiseFirebase'
import Listings from '../components/listings'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from 'react'


export const getStaticProps: GetStaticProps = async () => {
  const response = await getDocs(collection(firestore, "freelancers"))

  const userData = []
  response.forEach((doc: any) => {
    userData.push(doc._document.data.value.mapValue.fields)
  })

  return {
    props: { userData }
  }

}



export default function Home({ userData }) {
  const [user, loading, error] = useAuthState(auth)
  const [freelancer, setFreelancer] = useState<Boolean>(false)
  const [freelancerForm, setFreelancerForm] = useState<Boolean>(false)

  if (user) {
    user.getIdTokenResult(false)
      .then((idTokenResult) => {
        if (idTokenResult.claims.freelancer) {
          setFreelancer(true)
        }
      })
  }

  const openFreelancerForm = () => {
    setFreelancerForm(true)
  }

  const submitFreelancerApplication = () => {
    setFreelancerForm(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>HaLiBee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      {user ?
        <h1 className="text-primary text-center mb-5 text-5xl font-semibold">
          Hi {user.displayName}, glad to see you!
        </h1>

        :

        <CallToAction />

      }

      <Listings title="Featured Halibees" featured={userData} />

      {!freelancer && !freelancerForm &&
        <div className="flex flex-col items-center justify-center w-96">
          <h3 className="text-center leading-relaxed">
            Freelancers on HaLiBee are making a difference within and beyond
            their community by delivering World class services with their skills.
            You too can be a HaLiBee.
          </h3>
          <button
            className="bg-primary  dark:bg-darkMode my-6 text-secondary font-bold uppercase text-base px-8 py-3 rounded ease-linear"
            onClick={() => openFreelancerForm()}
          >
            Become a Freelancer
          </button>
        </div>
      }

      {!freelancer && freelancerForm &&
        <div className="mx-12">
          <form className="form bg-white rounded-lg p-6 my-10  space-y-6 relative">

            <h3 className="text-2xl text-primary text-center dark:text-darkMode font-bold">
              Application Details
            </h3>

            <input
              name="hiveName"
              type="text"
              maxLength={91}
              value={""}
              onChange={(e) => console.log(e.target.value)}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Hive name"
            />

            <input
              name="skill"
              type="text"
              maxLength={91}
              value={""}
              onChange={(e) => console.log(e.target.value)}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your skill"
            />

            <select 
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            name="skillCategory"
            >
              <option value="A">Computer Programmers</option>
              <option value="B">Graphics Designers</option>
              <option value="-">Writer</option>
            </select>

            <textarea
              name="skillProfile"
              value={""}
              onChange={(e) => console.log(e.target.value)}
              placeholder="Tell us about your skill and experience"
              className="border p-2 mt-3 w-full"
            />

            <div className="relative flex flex-row items-center justify-center min-w-40 break-words w-full mb-8 ">
              <button
                className="py-2 px-4 mt-6 bg-primary dark:bg-darkMode text-secondary w-60 text-center text-base font-semibold shadow-lg rounded-lg rounded-lg"
                onClick={() => submitFreelancerApplication()}
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      }

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
