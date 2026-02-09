import React from 'react'

function Footer () {
  return (
    <footer className='bg-background-dark text-white py-16 border-t border-white/5'>
      <div className='max-w-[1280px] mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-12'>
        <div className='col-span-1 md:col-span-1'>
          <div className='flex items-center gap-4 text-accent mb-6'>
            <div className='size-6'>
              <svg
                fill='none'
                viewBox='0 0 48 48'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z'
                  fill='currentColor'
                ></path>
              </svg>
            </div>
            <h2 className='text-white text-lg font-bold leading-tight'>
              APEX Deck &amp; Design
            </h2>
          </div>
          <p className='text-gray-400 text-sm leading-relaxed'>
            Crafting premium outdoor living spaces with precision engineering
            and architectural vision since 2008.
          </p>
        </div>
        <div>
          <h4 className='font-bold mb-6 uppercase text-xs tracking-widest text-accent'>
            Services
          </h4>
          <ul className='text-gray-400 text-sm space-y-4'>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                Indoor Cladding
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
               Outdoor Cladding
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
               Composite Decking
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                Cabinet Making
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold mb-6 uppercase text-xs tracking-widest text-accent'>
            Company
          </h4>
          <ul className='text-gray-400 text-sm space-y-4'>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                About 
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                Project Gallery
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                Testimonials
              </a>
            </li>
            <li>
              <a className='hover:text-white transition-colors' href='#'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold mb-6 uppercase text-xs tracking-widest text-accent'>
            Connect
          </h4>
          <div className='flex gap-4'>
            <a
              className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all'
              href='#'
            >
              <span className='material-symbols-outlined text-sm'>share</span>
            </a>
            <a
              className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all'
              href='#'
            >
              <span className='material-symbols-outlined text-sm'>camera</span>
            </a>
            <a
              className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-all'
              href='#'
            >
              <span className='material-symbols-outlined text-sm'>mail</span>
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-[1280px] mx-auto px-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-gray-500 text-xs'>
        <p>© 2024 APEX Deck &amp; Design. All rights reserved.</p>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <a className='hover:text-white' href='#'>
            Privacy Policy
          </a>
          <a className='hover:text-white' href='#'>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
