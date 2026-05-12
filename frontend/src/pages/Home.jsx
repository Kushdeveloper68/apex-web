import React from 'react'
import { Link } from 'react-router-dom'
import galleryProjects from '../utilities/gallery.json'
import brochurePdf from '../assets/pdfs/TrueBuild-brochure.pdf'

/* ─── Hero product categories for service cards ─── */
const HERO_SERVICES = [
  {
    title: 'PVC Marble Sheet',
    id: 'pvc-marble-sheet',
    description: 'Waterproof, flame-retardant marble-look panels for bathrooms & feature walls.',
    icon: 'texture',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2024/4/412131521/OI/JI/DW/67194266/product-jpeg-500x500.jpg',
  },
  {
    title: 'WPC Wall Panel',
    id: 'wpc-wall-panel',
    description: 'Real wood texture, zero formaldehyde, easy notch-joint installation for interiors.',
    icon: 'view_column',
    image: 'https://meterny.com/wp-content/uploads/2024/04/70-10.png',
  },
  {
    title: 'WPC Outdoor Panel',
    id: 'wpc-outdoor-panel',
    description: 'Weather-resistant co-extruded cladding for facades, fencing & pergolas.',
    icon: 'home_work',
    image: 'https://image.made-in-china.com/2f0j00ruhkFcVJnUoD/Wall-Cladding-Wooden-Wall-Panels-Outdoor-Wall-Cladding.jpg',
  },
  {
    title: 'PS Panel',
    id: 'ps-panel',
    description: 'Lightweight polystyrene panels with thermal insulation & sound reduction.',
    icon: 'layers',
    image: 'https://www.home-accessories.gr/wp-content/uploads/2023/04/07_CLASSIC_OAK-4-768x597.jpg',
  },
  {
    title: 'MDF Acoustic Panel',
    id: 'acoustic-panel',
    description: 'Slatted acoustic panels that combine stunning aesthetics with professional sound absorption.',
    icon: 'volume_off',
    image: 'https://tse3.mm.bing.net/th/id/OIP.UTQWmk1JsieyHfM9S6i29wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
]

/* ─── Why Choose Us reasons ─── */
const WHY_US = [
  { icon: 'verified', title: 'Premium Quality', desc: 'Every product sourced from certified manufacturers meeting international standards.' },
  { icon: 'eco', title: 'Eco-Friendly Range', desc: 'Zero or near-zero formaldehyde — safer for families, better for the environment.' },
  { icon: 'construction', title: 'Easy Installation', desc: 'Engineered for straightforward installation by any competent tradesperson.' },
  { icon: 'palette', title: 'Rich Colour Selection', desc: 'Dozens of finishes across all product lines to perfectly match your design vision.' },
  { icon: 'water_drop', title: 'Waterproof & Durable', desc: 'Resistant to moisture, humidity, and the elements — built to last decades.' },
  { icon: 'support_agent', title: 'Expert Support', desc: 'Our team provides technical guidance from product selection through to installation.' },
]

const FEATURED_GALLERY = galleryProjects.filter(project => project.featured).slice(0, 4)

function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className='relative w-full min-h-[88vh] flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div
            className='w-full h-full bg-cover bg-center'
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(28,25,22,0.85) 40%, rgba(28,25,22,0.3) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_CAEKcOfz092pAXEz39SfsieRuMbBXNlIeBY0PBQ_tfXPWxZxGwF3n-ALe_ev_EJDQ4Jz9eKkvVM0ceS6JoCkxlEkEjMGdHv7HknaxHl9IGkHiEqxmA0_ito8w5tbt33PuQWiW2DPb94o5UFYHBmWrTGOeBUH7NHMX0YSa45IDXMJmMvIW2Pd0DxUEylCaT0zVbDLllymhKLq9pM6wwWfO590HW56gafVJVe8cNmacRXp2DnkttgWL1JZjg5WfmUV9V7G8U3WMHs')",
            }}
          />
        </div>

        <div className='relative z-10 max-w-[1280px] mx-auto px-3 w-full py-20'>
          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6'>
              <span className='w-1.5 h-1.5 bg-accent rounded-full animate-pulse' />
              Premium Decoration Materials
            </div>

            <h1 className='text-white text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6'>
              Transform Your Space<br />
              <span className='text-accent'>Inside & Out</span>
            </h1>

            <p className='text-white/80 text-lg leading-relaxed mb-8 max-w-xl'>
              Premium PVC Marble Sheets, WPC Wall & Outdoor Panels, PS Panels, and MDF Acoustic Panels — trusted by professionals, chosen for quality, built for the future.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Link
                to='/services'
                className='bg-accent text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-accent-light transition-all shadow-xl'
              >
                Browse Products
              </Link>
              <Link
                to='/contact'
                className='bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-base transition-all'
              >
                Get a Quote
              </Link>
            </div>

            {/* Trust Bar */}
            <div className='flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10'>
              {['Professional', 'Eco Friendly', 'High-End Quality', 'Top Quality Warranty'].map(badge => (
                <div key={badge} className='flex items-center gap-2 text-white/70 text-xs font-semibold'>
                  <span className='w-1.5 h-1.5 bg-accent rounded-full' />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS OVERVIEW ─── */}
      <section className='py-24 bg-white'>
        <div className='max-w-[1280px] mx-auto px-3'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-14 gap-6'>
            <div>
              <div className='accent-divider mb-4' />
              <h2 className='text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2'>Our Product Range</h2>
              <h3 className='text-4xl md:text-5xl font-black text-primary leading-tight'>
                Premium Decoration<br />Materials
              </h3>
            </div>
            <Link
              to='/services'
              className='text-accent font-bold flex items-center gap-2 border-b border-accent pb-1 hover:gap-4 transition-all shrink-0'
            >
              View All Products
              <span className='material-symbols-outlined text-base'>trending_flat</span>
            </Link>
          </div>

          {/* 5-product grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {HERO_SERVICES.map((service, i) => (
              <Link
                key={service.id}
                to={`/detailservice/${service.id}`}
                className={`group relative overflow-hidden rounded-2xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card-hover transition-all ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className='relative aspect-[4/3] overflow-hidden'>
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105'
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent' />
                  <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md'>
                    <span className='text-primary text-[10px] font-bold uppercase tracking-widest'>{service.title}</span>
                  </div>
                </div>
                <div className='p-5'>
                  <div className='flex items-start gap-3 mb-3'>
                    <div className='w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0'>
                      <span className='material-symbols-outlined text-accent text-lg'>{service.icon}</span>
                    </div>
                    <div>
                      <h4 className='text-primary font-bold text-base leading-tight group-hover:text-accent transition-colors'>
                        {service.title}
                      </h4>
                    </div>
                  </div>
                  <p className='text-text-muted text-sm leading-relaxed'>
                    {service.description}
                  </p>
                  <div className='mt-4 flex items-center gap-1 text-accent text-sm font-bold'>
                    Learn More
                    <span className='material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform'>arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND / ABOUT PREVIEW ─── */}
      <section className='py-24 bg-surface'>
        <div className='max-w-[1280px] mx-auto px-3 grid md:grid-cols-2 gap-16 items-center'>
          <div className='relative'>
            <div
              className='aspect-[4/5] rounded-2xl overflow-hidden shadow-product'
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_ya9rU1ywJloz72BwaP1ViLImHKABr4mqr3z1LI8VdpvgiDrxAyZGktlMclQ6MwtA9URxO5pzeUrrYObf11tQNB4ZvAZw6tv55HRQHp7jAEOj0s7_Wj56s1KHn2HTPWx72_IkojyCDgawyQgDaO4ycb5KIe_DIxPJ9mxX9aNm7KDH0sMd1aiS4PNOlH0LxyqAi9hbvaU-iMCmDeGNQU3QS5UkTHsJ9Mdj0lFBHrm5KxKVxDKfjxyPyQMFYIRtza3MmUrm6W8uvlA')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className='absolute -bottom-6 -right-6 bg-primary p-7 rounded-2xl text-white hidden lg:block shadow-product max-w-[200px]'>
              <p className='text-4xl font-black mb-1'>5+</p>
              <p className='text-white/70 text-xs font-semibold uppercase tracking-widest leading-relaxed'>
                Product Lines Trusted by Professionals
              </p>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='accent-divider' />
            <h3 className='text-primary text-sm font-bold uppercase tracking-[0.2em]'>Why TRUEBUILD?</h3>
            <h2 className='text-4xl font-black text-primary leading-tight'>
              Quality Materials for<br />Better Spaces
            </h2>
            <p className='text-text-muted text-lg leading-relaxed'>
              TRUEBUILD Deck & Design supplies premium decoration materials trusted by builders, architects, and homeowners across Australia. From the eco-friendly elegance of WPC Wall Panels to the acoustic precision of MDF slatted panels, every product is chosen for performance, sustainability, and stunning aesthetics.
            </p>

            <div className='grid grid-cols-2 gap-5 pt-2'>
              <div>
                <div className='w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3'>
                  <span className='material-symbols-outlined'>eco</span>
                </div>
                <h4 className='font-bold text-primary text-sm mb-1'>Eco-Friendly</h4>
                <p className='text-xs text-text-muted leading-relaxed'>Recyclable materials with near-zero formaldehyde.</p>
              </div>
              <div>
                <div className='w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-3'>
                  <span className='material-symbols-outlined'>verified</span>
                </div>
                <h4 className='font-bold text-primary text-sm mb-1'>Certified Quality</h4>
                <p className='text-xs text-text-muted leading-relaxed'>Every product meets strict quality and safety standards.</p>
              </div>
            </div>

            <Link to='/about' className='inline-flex items-center gap-2 text-accent font-bold border-b border-accent pb-1 hover:gap-4 transition-all text-sm'>
              More About Us <span className='material-symbols-outlined text-sm'>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className='py-24 bg-white'>
        <div className='max-w-[1280px] mx-auto px-3'>
          <div className='text-center mb-14'>
            <div className='accent-divider mx-auto mb-4' />
            <h2 className='text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2'>Our Advantage</h2>
            <h3 className='text-4xl font-black text-primary'>Why Professionals Choose TRUEBUILD</h3>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {WHY_US.map((item, i) => (
              <div key={i} className='flex gap-4 p-6 rounded-2xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all group'>
                <div className='w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all'>
                  <span className='material-symbols-outlined text-xl'>{item.icon}</span>
                </div>
                <div>
                  <h4 className='text-primary font-bold mb-1 text-sm'>{item.title}</h4>
                  <p className='text-text-muted text-sm leading-relaxed'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className='py-24 bg-surface'>
        <div className='max-w-[1280px] mx-auto px-3'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
            <div>
              <div className='accent-divider mb-4' />
              <h3 className='text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2'>Portfolio</h3>
              <h2 className='text-4xl font-black text-primary'>Installed Projects</h2>
            </div>
            <div className='flex flex-wrap items-center gap-3'>
              <a
                href={brochurePdf}
                download='TRUEBUILD-Brochure.pdf'
                className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light bg-white text-primary text-sm font-bold hover:border-accent/40 hover:text-accent transition-all'
              >
                <span className='material-symbols-outlined text-base'>download</span>
                Download Brochure
              </a>
              <Link to='/gallary' className='text-accent font-bold flex items-center gap-2 border-b border-accent pb-1 hover:gap-4 transition-all shrink-0 text-sm'>
                View Full Gallery <span className='material-symbols-outlined text-sm'>trending_flat</span>
              </Link>
            </div>
          </div>

          <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
            {FEATURED_GALLERY.map((item, i) => (
              <div key={i} className='relative group rounded-xl overflow-hidden shadow-card break-inside-avoid'>
                <div
                  className='w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    height: i % 2 === 0 ? '280px' : '220px',
                  }}
                />
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white'>
                  <p className='text-[10px] font-bold uppercase tracking-widest text-accent'>{item.category}</p>
                  <h5 className='text-sm font-bold mt-1'>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className='py-20 px-3'>
        <div className='max-w-[1100px] mx-auto rounded-2xl bg-primary text-white p-12 md:p-16 text-center relative overflow-hidden shadow-product'>
          <div className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl' />
          <div className='relative z-10 space-y-5'>
            <div className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest'>
              Trusted By Professionals
            </div>
            <h2 className='text-4xl md:text-5xl font-black tracking-tight leading-tight'>
              Ready to Upgrade<br />Your Space?
            </h2>
            <p className='text-white/70 text-lg max-w-xl mx-auto'>
              Get in touch for product specifications, samples, and a personalised quote tailored to your project.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Link to='/contact' className='bg-accent text-white px-10 py-4 rounded-xl font-extrabold text-base hover:bg-accent-light transition-all shadow-xl'>
                Request a Free Quote
              </Link>
              <Link to='/services' className='bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-white/20 transition-all'>
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home