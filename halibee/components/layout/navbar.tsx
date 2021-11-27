import { useEffect, useState } from 'react'
import { onAuthStateChanged } from "@firebase/auth";
import { Menu } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import ThemeToggle from '../../modules/themeModule/themeToggle'
import { auth } from '../../modules/firebase/initialiseFirebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth';



export default function Navbar() {
  const router = useRouter()
  const logo = "/assets/images/halibee_logo.png"
  const [user, loading, error] = useAuthState(auth)
  const [freelancer, setFreelancer] = useState(false)

  const logout = () => {
    signOut(auth)
    router.push('/')
  }

      if (user) {
        user.getIdTokenResult(false)
          .then((idTokenResult) => {
            if (idTokenResult.claims.freelancer) {
              setFreelancer(true)
            }
          })
        }
        

  return (
    <nav className='dark:bg-darkMode z-30 bg-primary w-full sticky top-0'>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className=" flex items-center justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href='/'>
                <img
                  className="block h-8 w-auto cursor-pointer"
                  src={logo}
                  alt="HaLiBee"
                />
              </Link>
            </div>

            <div className="font-bold mx-auto   text-sm py-3 rounded">
              <Link href='/categories'>
                <button
                  className='text-secondary uppercase px-2 py-2 rounded-md text-sm font-medium'>

                  Categories
                </button>
              </Link>
            </div>
          </div>

          <div className=" font-bold uppercase justify-center place-self-center hidden md:inline   text-sm py-3 rounded">
            <div className="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-secondary overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-primary ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                className="peer h-full w-full outline-none text-sm text-tetiary pr-2"
                type="text"
                id="search"
                placeholder=" Search..." />
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeToggle />
            {user ? (
              <div className="flex flex-row">
                <button
                  type="button"
                  onClick={() => router.push('/messages/' + user.displayName)}
                  className="bg-none p-1 rounded-full text-gray-400 "
                >
                  <span className="sr-only">View notifications</span>

                  <BellIcon className=' text-secondary h-6 w-6 text-secondary" aria-hidden="true' />
                </button>


                <Menu as="div" className="ml-0 z-50 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-tetiary">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/settings">
                          <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                            Settings
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    {freelancer &&
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={'/profiles/' + user.displayName} key={user.displayName}>
                            <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                              Profile
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    }
                    <Menu.Item>
                      {({ active }) => (
                        <Link href={'/dashboards/' + user.displayName} key={user.displayName}>
                          <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                            Dashboard
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => logout()}
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            )
              :
              (
                <div className="flex font-bold uppercase text-sm px-auto py-3 rounded">
                  <Link href='/authentication'>
                    <a className='  text-secondary px-auot py-2 rounded-md text-sm font-medium'>
                      Login
                    </a>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
        <div className="flex flex-row font-bold uppercase justify-center items-center  w-full h-10 md:hidden text-sm rounded">
          <div className="relative flex items-center w-60 h-8 rounded-lg focus-within:shadow-lg bg-secondary overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-tetiary pr-2"
              type="text"
              id="search"
              placeholder=" Search..." />
          </div>
        </div>
      </div>

    </nav>
  )
}
