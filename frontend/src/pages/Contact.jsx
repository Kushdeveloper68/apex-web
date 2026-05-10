import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GOOGLE_SHEETS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzMWOjT12nHljLO6LyJeNH30WDcIG_sNs6FjaO9u45BZvWojbyugNhkRgAoFWXHCWco/exec'

const INITIAL_FORM = {
  Name: '',
  Email: '',
  Phone: '',
  Service: '',
  Message: '',
}

const SERVICES = [
  'PVC Marble Sheet',
  'WPC Wall Panel',
  'WPC Outdoor Panel',
  'PS Panel',
  'MDF Acoustic Panel',
  'Multiple Products',
  'General Enquiry',
]

const CONTACT_INFO = [
  {
    icon: 'call',
    label: 'Call Us',
    primary: '1300 APEX DECK',
    secondary: 'Mon – Fri, 8am – 6pm AEST',
  },
  {
    icon: 'mail',
    label: 'Email Us',
    primary: 'hello@apexdeckdesign.com.au',
    secondary: 'We respond within 24 hours',
  },
  {
    icon: 'location_on',
    label: 'Service Areas',
    primary: 'Australia-Wide',
    secondary: 'Sydney · Melbourne · Brisbane · Canberra',
  },
]

const TRUST_BADGES = [
  { icon: 'verified', label: 'Certified Products' },
  { icon: 'eco', label: 'Eco-Friendly Range' },
  { icon: 'schedule', label: '24h Response' },
  { icon: 'security', label: 'Quality Guaranteed' },
]

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(cur => ({ ...cur, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedbackMessage('')
    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.Name,
          email: formData.Email,
          phone: formData.Phone,
          service: formData.Service,
          message: formData.Message,
        }),
      })
      setStatus('success')
      setFeedbackMessage('Thank you — your enquiry has been sent. We will be in touch within 24 hours.')
      setFormData(INITIAL_FORM)
    } catch {
      setStatus('error')
      setFeedbackMessage('Sorry, we could not send your message right now. Please try again or email us directly.')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className='max-w-[1280px] mx-auto px-6 py-8'>
        <div
          className='flex min-h-[380px] flex-col gap-5 bg-cover bg-center rounded-2xl items-start justify-end px-8 pb-12 md:px-12 overflow-hidden shadow-product'
          style={{
            backgroundImage: `linear-gradient(to top, rgba(28,25,22,0.85) 25%, rgba(28,25,22,0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbP4I3cxyCkPwyicJNv1e6FQVgFjfNrd1fB-iExSL3ckMYSUsOiwEdX5bT4qfl8kt4nxzhCzQrinvSSu53fRw0shT7xchTBiS3ZqNXK3AQOQjCx__Jpmj4IwHbVU4rJ_rmMMRMf2U0QWaawKpXEnW67nTr4Ot4RT9N7FcjzK-2rmJCsBJSl00aawexltWvvodUHtJmE5JtE3TYeiW8dZZDJJAVdr-0_HlV-UlmLLS4gD_-m0WVQgpEeGn1MOXJ-m6hIZwXAA5zEWE')`,
          }}
        >
          <div className='max-w-xl'>
            <div className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest mb-4'>
              Let's Talk
            </div>
            <h1 className='text-white text-4xl md:text-5xl font-black leading-tight mb-3'>
              Enquire About<br />Our Products
            </h1>
            <p className='text-white/80 text-base leading-relaxed'>
              Request samples, product specifications, or a personalised quote. Our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className='max-w-[1280px] mx-auto px-6 py-10 pb-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

          {/* Form */}
          <div className='lg:col-span-2 bg-white p-8 rounded-2xl border border-border-light shadow-card'>
            <div className='accent-divider mb-5' />
            <h2 className='text-2xl font-black text-primary mb-7'>Send Us a Message</h2>

            <form className='space-y-5' onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-xs font-bold text-primary uppercase tracking-wider'>Full Name *</span>
                  <input
                    className='form-input w-full rounded-xl border border-border-light bg-surface h-13 p-4 text-sm text-primary placeholder:text-text-muted/50 transition-all'
                    placeholder='John Smith'
                    name='Name'
                    onChange={handleChange}
                    value={formData.Name}
                    type='text'
                    required
                  />
                </label>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-xs font-bold text-primary uppercase tracking-wider'>Phone Number *</span>
                  <input
                    className='form-input w-full rounded-xl border border-border-light bg-surface h-13 p-4 text-sm text-primary placeholder:text-text-muted/50 transition-all'
                    placeholder='0400 000 000'
                    name='Phone'
                    onChange={handleChange}
                    value={formData.Phone}
                    type='tel'
                    required
                  />
                </label>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-xs font-bold text-primary uppercase tracking-wider'>Email Address *</span>
                  <input
                    className='form-input w-full rounded-xl border border-border-light bg-surface h-13 p-4 text-sm text-primary placeholder:text-text-muted/50 transition-all'
                    placeholder='john@example.com'
                    name='Email'
                    onChange={handleChange}
                    value={formData.Email}
                    type='email'
                    required
                  />
                </label>
                <label className='flex flex-col gap-1.5'>
                  <span className='text-xs font-bold text-primary uppercase tracking-wider'>Product Interest *</span>
                  <select
                    className='form-input w-full rounded-xl border border-border-light bg-surface h-13 p-4 text-sm text-primary transition-all'
                    name='Service'
                    onChange={handleChange}
                    value={formData.Service}
                    required
                  >
                    <option value='' disabled>Select a Product</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className='flex flex-col gap-1.5'>
                <span className='text-xs font-bold text-primary uppercase tracking-wider'>Project Details *</span>
                <textarea
                  className='form-input w-full rounded-xl border border-border-light bg-surface p-4 text-sm text-primary placeholder:text-text-muted/50 transition-all resize-none'
                  placeholder='Tell us about your project — dimensions, quantities, application area, and any specific requirements...'
                  rows='5'
                  name='Message'
                  onChange={handleChange}
                  value={formData.Message}
                  required
                />
              </label>

              <button
                type='submit'
                disabled={status === 'submitting'}
                className='flex items-center gap-2 h-12 px-8 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-sm'
              >
                <span>{status === 'submitting' ? 'Sending...' : 'Send Enquiry'}</span>
                <span className='material-symbols-outlined text-accent text-base'>
                  {status === 'submitting' ? 'progress_activity' : 'send'}
                </span>
              </button>

              {feedbackMessage && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl text-sm font-medium ${
                    status === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                  role='status'
                >
                  <span className='material-symbols-outlined text-base mt-0.5'>
                    {status === 'success' ? 'check_circle' : 'error'}
                  </span>
                  {feedbackMessage}
                </div>
              )}
            </form>

            {/* Trust Badges */}
            <div className='mt-8 pt-6 border-t border-border-light flex flex-wrap gap-6'>
              {TRUST_BADGES.map(b => (
                <div key={b.label} className='flex items-center gap-2'>
                  <span className='material-symbols-outlined text-accent text-base'>{b.icon}</span>
                  <span className='text-xs font-bold text-text-muted uppercase tracking-widest'>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='flex flex-col gap-6'>
            {/* Contact Info */}
            <div className='bg-white p-7 rounded-2xl border border-border-light shadow-card'>
              <div className='accent-divider mb-5' />
              <h3 className='text-lg font-black text-primary mb-6'>Contact Information</h3>
              <div className='space-y-5'>
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0'>
                      <span className='material-symbols-outlined text-accent text-lg'>{item.icon}</span>
                    </div>
                    <div>
                      <p className='text-[10px] font-bold text-accent uppercase tracking-widest mb-0.5'>{item.label}</p>
                      <p className='text-primary font-bold text-sm'>{item.primary}</p>
                      <p className='text-text-muted text-xs'>{item.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Quick Links */}
            <div className='bg-white p-7 rounded-2xl border border-border-light shadow-card'>
              <div className='accent-divider mb-5' />
              <h3 className='text-sm font-black text-primary mb-4 uppercase tracking-widest'>Our Products</h3>
              <div className='flex flex-col gap-2'>
                {[
                  { id: 'pvc-marble-sheet', label: 'PVC Marble Sheet' },
                  { id: 'wpc-wall-panel', label: 'WPC Wall Panel' },
                  { id: 'wpc-outdoor-panel', label: 'WPC Outdoor Panel' },
                  { id: 'ps-panel', label: 'PS Panel' },
                  { id: 'acoustic-panel', label: 'MDF Acoustic Panel' },
                ].map(p => (
                  <Link
                    key={p.id}
                    to={`/detailservice/${p.id}`}
                    className='flex items-center justify-between py-2.5 border-b border-border-light last:border-0 text-sm text-primary font-medium hover:text-accent transition-colors group'
                  >
                    {p.label}
                    <span className='material-symbols-outlined text-sm text-text-muted group-hover:text-accent transition-colors'>chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className='bg-primary p-7 rounded-2xl'>
              <div className='flex gap-0.5 mb-4'>
                {[1,2,3,4,5].map(s => (
                  <span key={s} className='material-symbols-outlined text-accent text-lg fill-1'>star</span>
                ))}
              </div>
              <p className='text-white/85 text-sm italic leading-relaxed mb-4'>
                "The WPC Wall Panels we ordered from APEX were exactly as described — quality finish, easy installation, and the team was incredibly helpful with technical support."
              </p>
              <p className='text-accent text-xs font-bold'>— James R., Builder · Sydney</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact