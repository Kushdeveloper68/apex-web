import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background-light via-white to-background-light dark:from-background-dark dark:via-[#2a2520] dark:to-background-dark flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Main Content Container */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* 404 Icon/Number */}
          <div className="relative">
            <div className="text-9xl md:text-[150px] font-bold text-primary/10 dark:text-accent/10 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-7xl md:text-8xl text-primary dark:text-accent animate-bounce">
                construction
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#161413] dark:text-white leading-tight">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-[#7c746e] dark:text-gray-400 leading-relaxed">
              We're sorry, but the page you're looking for seems to have wandered off like misplaced timber. Let's get you back on track.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4">
            <button
              onClick={() => navigate('/')}
              className="px-8 h-12 rounded-lg bg-primary text-white font-bold text-base shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">home</span>
                <span>Back to Home</span>
              </span>
            </button>
            <button
              onClick={() => navigate('/services')}
              className="px-8 h-12 rounded-lg border-2 border-primary text-primary dark:text-accent dark:border-accent font-bold text-base hover:bg-primary/10 dark:hover:bg-accent/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">build</span>
                <span>View Services</span>
              </span>
            </button>
          </div>

          {/* Footer Message */}
          <div className="pt-8 border-t border-[#f3f2f1] dark:border-[#333] w-full">
            <p className="text-sm text-[#7c746e] dark:text-gray-500">
              If you believe this is a mistake, please{' '}
              <button 
                onClick={() => navigate('/contact')}
                className="text-primary dark:text-accent font-bold hover:underline transition-all"
              >
                contact us
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound