import React from 'react'
import logo from '../assets/images/apex-logo.png'

function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="TRUEBUILD logo" className="w-35 h-35 object-contain" />

        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-accent animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-100" fill="currentColor" d="M22 12a10 10 0 0 0-10-10v4a6 6 0 0 1 6 6h4z" />
          </svg>
          <span className="text-sm font-semibold text-primary">Loading…</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
