import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ logo, title, firstName }) =>
  <header className="bg-gray-light">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div className="w-full py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <span className="sr-only">realtor.com</span>
            <img
              className="h-10 w-auto"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-10">
          <h1 className="text-gray">{title}</h1>
        </div>
        <div className="ml-10 space-x-4">
          <Link to="/profile" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Welcome {firstName}
          </Link>
        </div>
      </div>
    </nav>
  </header>

export default Header