import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen w-full bg-surface flex items-center justify-center px-6'>
      <div className='w-full max-w-xl text-center'>
        {/* 404 Visual */}
        <div className='relative mb-8'>
          <div className='text-[120px] md:text-[160px] font-black text-primary/8 select-none leading-none'>
            404
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center'>
              <span className='material-symbols-outlined text-4xl text-accent'>inventory_2</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className='accent-divider mx-auto mb-6' />
        <h1 className='text-3xl md:text-4xl font-black text-primary mb-3'>
          Page Not Found
        </h1>
        <p className='text-text-muted text-base leading-relaxed mb-8 max-w-sm mx-auto'>
          The page you're looking for doesn't exist. Let's get you back to browsing our premium decoration materials.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <button
            onClick={() => navigate('/')}
            className='flex items-center justify-center gap-2 px-7 h-12 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all'
          >
            <span className='material-symbols-outlined text-accent text-base'>home</span>
            Back to Home
          </button>
          <Link
            to='/services'
            className='flex items-center justify-center gap-2 px-7 h-12 border-2 border-primary text-primary rounded-xl font-bold text-sm hover:bg-primary/5 transition-all'
          >
            <span className='material-symbols-outlined text-base'>category</span>
            View Products
          </Link>
        </div>

        {/* Contact nudge */}
        <p className='mt-8 text-xs text-text-muted'>
          Lost? <Link to='/contact' className='text-accent font-bold hover:underline'>Contact us</Link> and we'll point you in the right direction.
        </p>
      </div>
    </div>
  )
}

export default PageNotFound