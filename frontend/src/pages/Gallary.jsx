import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import galleryProjects from '../utilities/gallery.json'
import brochurePdf from '../assets/pdfs/TrueBuild-brochure.pdf'

const FILTERS = ['All', 'Indoor', 'Outdoor', 'Acoustic']

const TAG_COLORS = {
  Indoor: 'bg-blue-50 text-blue-600',
  Outdoor: 'bg-green-50 text-green-600',
  Acoustic: 'bg-purple-50 text-purple-600',
}

function Gallary() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = galleryProjects.filter(p => activeFilter === 'All' || p.tag === activeFilter)

  return (
    <main>
      {/* Page Header */}
      <section className='max-w-7xl mx-auto px-3 py-12'>
        <div className='flex flex-col gap-3 text-center mb-10'>
          <div className='accent-divider mx-auto' />
          <h1 className='text-primary text-5xl font-black leading-tight tracking-tight'>
            Project Gallery
          </h1>
          <p className='text-text-muted text-lg max-w-2xl mx-auto'>
            Real installations of our PVC Marble Sheets, WPC Wall & Outdoor Panels, PS Panels, and MDF Acoustic Panels — across residential and commercial projects.
          </p>
        </div>

        {/* Filter Chips */}
        <div className='flex justify-center gap-2 mb-10 flex-wrap'>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`h-10 px-5 rounded-full text-sm font-bold transition-all ${
                activeFilter === f
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-primary border border-border-light hover:border-accent/40 hover:bg-surface'
              }`}
            >
              {f}
              {f !== 'All' && (
                <span className='ml-1.5 text-xs opacity-60'>
                  ({galleryProjects.filter(p => p.tag === f).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className='masonry-grid gap-5 space-y-5'>
          {filtered.map(project => (
            <div key={project.id} className='relative group overflow-hidden rounded-2xl bg-surface break-inside-avoid border border-border-light'>
              <img
                alt={project.title}
                src={project.image}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded ${TAG_COLORS[project.tag]}`}>
                    {project.tag}
                  </span>
                </div>
                <Link
                  to={`/detailservice/${project.productId}`}
                  className='text-accent text-[10px] font-bold uppercase tracking-widest mb-1 hover:underline'
                >
                  {project.category}
                </Link>
                <h3 className='text-white text-base font-bold'>{project.title}</h3>
                <p className='text-white/75 text-xs mt-1.5 leading-relaxed'>{project.desc}</p>
              </div>

              {/* Always-visible category badge */}
              <div className='absolute top-3 left-3'>
                <span className='px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-md'>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='max-w-7xl mx-auto px-3 pb-16'>
        <div className='bg-white rounded-2xl p-8 md:p-14 text-center border border-border-light'>
          <div className='accent-divider mx-auto mb-5' />
          <h2 className='text-primary text-3xl md:text-4xl font-black mb-3'>
            Inspired by these installations?
          </h2>
          <p className='text-text-muted text-base mb-7 max-w-xl mx-auto'>
            Let's work together on your next project. Our team can help you select the right product, colour, and profile for your specific application.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to='/contact' className='flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all'>
              <span className='material-symbols-outlined text-accent text-base'>calendar_today</span>
              Book a Consultation
            </Link>
            <Link to='/services' className='px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all'>
              Browse All Products
            </Link>
            <a
              href={brochurePdf}
              download='TRUEBUILD-Brochure.pdf'
              className='flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-accent text-accent font-bold hover:bg-accent hover:text-white transition-all'
            >
              <span className='material-symbols-outlined text-base'>download</span>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallary