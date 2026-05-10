import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ALL_PROJECTS = [
  {
    id: 1,
    category: 'PVC Marble Sheet',
    tag: 'Indoor',
    title: 'Calacatta White Bathroom Feature Wall',
    desc: 'Full-height PVC marble sheet installation in a master ensuite — seamless, waterproof and stunning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw4UQsgEBvuIZ8Vm7QQ35jkvdA8aGarXZtIkT6SmhodGWOeeBQxUsk0sYc0LfzM5xxAXnTxKTu41R7IbiRum_kMwcLCQldUoyWy5xeACmCTDMiMghFru9fZfOhZK2koQ5kp1DHq9Onww8qsbNpF_8-rAzbRqHVPEU4KQloomeWvM_wRmx5MReJ5L_v1g-7Lzdp9qicqz_BgAem2i88t5YRSJy3aAEt4gZke-K0tfQdxseN1N_Z18ypAevSzJj2xNBirsPt0SIcM5c',
    productId: 'pvc-marble-sheet',
    featured: true,
  },
  {
    id: 2,
    category: 'WPC Outdoor Panel',
    tag: 'Outdoor',
    title: 'Modern Residential Facade — Ash Grey',
    desc: 'Co-extruded WPC outdoor cladding wrapping a contemporary home exterior — fade-free and maintenance-free.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl51Z08CevNeDMASjB-pQOR63yvmdYJzrYX_EJkQnQ_MgwAcY7r2Qx_hv5oehUi-h9QY-tUrksj9xntV9pQDRZhAgVZrCCk8HpjFVDCIBBN7znYosafW5L99TEpHj_YngW6k6ZB_AH0Q6JsCN-QJtoQET6lzjoNfhG0VlToMznXqbVbzinfNm4zF9Iuhjh5GH7BCwb5bwkSATbz9OdZP1tPGT0RK9gFdfmLJpAvi2pjm8xJjUkZJWLwr1Ew2hqtPnGMTk9OPpPLgw',
    productId: 'wpc-outdoor-panel',
    featured: true,
  },
  {
    id: 3,
    category: 'WPC Wall Panel',
    tag: 'Indoor',
    title: 'Dark Walnut Living Room Feature Wall',
    desc: 'WPC wall panels in dark walnut finish — notch-joint installation with zero visible fixings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2OjFi75srM9T55OfsCB3p9n0uFMFE63S9S0w_WQgnIkqAXomtGePyHXn9d_sYmiTG_6ADTkxxeN4X_mem88TnB_5K-TwbZ41X3bMT2yrmkSBkjk5HJVn3Nqit28A27q56YuNonHZjxL2wZ9vPlmG_5z-xKjbynEr35MIsNYFm7qwZ8O26GbXniJrZOccFAl118xyIj6gyMx9U3srtbQuhIrY_tdxsOFE7Cpk5t-YWhZv6uWWqwcDg6mTFx4MuwvT68zsRdMC_EQ8',
    productId: 'wpc-wall-panel',
  },
  {
    id: 4,
    category: 'MDF Acoustic Panel',
    tag: 'Acoustic',
    title: 'Home Theatre Acoustic Wall — Natural Oak',
    desc: 'MDF slatted acoustic panels deliver professional noise control without compromising the interior aesthetic.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVY6P9Mt1wn5Uu1K9yyOgFpalERUckrAyLuDZi03FpHDG-Y7hmJtpobi-_Bq-iPdBoAqSg4-GJRpCgI1YdOo01p0AfxzMMiwlsbZndNKGlU5wgRH2ysUAAhR3tsJq1bGsOhJzoNhUhXPChZdhd0FFh94xFN7NeHWjHchoNbdrHlHViV7241c6Re6FFt5X3US6Yw4DQFG1Oi-VldFUkPwskkU80r17p10ISRiWGg3YEyfdeHfM7hVWXqpgm1iwW6qcxvhfKjEKB-rw',
    productId: 'acoustic-panel',
    featured: true,
  },
  {
    id: 5,
    category: 'PS Panel',
    tag: 'Indoor',
    title: 'Linear Groove PS Panel — Office Interior',
    desc: 'PS architectural panels in a stepped groove profile create a striking commercial office feature wall.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBimconrjzFo0N77I1uWGBfkmcgkwWP9LFHCLuEdMRz8APmVdqXL_oPTZRMJ06g65lMzTa8fDZu2uPg1wnRb_4CVMiVhBWvrBqaJWzzZsaNqcALj-YcvpCAeQ-yChtqB5F014rnLUjwnvt7q4abG2oev2hhUxDT5XXCyGS6ixTRx-6Q69PzSFaIrsPazJIcFBm7ps1gP3Lhh-2v28HSx2m30vqSVbbHajD6LEbHy7HKCsTBO87nhmezx7OvMCW5_lTJdcyKWFWyjkM',
    productId: 'ps-panel',
  },
  {
    id: 6,
    category: 'WPC Outdoor Panel',
    tag: 'Outdoor',
    title: 'Garden Pergola Side Panel — Teak + Black',
    desc: 'Two-tone WPC outdoor panels used as pergola infill — weather-resistant and visually bold.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbxO7f3EsLSlu0bfN2J7EByUhv-kYzQAdCKRakSacenzhiYHaTWkTDF_80Qqfz_RtgV5PDZlXONGrjEQMZ2bHf_K196L-YSUUxwjSSny84HSvuW7YpXbjo6VSOhzv9rJ7pQL_Cvs1QsN4RokMx3Phutm-BaY9Z-wSIPNL4IDaEVJ2MBia4tfkyHRpnf7rlTpVz089IZX4OIy64NX4XSIOoug2WvBvaid71uT6NQoEmLd-uD8ygfzPgtnXEa3NHivbisVw2t0t54b4',
    productId: 'wpc-outdoor-panel',
  },
  {
    id: 7,
    category: 'PVC Marble Sheet',
    tag: 'Indoor',
    title: 'Gold Veined Marble Kitchen Splashback',
    desc: 'PVC marble panels used as a kitchen splashback — fully waterproof and stunning alternative to real stone.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEJ8XD697CGfi-UeTfNcSs05i8WVArpvTjDKUP0OBda9KIGETBbe_hQJcHyVE9Vjk30tf5eTYL_SZf_zCkl-Cdna4AbJ8ihheKpugwCeHnFEz7eMerhaqBjvTzVAQl4QpFILdBbmvGDaxvLoeA1qVautDAg3bio-AMrYKhV8ooc2USbQ8CILhxYn9o5NuTbwlgGRP5frar_VVbPqlfphWHZ5nltEKq35n4tanfY8uoWoJgqXc_OqgxU2NnxHjhUwApks6rVZyXsd8',
    productId: 'pvc-marble-sheet',
  },
  {
    id: 8,
    category: 'WPC Wall Panel',
    tag: 'Indoor',
    title: 'Ash White Bedroom Headboard Wall',
    desc: 'Elegant ash white WPC wall panels create a textured, warm focal point behind the bed.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8-bV5h2LoTF3FTDqCL67IicWJ4pVZ_4fr_H7dF7Sbo7sMoosJhp5AUzEJRd07d1C0fQVnM0OfwIJ6i7S74SI1px_qUb5-l3W9bmyPvofekqbHdvZfQi24nhNFoUSrBEY6Gx5Q8YkQHQ8F84oFt_9UfbBquELhnYu_HNflLFBn_xheeJMmqVBcR-JNESog3PJj5kzYcSffFJqQub15jXnpyd-j-ssUVmkdxIoJlJ9U3K3VvgtBuphPkrv11pWG2d2UT27oLfpC40',
    productId: 'wpc-wall-panel',
  },
  {
    id: 9,
    category: 'MDF Acoustic Panel',
    tag: 'Acoustic',
    title: 'Restaurant Acoustic Ceiling — Walnut Wave',
    desc: 'Premium walnut wave acoustic panels installed across a busy restaurant ceiling — dramatic and functional.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgkeOnjeyzq8GaJULzwSfmsJjBb9-M5dyw4KAfh_WR4BfIZba20JAMnW8xC6vDKo7v1mn3HcVeFuqqb4UHhVcqwDgTKvvPQQtexw5wdl7ayOpD7AhCna3IFfFylGAjKy8TSZsMAhbTUjLxwN0UFDjylN3Bn8B984uYh96fnXB2-WytJ7GIj1VGuF2vEeEH_lLnbyNDvXcOF16drwFDvJCnM-OVs0QOUa-oWPm6o6Gp0vTrNptd1sSlFfL4dkc6LxK1xWfabBQcRPY',
    productId: 'acoustic-panel',
  },
]

const FILTERS = ['All', 'Indoor', 'Outdoor', 'Acoustic']

const TAG_COLORS = {
  Indoor: 'bg-blue-50 text-blue-600',
  Outdoor: 'bg-green-50 text-green-600',
  Acoustic: 'bg-purple-50 text-purple-600',
}

function Gallary() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = ALL_PROJECTS.filter(p => activeFilter === 'All' || p.tag === activeFilter)

  return (
    <main>
      {/* Page Header */}
      <section className='max-w-[1280px] mx-auto px-6 py-12'>
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
                  ({ALL_PROJECTS.filter(p => p.tag === f).length})
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
                className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
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
      <section className='max-w-[1280px] mx-auto px-6 pb-16'>
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
          </div>
        </div>
      </section>
    </main>
  )
}

export default Gallary