import React from 'react'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-solid border-[#f3f2f1] dark:border-[#333] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 lg:px-40 py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 text-primary'>
          <div className='size-8'>
            <svg
              fill='currentColor'
              viewBox='0 0 48 48'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z'></path>
            </svg>
          </div>
          <h2 className='text-[#161413] dark:text-white text-xl font-extrabold tracking-tight'>
            APEX <span className='text-primary'>DECK &amp; DESIGN</span>
          </h2>
        </div>
        <div className='hidden md:flex flex-1 justify-end gap-8 items-center'>
          <nav className='flex items-center gap-9'>
            <Link
              className='text-[#161413] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors'
              to='/'
            >
              Home
            </Link>
            <Link
              className='text-[#161413] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors'
              to='/about'
            >
              About
            </Link>
            <Link
              className='text-[#161413] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors'
              to='/services'
            >
              Services
            </Link>
            <Link
              className='text-[#161413] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors'
              to='/contact'
            >
              Contact
            </Link>  
            <Link
              className='text-[#161413] dark:text-gray-300 text-sm font-semibold hover:text-primary transition-colors'
              to='/gallary'
            >
             Gallary
            </Link>  
          </nav>
          <button className='flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all'>
            <span>Get a Quote</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
