import Head from 'next/head'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Button from '../components/button'


export default function Home() {

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>HaLiBee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">


        <div className="container mx-auto grid md:grid-cols-2 gap-8 lg:grid-cols-4 sm:grid-cols-1 py-8 text-center">
          <div>
            <h5 className="text-primary dark:text-secondary text-5xl font-bold ">
              <span className="inline text-primary dark:text-secondary">
                2179
              </span>
              <span className="text-primary dark:text-secondary">
                +
              </span>
            </h5>
            <p className="text-primary dark:text-secondary text-primary dark:text-secondary tracking-wide text-xs font-medium uppercase">
              Users
            </p>
          </div>
          <div>
            <h5 className="text-primary dark:text-secondary text-5xl font-bold text-primary">
              <span className="inline text-primary dark:text-secondary">
                13
              </span>
              <span className="text-primary dark:text-secondary">
                +
              </span>
            </h5>
            <p className="text-primary dark:text-secondary tracking-wide text-xs font-medium uppercase">
              Ongoing projects
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-primary">
              <span className="inline text-primary dark:text-secondary">
                31
              </span>
              <span className="text-primary dark:text-secondary">
                +
              </span>
            </h5>
            <p className="text-primary dark:text-secondary tracking-wide text-xs font-medium uppercase">
              Finished projects
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-primary">
              <span className="inline text-primary dark:text-secondary">
                3
              </span>
              <span className="text-primary dark:text-secondary">
                +
              </span>
            </h5>
            <p className="text-primary dark:text-secondary tracking-wide text-xs font-medium uppercase">
              Years in business
            </p>
          </div>
        </div>


        
        
      </main>

    </div>
      )
}
