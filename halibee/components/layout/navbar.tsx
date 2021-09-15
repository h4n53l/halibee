import { Fragment } from 'react'
import {Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'
import ThemeToggle from '../themeToggle'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../modules/firebase/initialiseFirebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'

export default function Navbar() {

  const logo = "/assets/images/halibee_logo.png"
  const [user, loading, error] = useAuthState(auth)
  
  return (
    <nav className='dark:bg-secondary bg-primary z-40 w-full fixed'>
      
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                
                
              </div>
              <div className="flex-1 flex items-center justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href='/'>
                  <img
                    className="block h-8 w-auto"
                    src={logo}
                    alt="HaLiBee"
                  />
                  </a>
                </div>
                
              </div>

              

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeToggle />
                <button
                  type="button"
                  className="bg-none p-1 rounded-full text-gray-400 "
                >
                  <span className="sr-only">View notifications</span>

                  <BellIcon className='dark:text-primary text-secondary h-6 w-6 text-secondary" aria-hidden="true' />
                </button>

                {/* Profile dropdown */}
                {user ? (<Menu as="div" className="ml-3 z-50 relative">
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
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-tetiary">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/settings"
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                          <Link href={'/profiles/'+user.displayName} key={user.displayName}>
                            Dashboard
                            
                          </Link>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => signOut(auth)}
                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>)
              :
              (
                <div className="flex space-x-4 font-bold uppercase text-sm px-6 py-3 rounded">
                <a
                href='/authentication'
                className='dark:text-primary text-secondary px-3 py-2 rounded-md text-sm font-medium'
                >
                  Login
                </a>
                </div>
              )  
              }
              </div>
            </div>
          </div>

    </nav>
  )
}
