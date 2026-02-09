import React from 'react'

function Home () {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section className='relative w-full h-[85vh] flex items-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div
            className='w-full h-full bg-cover bg-center transition-transform duration-1000'
            data-alt='Luxury timber deck with panoramic mountain views'
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_CAEKcOfz092pAXEz39SfsieRuMbBXNlIeBY0PBQ_tfXPWxZxGwF3n-ALe_ev_EJDQ4Jz9eKkvVM0ceS6JoCkxlEkEjMGdHv7HknaxHl9IGkHiEqxmA0_ito8w5tbt33PuQWiW2DPb94o5UFYHBmWrTGOeBUH7NHMX0YSa45IDXMJmMvIW2Pd0DxUEylCaT0zVbDLllymhKLq9pM6wwWfO590HW56gafVJVe8cNmacRXp2DnkttgWL1JZjg5WfmUV9V7G8U3WMHs')"
            }}
          ></div>
        </div>
        <div className='relative z-10 max-w-7xl mx-auto px-6 w-full'>
          <div className='max-w-2xl space-y-6'>
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest'>
              <span className='w-2 h-2 bg-primary rounded-full animate-pulse'></span>
              Master Carpenters &amp; Designers
            </div>
            <h2 className='text-white text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight'>
              Elevate Your <br />
              <span className='text-primary italic font-light drop-shadow-sm'>
                Living Space
              </span>
            </h2>
            <p className='text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-xl'>
              Premium carpentry and exterior design tailored to your lifestyle.
              Exceptional craftsmanship for luxury timber decks, pergolas, and
              bespoke outdoor living.
            </p>
            <div className='flex flex-wrap gap-4 pt-4'>
              <button className='bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-primary/90 shadow-xl transition-all'>
                Start Your Project
              </button>
              <button className='bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-base transition-all'>
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Preview Section --> */}
      <section className='py-24 px-6 bg-background-light dark:bg-background-dark'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
          <div className='relative'>
            <div
              className='aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl'
              data-alt='Detail shot of high quality wood joinery'
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_ya9rU1ywJloz72BwaP1ViLImHKABr4mqr3z1LI8VdpvgiDrxAyZGktlMclQ6MwtA9URxO5pzeUrrYObf11tQNB4ZvAZw6tv55HRQHp7jAEOj0s7_Wj56s1KHn2HTPWx72_IkojyCDgawyQgDaO4ycb5KIe_DIxPJ9mxX9aNm7KDH0sMd1aiS4PNOlH0LxyqAi9hbvaU-iMCmDeGNQU3QS5UkTHsJ9Mdj0lFBHrm5KxKVxDKfjxyPyQMFYIRtza3MmUrm6W8uvlA')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className='absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl text-white hidden lg:block shadow-2xl max-w-[240px]'>
              <p className='text-4xl font-bold mb-1'>15+</p>
              <p className='text-sm font-medium opacity-80 uppercase tracking-widest'>
                Years of Crafting Luxury Outdoor Spaces
              </p>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='space-y-4'>
              <span className='text-primary font-bold uppercase tracking-[0.2em] text-sm'>
                Our Heritage
              </span>
              <h3 className='text-4xl md:text-5xl font-extrabold leading-tight'>
                Craftsmanship That <br />
                Stands the Test of Time
              </h3>
              <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                With decades of collective experience in high-end exterior
                design, we bring precision and passion to every timber and
                composite project. We believe that true luxury lies in the
                details—from the grain of the wood to the seamless joinery of a
                custom pergola.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-6 pt-4'>
              <div className='space-y-2'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary'>
                  <span className='material-symbols-outlined'>verified</span>
                </div>
                <h4 className='font-bold'>Premium Materials</h4>
                <p className='text-sm text-gray-500'>
                  Only the finest sustainably sourced timbers and composites.
                </p>
              </div>
              <div className='space-y-2'>
                <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary'>
                  <span className='material-symbols-outlined'>brush</span>
                </div>
                <h4 className='font-bold'>Bespoke Design</h4>
                <p className='text-sm text-gray-500'>
                  Custom solutions designed specifically for your home's
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services Overview Section --> */}
      <section className='py-24 bg-white dark:bg-[#151311]'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
            <div className='max-w-xl space-y-4'>
              <h3 className='text-primary font-bold uppercase tracking-[0.2em] text-sm'>
                Our Services
              </h3>
              <h2 className='text-4xl md:text-5xl font-black'>
                Comprehensive Exterior Solutions
              </h2>
            </div>
            <button className='text-primary font-bold flex items-center gap-2 border-b-2 border-primary pb-1 hover:gap-4 transition-all'>
              Explore All Services
              <span className='material-symbols-outlined'>trending_flat</span>
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>

            {/* Services compoents are added here  */}
            <ServicesComponent/>
            
          </div>
        </div>
      </section>
      {/* <!-- Why Choose Us Section --> */}
      <section className='py-24 bg-background-light dark:bg-background-dark overflow-hidden'>
        
        <div className='max-w-7xl mx-auto px-6'>
          <div className='bg-primary rounded-[2rem] p-12 md:p-20 text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none'>
              <svg
                className='h-full w-full'
                preserveAspectRatio='none'
                viewBox='0 0 100 100'
              >
                <path d='M0 0 L100 0 L100 100 Z' fill='currentColor'></path>
              </svg>
            </div>
            <div className='relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
               {[
                {icon:"workspace_premium",
                  title:"Premium Finish",
                  description:"Meticulous attention to detail in every sanding and finishing stroke for a flawless touch."
                },
                {
                  icon:"construction",
                  title:"Expert Install",
                  description:"Our master carpenters ensure structural integrity that lasts for decades, not years."
                }
                ,
                {
                  icon:"design_services",
                  title:"Custom Design",
                  description:"No templates here. Every project is designed from scratch to match your home's unique soul."
                }
                ,
                {
                  icon:"security",
                  title:"5-Year Warranty",
                  description:"We stand behind our work with a comprehensive guarantee on all workmanship and hardware."
                }
               ].map((item , index) => (
               <div className='space-y-4' key={index}>
                <div className='size-14 rounded-full bg-white/10 flex items-center justify-center'>
                  <span className='material-symbols-outlined text-3xl'>
                   { item.icon}
                  </span>
                </div>
                <h4 className='text-xl font-bold'>{item.title}</h4>
                <p className='text-white/70 text-sm leading-relaxed'>
                 {item.description}
                </p>
              </div>
        ))}
              
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Project Gallery Preview --> */}
      <section className='py-24 bg-white dark:bg-[#151311]'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center max-w-2xl mx-auto mb-16 space-y-4'>
            <span className='text-primary font-bold uppercase tracking-[0.2em] text-sm'>
              Portfolio
            </span>
            <h2 className='text-4xl md:text-5xl font-black'>
              Recent Masterpieces
            </h2>
            <p className='text-gray-500'>
              A showcase of our recent high-end residential and commercial
              exterior installations.
            </p>
          </div>
          <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
            <div className='relative group rounded-xl overflow-hidden shadow-lg aspect-square'>
              <div
                className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                data-alt='Luxury mahogany deck with glass railing'
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxqe7WC7cuZiFq7rWzJeWYgIhWLpcGG870UY6U7jfar5ZSRELunxgFHsBHg4P99HgIaWU6KakQVjsgBr6Lef4zIHwDJXjhBjFzbmaj-yIv7oz3dzTDV7qb4nkNlm13EE4Z0htOoU-Zp4swkhDlenQwFi_R7XSP0QazBz_oRgCb2ysCnmI4A7h6jwMbFDqVi5vtFHFTw6v-OKzQPFMo_DT-xjQ-se36pFzw5vhN50Ijib5XK-VM0GHRcV3stAsungpMts90hS9OGSM')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white'>
                <p className='text-xs uppercase tracking-widest font-bold'>
                  Residential
                </p>
                <h5 className='text-lg font-bold'>The Heights Deck</h5>
              </div>
            </div>
            <div className='relative group rounded-xl overflow-hidden shadow-lg aspect-[3/4]'>
              <div
                className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                data-alt='Modern geometric timber pergola'
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEFvo0UOC-kGAVLMwoiUx-C7t5jyN5Rc1x_THJ-IvfKYnn6uSwio84ru4Jbzgx6H8hKvC1If6YqCQ35chk5VW_QgElZW_M9mFcMCX0OdyKuuvz6zo0p4Gf9TMydmaVp1jIVGPuYKJRHwzgcjfWu2gFYvHpXbNoTiQz1nG3LHsipTSBOjRFUuNdq6l63XWn23ssiOiEzGxTOBi3zGfIhx2sat6iDDGLrFPrcZ01a-d0XjhaM2Ix3q_QK7YaXIP6mJ9HVu_j0mwVYe4')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white'>
                <p className='text-xs uppercase tracking-widest font-bold'>
                  Design
                </p>
                <h5 className='text-lg font-bold'>Minimalist Pergola</h5>
              </div>
            </div>
            <div className='relative group rounded-xl overflow-hidden shadow-lg aspect-video'>
              <div
                className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                data-alt='Detailed wood cladding on office building'
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUWsbrFKP-y3vI-0hJSJNsa1hV2YPUJ1Bt50TQWmsvnjYGiDIuF6LI4GIm2Xt6rSxN2clGCoTlq4qjgJRw-o60TYoOLOL2-P085sKKG0LOnzJB8WmbPFkulI8gX1qIlHykjKKwaQYV_YZqmrfln5AK7gl0X8xPxV54msSmIA5x0MhYQgTPek_m57i28u-12pMC3Gba5Og7oTZh24Ofi9VWE1KDEkSYHw3z45HVu8FWwc_UcomKZm313wOHgD19Us9e6CJ8-Ik6IlU')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white'>
                <p className='text-xs uppercase tracking-widest font-bold'>
                  Commercial
                </p>
                <h5 className='text-lg font-bold'>Urban Cladding</h5>
              </div>
            </div>
            <div className='relative group rounded-xl overflow-hidden shadow-lg aspect-[4/5]'>
              <div
                className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                data-alt='Spacious outdoor kitchen with wood oven'
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAc4AfVGB3Ap470lwun6sVzeqVn2046CVb4qwnP5joDQflNY2iH1ptCdRUihNfYzXZTQ6b32lJUHEn0cGiTP_oJfabtaeFgaADTQrgpUhAVNwbgMcCzD4hRP9cLzgTe778N01IVCnoZ6OPeecWUSRXpCfFDrFRFlWMOgq38Xeviylwb8tKacwJ6ibaHsgmfCRWErUwb5J7Te3ui0Yd4CqUOj98RVlebOLjhmWZHQVRZlq8ZZjJqZo8tI07OBixX9q17HZ17vkFDTHw')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white'>
                <p className='text-xs uppercase tracking-widest font-bold'>
                  Luxury
                </p>
                <h5 className='text-lg font-bold'>Culinary Retreat</h5>
              </div>
            </div>
          </div>
          <div className='mt-12 text-center'>
            <button className='bg-primary/10 text-primary border border-primary/20 px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition-all'>
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
      {/* <!-- Final CTA Banner --> */}
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto rounded-[2.5rem] bg-primary text-white p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl'>
          {/* <!-- Decorative circle --> */}
          <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-white/5'></div>
          <div className='relative z-10 space-y-6'>
            <h2 className='text-4xl md:text-6xl font-black tracking-tight'>
              Let’s Build Your <br />
              <span className='italic font-light opacity-80'>Dream Space</span>
            </h2>
            <p className='text-lg text-white/80 max-w-xl mx-auto font-medium'>
              Ready to transform your home with premium carpentry? Get in touch
              today for a consultation and free quote.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <button className='bg-white text-primary px-10 py-5 rounded-xl font-extrabold text-lg hover:bg-gray-100 transition-all shadow-xl'>
                Get a Free Quote
              </button>
              <button className='bg-primary/20 border border-white/20 px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary/40 transition-all'>
                Call (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const ServicesComponent = () => {

  let services = [
    {
      title: 'Wall Cladding',
      description:
        'Indoor/Outdoor luxury wood finishes that add warmth and texture.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB2OjFi75srM9T55OfsCB3p9n0uFMFE63S9S0w_WQgnIkqAXomtGePyHXn9d_sYmiTG_6ADTkxxeN4X_mem88TnB_5K-TwbZ41X3bMT2yrmkSBkjk5HJVn3Nqit28A27q56YuNonHZjxL2wZ9vPlmG_5z-xKjbynEr35MIsNYFm7qwZ8O26GbXniJrZOccFAl118xyIj6gyMx9U3srtbQuhIrY_tdxsOFE7Cpk5t-YWhZv6uWWqwcDg6mTFx4MuwvT68zsRdMC_EQ8'
    },
    {
      title: 'Composite Decks',
      description:
        'Low-maintenance, durable outdoor living spaces built for longevity.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBW9UE0-Vjb7aa-OGgpZ64zbMmoP9c4lDK4Jk282d9E1m7T2ZwfDkVD-wfGv0z7hy2ljCdfV6DKJK0v_on94a0UrjyBdgkCvjuxBneEREJ7nlpeQAPQQmoyMqsWB2nYEExe0yyNIDTe8l2xPgipkW6yn1aUuyipDa9YlLrvRgmQqDq8DxizRb0lzspQ77Vhn-y9SFmJm-fom0wdPR6dtN9m5z-LFIYd_yKPALylpPLVVN6XjAZrAlzf3akOskBdmWpfuQqLRKG1cmE'
    },
    {
      title: 'Timber  Pergolas',
      description: 'Elegant outdoor structures that define your living space.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMjWyPjzTWejoDjOn0WvzzZcyOgO3Zc-cz0jxX0wFO5ujPkN2kbHKIzriZBtAq6mCiRRmtTn9Lsdl6EPPOi3fBaaMtQr2XZ9osyA2VuUwM586TzHnUv_9VVjkAnAzmO2fSpAVDZqWNF-FDp422p5hap7U8SB4gzVzgXeco8zXtVqIVt9jS3sG7lNn6XD-qDmvitTYLBGAoAui8m7cZB7bd9PP-bgEaDeZeL0OSRP1q0ejVGbuIjBWOLJ6w_F_6wPaJRI61AwBLu0'
    },
    {
      title: 'Outdoor Kitchens',
      description:
        'Premium culinary spaces designed for entertaining under the stars.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBVJuJ2cQRU-ipgUcYh6PSstKQPU2v4K3mU09Gtd2xAAjMNvc9Ek2vVHfrfv68aHsqo_t5im-qhFW-vHrUQNjCxjJ6F1vQK9pDnIGAaWkbmOtYN7qlTznn3IuRrULJDRDThEUMvGj1Wqnx5RbYOBqfPn-i7IjKcCWPDb0kF9WNuIsBAa7zo1j73YmnsHiJIKQttpUS3LfWEmNoI57jZ-sLRFJzX-1pq1opWCGopa6AmiqsDuOiJNGctqRCQVrbn3vcLRR7m_8XhhqM'
    },
    {
      title: 'Custom Cabinets',
      description:
        'Handcrafted bespoke storage and cabinetry for indoor & outdoor use.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCLMjWyPjzTWejoDjOn0WvzzZcyOgO3Zc-cz0jxX0wFO5ujPkN2kbHKIzriZBtAq6mCiRRmtTn9Lsdl6EPPOi3fBaaMtQr2XZ9osyA2VuUwM586TzHnUv_9VVjkAnAzmO2fSpAVDZqWNF-FDp422p5hap7U8SB4gzVzgXeco8zXtVqIVt9jS3sG7lNn6XD-qDmvitTYLBGAoAui8m7cZB7bd9PP-bgEaDeZeL0OSRP1q0ejVGbuIjBWOLJ6w_F_6wPaJRI61AwBLu0'
    }
  ];

  return ( <>
      {services.map((service, index) => (
                <div className='group cursor-pointer' key={index}>
              <div className='aspect-[3/4] rounded-xl overflow-hidden mb-4 relative'>
                <div
                  className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                  data-alt='Interior wood cladding on a modern wall'
                  style={{
                    backgroundImage:
                      `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                <div className='absolute bottom-4 left-4 text-white'>
                  <h4 className='font-bold text-lg'>{service.title}</h4>
                </div>
              </div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
               {service.description}
              </p>
            </div>
        ))}
    
            </>
  )
}


export default Home