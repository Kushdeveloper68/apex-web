import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ServiceComponent from '../components/ServiceComponent'
import products from '../utilities/products.json'

const PRODUCT_IMAGES = {
  'pvc-marble-sheet': 'https://witopdecor.com/wp-content/uploads/2025/09/d86394c3-1715-4318-a8b2-360eb3eaea3d.webp',
  'wpc-wall-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2OjFi75srM9T55OfsCB3p9n0uFMFE63S9S0w_WQgnIkqAXomtGePyHXn9d_sYmiTG_6ADTkxxeN4X_mem88TnB_5K-TwbZ41X3bMT2yrmkSBkjk5HJVn3Nqit28A27q56YuNonHZjxL2wZ9vPlmG_5z-xKjbynEr35MIsNYFm7qwZ8O26GbXniJrZOccFAl118xyIj6gyMx9U3srtbQuhIrY_tdxsOFE7Cpk5t-YWhZv6uWWqwcDg6mTFx4MuwvT68zsRdMC_EQ8',
  'wpc-outdoor-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl51Z08CevNeDMASjB-pQOR63yvmdYJzrYX_EJkQnQ_MgwAcY7r2Qx_hv5oehUi-h9QY-tUrksj9xntV9pQDRZhAgVZrCCk8HpjFVDCIBBN7znYosafW5L99TEpHj_YngW6k6ZB_AH0Q6JsCN-QJtoQET6lzjoNfhG0VlToMznXqbVbzinfNm4zF9Iuhjh5GH7BCwb5bwkSATbz9OdZP1tPGT0RK9gFdfmLJpAvi2pjm8xJjUkZJWLwr1Ew2hqtPnGMTk9OPpPLgw',
  'ps-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBimconrjzFo0N77I1uWGBfkmcgkwWP9LFHCLuEdMRz8APmVdqXL_oPTZRMJ06g65lMzTa8fDZu2uPg1wnRb_4CVMiVhBWvrBqaJWzzZsaNqcALj-YcvpCAeQ-yChtqB5F014rnLUjwnvt7q4abG2oev2hhUxDT5XXCyGS6ixTRx-6Q69PzSFaIrsPazJIcFBm7ps1gP3Lhh-2v28HSx2m30vqSVbbHajD6LEbHy7HKCsTBO87nhmezx7OvMCW5_lTJdcyKWFWyjkM',
  'acoustic-panel': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVY6P9Mt1wn5Uu1K9yyOgFpalERUckrAyLuDZi03FpHDG-Y7hmJtpobi-_Bq-iPdBoAqSg4-GJRpCgI1YdOo01p0AfxzMMiwlsbZndNKGlU5wgRH2ysUAAhR3tsJq1bGsOhJzoNhUhXPChZdhd0FFh94xFN7NeHWjHchoNbdrHlHViV7241c6Re6FFt5X3US6Yw4DQFG1Oi-VldFUkPwskkU80r17p10ISRiWGg3YEyfdeHfM7hVWXqpgm1iwW6qcxvhfKjEKB-rw',
}

function Detailservice() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center'>
        <span className='material-symbols-outlined text-6xl text-accent'>inventory_2</span>
        <h2 className='text-3xl font-black text-primary'>Product Not Found</h2>
        <p className='text-text-muted'>The product you're looking for doesn't exist.</p>
        <Link to='/services' className='px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm'>
          Browse All Products
        </Link>
      </div>
    )
  }

  const heroImg = product.heroImage
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3)

  return (
    <div className='w-full overflow-x-hidden'>

      {/* Breadcrumb */}
      <div className='max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-2 text-sm'>
        <Link to='/' className='text-text-muted hover:text-accent transition-colors font-medium'>Home</Link>
        <span className='text-border-light'>/</span>
        <Link to='/services' className='text-text-muted hover:text-accent transition-colors font-medium'>Products</Link>
        <span className='text-border-light'>/</span>
        <span className='text-primary font-semibold'>{product.category}</span>
      </div>

      {/* Hero Section */}
      <section className='max-w-[1280px] mx-auto px-6 pb-10'>
        <div
          className='relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center rounded-2xl items-start justify-end px-8 pb-14 md:px-14 overflow-hidden shadow-product'
          style={{
            backgroundImage: `linear-gradient(to top, rgba(28,25,22,0.88) 30%, rgba(28,25,22,0.25) 80%), url('${heroImg}')`,
          }}
        >
          {/* Category badge */}
          <div className='absolute top-6 left-6 md:left-14'>
            <span className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1.5 rounded-full text-accent text-[10px] font-bold uppercase tracking-widest'>
              <span className='w-1.5 h-1.5 bg-accent rounded-full' />
              {product.category}
            </span>
          </div>

          <div className='max-w-[700px]'>
            <p className='text-accent text-xs font-bold uppercase tracking-widest mb-3'>{product.tagline}</p>
            <h1 className='text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4'>
              {product.category}
            </h1>
            <p className='text-white/75 text-base leading-relaxed mb-6 max-w-xl'>
              {product.shortDescription}
            </p>

            {/* Spec Pills */}
            <div className='flex flex-wrap gap-3 mb-8'>
              {product.size && (
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2'>
                  <span className='material-symbols-outlined text-accent text-sm'>straighten</span>
                  <span className='text-white text-xs font-semibold'>{product.size}</span>
                </div>
              )}
              {product.weight && (
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2'>
                  <span className='material-symbols-outlined text-accent text-sm'>scale</span>
                  <span className='text-white text-xs font-semibold'>{product.weight}</span>
                </div>
              )}
              {product.variants && (
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-3 py-2'>
                  <span className='material-symbols-outlined text-accent text-sm'>palette</span>
                  <span className='text-white text-xs font-semibold'>{product.variants.length} Colours</span>
                </div>
              )}
            </div>

            <div className='flex flex-wrap gap-3'>
              <Link
                to='/contact'
                className='flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-bold text-sm hover:bg-accent-light transition-all shadow-xl'
              >
                <span className='material-symbols-outlined text-base'>request_quote</span>
                Request a Sample / Quote
              </Link>
              <Link
                to='/services'
                className='flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all'
              >
                <span className='material-symbols-outlined text-base'>arrow_back</span>
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feature Highlights (above fold summary) */}
      <section className='bg-primary'>
        <div className='max-w-[1280px] mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {product.features.slice(0, 4).map((f, i) => (
            <div key={i} className='flex items-center gap-3 p-3'>
              <div className='w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0'>
                <span className='material-symbols-outlined text-accent text-lg'>{f.icon}</span>
              </div>
              <span className='text-white text-xs font-bold leading-tight'>{f.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Product Detail Content */}
      <ServiceComponent productId={id} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className='py-16 bg-white'>
          <div className='max-w-[1280px] mx-auto px-6'>
            <div className='accent-divider mb-4' />
            <div className='flex items-end justify-between mb-10'>
              <div>
                <h2 className='text-3xl font-black text-primary'>Related Products</h2>
                <p className='text-text-muted text-sm mt-1'>Explore other products in our range</p>
              </div>
              <Link to='/services' className='text-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all'>
                View All <span className='material-symbols-outlined text-sm'>arrow_forward</span>
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              {relatedProducts.map(rp => (
                <Link
                  key={rp.id}
                  to={`/detailservice/${rp.id}`}
                  className='group block rounded-2xl overflow-hidden border border-border-light hover:border-accent/30 hover:shadow-card-hover transition-all bg-white'
                >
                  <div className='relative aspect-[16/9] overflow-hidden bg-surface'>
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105'
                      style={{ backgroundImage: `url('${PRODUCT_IMAGES[rp.id]}')` }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                    <div className='absolute top-3 left-3'>
                      <span className='px-2 py-0.5 bg-white/90 text-primary text-[10px] font-bold uppercase tracking-widest rounded'>
                        {rp.category}
                      </span>
                    </div>
                  </div>
                  <div className='p-4'>
                    <h4 className='text-primary font-bold text-sm group-hover:text-accent transition-colors'>{rp.category}</h4>
                    <p className='text-text-muted text-xs mt-1 line-clamp-2'>{rp.shortDescription}</p>
                    <div className='flex items-center gap-1 text-accent text-xs font-bold mt-3'>
                      View Details <span className='material-symbols-outlined text-xs'>arrow_forward</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='py-20 px-6 bg-surface'>
        <div className='max-w-[1100px] mx-auto bg-primary rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-product'>
          <div className='absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl' />
          <div className='absolute -bottom-16 -left-16 w-48 h-48 bg-black/20 rounded-full blur-3xl' />
          <div className='relative z-10'>
            <div className='accent-divider mx-auto mb-5' />
            <h2 className='text-white text-3xl md:text-4xl font-black mb-4'>
              Interested in {product.category}?
            </h2>
            <p className='text-white/70 text-base mb-8 max-w-xl mx-auto'>
              Request samples, get technical specifications, or enquire about pricing. Our team will respond within 24 hours.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/contact' className='px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-light transition-all'>
                Request a Quote
              </Link>
              <Link to='/services' className='px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-surface transition-all'>
                Browse Other Products
              </Link>
            </div>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-6 text-white/50 text-xs font-semibold'>
              {['Quality Guaranteed', 'Eco-Friendly Materials', 'Expert Installation Support', '24h Response'].map(b => (
                <span key={b} className='flex items-center gap-1.5'>
                  <span className='material-symbols-outlined text-accent text-sm'>check_circle</span>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Detailservice