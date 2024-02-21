import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/Ace v8.png'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 shadow-lg text-primary-200 mb-8 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            className="w-24 md:w-32 h-auto"
            alt="Ace Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/#home"
                className="block py-2 px-3 text-white font-bold bg-blue-700 rounded md:bg-transparent md:text-primary-100 md:p-0 hover:text-primary-200 transition duration-100"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#whoweare"
                className="block py-2 px-3 text-white font-bold bg-blue-700 rounded md:bg-transparent md:text-primary-100 md:p-0 hover:text-primary-200 transition duration-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="block py-2 px-3 text-white font-bold bg-blue-700 rounded md:bg-transparent md:text-primary-100 md:p-0 hover:text-primary-200 transition duration-100"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contactus"
                className="block py-2 px-3 text-white font-bold bg-blue-700 rounded md:bg-transparent md:text-primary-100 md:p-0 hover:text-primary-200 transition duration-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header