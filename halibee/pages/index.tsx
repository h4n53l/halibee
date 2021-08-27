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


        <div className=" max-w-full container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">
                2179
              </span>
              <span className="text-indigo-200">
                +
              </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Users
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">
                13
              </span>
              <span className="text-indigo-200">
                +
              </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Ongoing projects
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">
                31
              </span>
              <span className="text-indigo-200">
                +
              </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Finished projects
            </p>
          </div>
          <div>
            <h5 className="text-5xl font-bold text-white">
              <span className="inline text-white">
                3
              </span>
              <span className="text-indigo-200">
                +
              </span>
            </h5>
            <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
              Years in business
            </p>
          </div>
        </div>
        <div className="w-52 mx-auto mt-4 p-4 flex">
          <Button text='Hi' />
        </div>


        
        
      </main>

    </div>
      )
}
