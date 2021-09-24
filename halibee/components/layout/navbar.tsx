import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
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
    <nav className='dark:bg-secondary bg-primary z-30 w-full fixed'>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <div className=" flex items-center justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href='/'>
                <img
                  className="block h-8 w-auto"
                  src={logo}
                  alt="HaLiBee"
                />
              </Link>
            </div>

            <div className="font-bold mx-auto  uppercase text-sm py-3 rounded">
              <Link href='/categories'>
              <a className='dark:text-primary text-secondary px-2 py-2 rounded-md text-sm font-medium'>
                Categories
              </a>
              </Link>
            </div>
          </div>

          <div className=" font-bold uppercase justify-center place-self-center hidden md:inline   text-sm py-3 rounded">
            <div className="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-secondary dark:bg-primary overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-primary dark:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            <button
              type="button"
              className="bg-none p-1 rounded-full text-gray-400 "
            >
              <span className="sr-only">View notifications</span>

              <BellIcon className='dark:text-primary text-secondary h-6 w-6 text-secondary" aria-hidden="true' />
            </button>

            {/* Profile dropdown */}
            {user ? (<Menu as="div" className="ml-0 z-50 relative">
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
                      <Link href="/settings">
                      <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                        Settings
                      </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={'/profiles/' + user.displayName} key={user.displayName}>
                          <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                          Dashboard
                      </a>
                        </Link>
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
                <div className="flex font-bold uppercase text-sm px-auto py-3 rounded">
                  <Link href='/authentication'>
                  <a className='dark:text-primary text-secondary px-auot py-2 rounded-md text-sm font-medium'>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
