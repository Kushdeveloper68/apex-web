import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/apex-logo.png'
function Footer() {
  return (
    <footer className='bg-primary text-white'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* Brand */}
        <div className='lg:col-span-1'>
          <div className='flex items-center gap-3 mb-5'>
            <div className='w-16 h-16  rounded-sm flex items-center justify-center'>
              <img src={logo} alt="apex logo" />
            </div>
            <div>
              <span className='text-white text-lg font-extrabold tracking-tight leading-none'>TRUEBUILD</span>
              <span className='block text-[10px] font-bold text-accent tracking-[0.15em] uppercase leading-none'>Deck & Turf</span>
            </div>
          </div>
          <p className='text-white/60 text-sm leading-relaxed mb-6'>
            Premium decoration materials — PVC Marble Sheets, WPC Wall & Outdoor Panels, PS Panels, and MDF Acoustic Panels. Trusted by professionals, chosen for quality.
          </p>
          <div className='flex gap-3'>
            {['share', 'camera', 'mail'].map(icon => (
              <a key={icon} href='#' className='w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-all'>
                <span className='material-symbols-outlined text-sm'>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className='font-bold mb-5 uppercase text-xs tracking-widest text-accent'>Products</h4>
          <ul className='text-white/60 text-sm space-y-3'>
            {[
              { label: 'PVC Marble Sheet', id: 'pvc-marble-sheet' },
              { label: 'WPC Wall Panel', id: 'wpc-wall-panel' },
              { label: 'WPC Outdoor Panel', id: 'wpc-outdoor-panel' },
              { label: 'PS Panel', id: 'ps-panel' },
              { label: 'MDF Acoustic Panel', id: 'acoustic-panel' },
            ].map(item => (
              <li key={item.id}>
                <Link to={`/detailservice/${item.id}`} className='hover:text-accent transition-colors'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className='font-bold mb-5 uppercase text-xs tracking-widest text-accent'>Company</h4>
          <ul className='text-white/60 text-sm space-y-3'>
            {[
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'All Products' },
              { to: '/gallary', label: 'Project Gallery' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/contact', label: 'Get a Quote' },
            ].map(item => (
              <li key={item.label}>
                <Link to={item.to} className='hover:text-accent transition-colors'>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='font-bold mb-5 uppercase text-xs tracking-widest text-accent'>Get In Touch</h4>
          <div className='space-y-4 text-sm text-white/60'>
            <div className='flex items-start gap-3'>
              <span className='material-symbols-outlined text-accent text-base mt-0.5'>call</span>
              <div>
                <p className='text-white font-semibold'>Call Us</p>
                <p>+63 426 426 469 TrueBuild</p>
                <p className='text-xs'>Mon – Fri, 8am – 6pm</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <span className='material-symbols-outlined text-accent text-base mt-0.5'>mail</span>
              <div>
                <p className='text-white font-semibold'>Email Us</p>
                <p>info@truebuilddeck.com.au</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <span className='material-symbols-outlined text-accent text-base mt-0.5'>location_on</span>
              <div>
                <p className='text-white font-semibold'>Service Areas</p>
                <p>Greater Sydney · Melbourne<br/>Brisbane · Canberra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs'>
          <p>© 2024 TrueBuild Deck & Turf. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
            <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer