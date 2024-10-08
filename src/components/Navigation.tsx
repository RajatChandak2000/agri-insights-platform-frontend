import { useState } from 'react'
import Link from 'next/link'
import { FaUserCircle, FaHome, FaBars, FaTimes } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { loggedIn, signOut, username } = useAuth()

  // Toggle navigation menu
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed left-0 right-0 top-8 z-20 flex h-[60px] w-full items-center justify-center bg-white px-4 shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='space-x- mx-auto flex items-center justify-between'>
          {/* Home Icon */}
          <Link href='/'>
            <div className='flex cursor-pointer items-center justify-between space-x-2 text-xl'>
              <FaHome className='text-red-600' />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden space-x-6 md:flex'>
            <li>
              <Link href='/'>
                <div className='cursor-pointer text-red-600'>Home</div>
              </Link>
            </li>
            <li>
              <Link href='/dairy'>
                <div className='cursor-pointer text-red-600'>Dairy</div>
              </Link>
            </li>
            <li>
              <a
                href='https://cals.ncsu.edu/are-extension/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='cursor-pointer text-red-600'>
                  NCSU Ag&Resource Economics Extension
                </div>
              </a>
            </li>
            <li>
              <Link href='/tomato'>
                <div className='cursor-pointer text-red-600'>Tomatoes</div>
              </Link>
            </li>
            {/* {!loggedIn && (
              <li>
                <Link href='/signup'>
                  <div className='cursor-pointer text-red-600'>Sign Up</div>
                </Link>
              </li>
            )}
            <li>
              <Link href={loggedIn ? '/' : '/signin'}>
                <div
                  className='cursor-pointer text-red-600'
                  onClick={loggedIn ? signOut : undefined}
                >
                  {loggedIn ? 'Sign Out' : 'Sign In'}
                </div>
              </Link>
            </li> */}
            <li>
              {loggedIn ? (
                <div className='flex space-x-4'>
                  <Link href='/'>
                    <div
                      className='cursor-pointer text-red-600'
                      onClick={signOut}
                    >
                      Sign Out
                    </div>
                  </Link>
                </div>
              ) : (
                <div className='flex space-x-4'>
                  <Link href='/signin'>
                    <div className='cursor-pointer text-red-600'>Sign In</div>
                  </Link>
                  <Link href='/signup'>
                    <div className='cursor-pointer text-red-600'>Sign Up</div>
                  </Link>
                </div>
              )}
            </li>
            {/* <li className='text-gray-800'>{username || 'Guest'}</li> */}
          </ul>
        </div>

        {/* Username Display */}
        <div className='hidden items-center space-x-4 md:flex'>
          {loggedIn && (
            <div className='flex items-center space-x-2 rounded-full bg-gray-200 p-2'>
              <FaUserCircle className='text-xl text-gray-700' />
              <span className='text-lg font-semibold text-gray-800'>
                {username}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={handleClick}>
            {!nav ? (
              <FaBars className='text-red-600' />
            ) : (
              <FaTimes className='text-red-600' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${!nav ? 'hidden' : 'flex'} absolute left-0 top-[60px] w-full flex-col space-y-4 bg-white p-4 shadow-md md:hidden`}
      >
        <li>
          <Link href='/about'>
            <div className='cursor-pointer text-red-600' onClick={handleClick}>
              About Us
            </div>
          </Link>
        </li>
        <li>
          <Link href='/enterprises'>
            <div className='cursor-pointer text-red-600' onClick={handleClick}>
              Enterprises
            </div>
          </Link>
        </li>
        <li>
          <Link href='/resources'>
            <div className='cursor-pointer text-red-600' onClick={handleClick}>
              Resources
            </div>
          </Link>
        </li>
        {!loggedIn && (
          <li>
            <Link href='/signup'>
              <div className='cursor-pointer text-red-600'>Sign Up</div>
            </Link>
          </li>
        )}
        <li>
          <Link href={loggedIn ? '/' : '/signin'}>
            <div
              className='cursor-pointer text-red-600'
              onClick={loggedIn ? signOut : undefined}
            >
              {loggedIn ? 'Sign Out' : 'Sign In'}
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
