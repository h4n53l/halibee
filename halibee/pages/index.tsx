import Head from 'next/head'
import CallToAction from '../components/callToAction'
import Hero from '../components/hero'


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>HaLiBee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <CallToAction />


      <div className="w-full bg-primary dark:bg-secondary mx-auto grid md:grid-cols-2 gap-8 lg:grid-cols-4 sm:grid-cols-1 py-8 text-center">
        <div className="w-full">
          <h5 className="text-secondary dark:text-primary text-5xl font-bold ">
            <span className="inline text-secondary dark:text-primary">
              2179
            </span>
            <span className="text-secondary dark:text-primary">
              +
            </span>
          </h5>
          <p className="text-secondary dark:text-primary tracking-wide text-xs font-medium uppercase">
            Users
          </p>
        </div>
        <div>
          <h5 className="text-secondary dark:text-primary text-5xl font-bold text-primary">
            <span className="inline text-secondary dark:text-primary">
              13
            </span>
            <span className="text-secondary dark:text-primary">
              +
            </span>
          </h5>
          <p className="text-secondary dark:text-primary tracking-wide text-xs font-medium uppercase">
            Ongoing projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-primary">
            <span className="inline text-secondary dark:text-primary">
              31
            </span>
            <span className="text-secondary dark:text-primary">
              +
            </span>
          </h5>
          <p className="text-secondary dark:text-primary tracking-wide text-xs font-medium uppercase">
            Finished projects
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-primary">
            <span className="inline text-secondary dark:text-primary">
              3
            </span>
            <span className="text-secondary dark:text-primary">
              +
            </span>
          </h5>
          <p className="text-secondary dark:text-primary tracking-wide text-xs font-medium uppercase">
            Years in business
          </p>
        </div>
      </div>




    </div>
  )
}
