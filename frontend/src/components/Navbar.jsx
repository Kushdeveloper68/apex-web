import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/apex-logo.png'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Products' },
    { to: '/gallary', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border-light bg-white/95 backdrop-blur-md'>
      <div className='max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-3 group'>
          <div className='w-15 h-15 rounded-sm flex items-center justify-center'>
            <img src={logo} alt="Apex Logo" />
          </div>
          <div>
            <span className='text-primary text-lg font-extrabold tracking-tight leading-none'>
              TRUEBUILD
            </span>
            <span className='block text-[10px] font-bold text-accent tracking-[0.15em] uppercase leading-none'>
              Deck & Turf
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold transition-colors relative pb-1 ${
                isActive(link.to)
                  ? 'text-accent'
                  : 'text-primary hover:text-accent'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full' />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <Link
            to='/contact'
            className='flex items-center gap-2 h-10 px-5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm'
          >
            <span className='material-symbols-outlined text-base text-accent'>request_quote</span>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden p-2 text-primary'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className='material-symbols-outlined'>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white border-t border-border-light px-6 py-4 flex flex-col gap-4'>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-semibold py-2 border-b border-border-light ${
                isActive(link.to) ? 'text-accent' : 'text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to='/contact'
            onClick={() => setMenuOpen(false)}
            className='mt-2 flex items-center justify-center gap-2 h-11 bg-primary text-white text-sm font-bold rounded-lg'
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar