import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../utilities/products.json'

const PRODUCT_IMAGES = {
  'pvc-marble-sheet': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw4UQsgEBvuIZ8Vm7QQ35jkvdA8aGarXZtIkT6SmhodGWOeeBQxUsk0sYc0LfzM5xxAXnTxKTu41R7IbiRum_kMwcLCQldUoyWy5xeACmCTDMiMghFru9fZfOhZK2koQ5kp1DHq9Onww8qsbNpF_8-rAzbRqHVPEU4KQloomeWvM_wRmx5MReJ5L_v1g-7Lzdp9qicqz_BgAem2i88t5YRSJy3aAEt4gZke-K0tfQdxseN1N_Z18ypAevSzJj2xNBirsPt0SIcM5c',
  'wpc-wall-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2OjFi75srM9T55OfsCB3p9n0uFMFE63S9S0w_WQgnIkqAXomtGePyHXn9d_sYmiTG_6ADTkxxeN4X_mem88TnB_5K-TwbZ41X3bMT2yrmkSBkjk5HJVn3Nqit28A27q56YuNonHZjxL2wZ9vPlmG_5z-xKjbynEr35MIsNYFm7qwZ8O26GbXniJrZOccFAl118xyIj6gyMx9U3srtbQuhIrY_tdxsOFE7Cpk5t-YWhZv6uWWqwcDg6mTFx4MuwvT68zsRdMC_EQ8',
  'wpc-outdoor-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl51Z08CevNeDMASjB-pQOR63yvmdYJzrYX_EJkQnQ_MgwAcY7r2Qx_hv5oehUi-h9QY-tUrksj9xntV9pQDRZhAgVZrCCk8HpjFVDCIBBN7znYosafW5L99TEpHj_YngW6k6ZB_AH0Q6JsCN-QJtoQET6lzjoNfhG0VlToMznXqbVbzinfNm4zF9Iuhjh5GH7BCwb5bwkSATbz9OdZP1tPGT0RK9gFdfmLJpAvi2pjm8xJjUkZJWLwr1Ew2hqtPnGMTk9OPpPLgw',
  'ps-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBimconrjzFo0N77I1uWGBfkmcgkwWP9LFHCLuEdMRz8APmVdqXL_oPTZRMJ06g65lMzTa8fDZu2uPg1wnRb_4CVMiVhBWvrBqaJWzzZsaNqcALj-YcvpCAeQ-yChtqB5F014rnLUjwnvt7q4abG2oev2hhUxDT5XXCyGS6ixTRx-6Q69PzSFaIrsPazJIcFBm7ps1gP3Lhh-2v28HSx2m30vqSVbbHajD6LEbHy7HKCsTBO87nhmezx7OvMCW5_lTJdcyKWFWyjkM',
  'acoustic-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVY6P9Mt1wn5Uu1K9yyOgFpalERUckrAyLuDZi03FpHDG-Y7hmJtpobi-_Bq-iPdBoAqSg4-GJRpCgI1YdOo01p0AfxzMMiwlsbZndNKGlU5wgRH2ysUAAhR3tsJq1bGsOhJzoNhUhXPChZdhd0FFh94xFN7NeHWjHchoNbdrHlHViV7241c6Re6FFt5X3US6Yw4DQFG1Oi-VldFUkPwskkU80r17p10ISRiWGg3YEyfdeHfM7hVWXqpgm1iwW6qcxvhfKjEKB-rw',
}

const CATEGORIES = ['All', 'Indoor', 'Outdoor', 'Acoustic']

const PRODUCT_CATEGORY_MAP = {
  'pvc-marble-sheet': 'Indoor',
  'wpc-wall-panel': 'Indoor',
  'wpc-outdoor-panel': 'Outdoor',
  'ps-panel': 'Indoor',
  'acoustic-panel': 'Acoustic',
}

function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = products.filter(p =>
    activeFilter === 'All' || PRODUCT_CATEGORY_MAP[p.id] === activeFilter
  )

  return (
    <>
      {/* Hero */}
      <section className='relative'>
        <div className='max-w-[1280px] mx-auto px-6 py-8'>
          <div
            className='flex min-h-[420px] flex-col gap-6 bg-cover bg-center rounded-2xl items-start justify-end px-10 pb-14 shadow-product overflow-hidden'
            style={{
              backgroundImage: `linear-gradient(to top, rgba(28,25,22,0.85) 30%, rgba(28,25,22,0.2) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcw0QrWwZiRJLUcIYjPGgZ7kRVInVE9CkZaZQlPS2htbL3XLh72adFppzjGAxQqbQa4QUYY5rSTw63SwQL1H882GXcNY3gyfuWWSBDDTfWxT3s0kzKPoh0gmixfcjBM_lXmbG120udP2Ysj5Kakumb3bOWDvF5pRLxv6jOcSUcPoj0R9Y3LWE2CjX1PwOUJj2VV76KKA0Sn5G8axKxE1dM8TV927fBemGYxW7dYjc3JUH9f9mrfZNlIMO4OcbHYiBH7eIv0J_gr6I')`,
            }}
          >
            <div className='max-w-2xl'>
              <div className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest mb-5'>
                Premium Decoration Materials
              </div>
              <h1 className='text-white text-4xl md:text-5xl font-black leading-tight mb-4'>
                All Products
              </h1>
              <p className='text-white/80 text-base leading-relaxed'>
                PVC Marble Sheets · WPC Wall & Outdoor Panels · PS Panels · MDF Acoustic Panels. Every product is professional-grade, eco-friendly, and designed for lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className='sticky top-[65px] z-30 bg-white/95 backdrop-blur-md border-b border-border-light'>
        <div className='max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto'>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-5 h-9 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-primary text-white'
                  : 'bg-surface text-primary hover:bg-accent/10 border border-border-light'
              }`}
            >
              {cat}
            </button>
          ))}
          <div className='ml-auto shrink-0 text-xs text-text-muted font-semibold'>
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className='max-w-[1280px] mx-auto px-6 py-16'>
        <div className='flex flex-col gap-20'>
          {filtered.map((product, index) => (
            <div key={product.id} className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
              {/* Image */}
              <div className={`flex-1 w-full ${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div
                  className='aspect-[16/10] bg-center bg-cover rounded-2xl shadow-product overflow-hidden group relative'
                  style={{ backgroundImage: `url('${PRODUCT_IMAGES[product.id]}')` }}
                >
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500' />
                </div>
              </div>

              {/* Text */}
              <div className={`flex-1 flex flex-col gap-5 ${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                <div className='accent-divider' />
                <div className='flex items-center gap-3'>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md ${
                    PRODUCT_CATEGORY_MAP[product.id] === 'Indoor'
                      ? 'bg-blue-50 text-blue-600'
                      : PRODUCT_CATEGORY_MAP[product.id] === 'Outdoor'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-purple-50 text-purple-600'
                  }`}>
                    {PRODUCT_CATEGORY_MAP[product.id]}
                  </span>
                </div>

                <h2 className='text-3xl font-black text-primary leading-tight'>
                  {product.category}
                </h2>

                <p className='text-text-muted text-base leading-relaxed'>
                  {product.shortDescription}
                </p>

                {/* Size / Weight */}
                <div className='flex flex-wrap gap-3'>
                  {product.size && (
                    <div className='flex items-center gap-2 bg-surface border border-border-light rounded-lg px-3 py-2'>
                      <span className='material-symbols-outlined text-accent text-sm'>straighten</span>
                      <span className='text-xs text-primary font-semibold'>{product.size}</span>
                    </div>
                  )}
                  {product.weight && (
                    <div className='flex items-center gap-2 bg-surface border border-border-light rounded-lg px-3 py-2'>
                      <span className='material-symbols-outlined text-accent text-sm'>scale</span>
                      <span className='text-xs text-primary font-semibold'>{product.weight}</span>
                    </div>
                  )}
                  {product.variants && (
                    <div className='flex items-center gap-2 bg-surface border border-border-light rounded-lg px-3 py-2'>
                      <span className='material-symbols-outlined text-accent text-sm'>palette</span>
                      <span className='text-xs text-primary font-semibold'>{product.variants.length} Colour Options</span>
                    </div>
                  )}
                </div>

                {/* Key Features preview */}
                <ul className='space-y-2'>
                  {product.features.slice(0, 3).map((f, fi) => (
                    <li key={fi} className='flex items-center gap-3 text-sm text-primary'>
                      <span className='material-symbols-outlined text-accent text-base'>{f.icon}</span>
                      <span className='font-semibold'>{f.title}</span>
                      <span className='text-text-muted'>— {f.description.split(' ').slice(0, 8).join(' ')}…</span>
                    </li>
                  ))}
                </ul>

                {/* Applications */}
                {product.applications && (
                  <div className='flex flex-wrap gap-2'>
                    {product.applications.map((app, ai) => (
                      <span key={ai} className='px-3 py-1 bg-surface border border-border-light rounded-full text-xs text-primary font-medium'>
                        {app}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to={`/detailservice/${product.id}`}
                  className='flex items-center gap-2 w-fit mt-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all shadow-sm'
                >
                  <span>View Full Details</span>
                  <span className='material-symbols-outlined text-accent text-base'>arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className='bg-primary py-20'>
        <div className='max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center gap-7'>
          <div className='accent-divider mx-auto' />
          <h2 className='text-white text-4xl font-black leading-tight'>
            Ready to transform your space?
          </h2>
          <p className='text-white/70 text-lg max-w-2xl'>
            Whether it's an interior refresh or a complete exterior overhaul, our team will help you choose the right product and deliver it to your door.
          </p>
          <div className='flex flex-wrap justify-center  gap-4'>
        {/* text is touching the top of buttons , i want to make the classes so they  them center */}
            <Link to='/contact' className='  px-8 h-12  rounded-xl bg-accent text-white font-bold shadow-xl hover:bg-accent-light transition-all'>
              Request a Free Quote
            </Link>
            <Link to='/gallary' className='px-8 h-12 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all'>
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services