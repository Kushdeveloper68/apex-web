import React from 'react'
import products from '../utilities/products.json'

function ServiceComponent({ productId }) {
  // Find product by id, default to first
  const product = productId
    ? products.find(p => p.id === productId) || products[1]
    : products[1]

  return (
    <>
      {/* Product Overview Section */}
      <div className='flex flex-1 justify-center py-12 bg-surface'>
        <div className='layout-content-container flex flex-col w-full max-w-[1280px] px-6'>
          <div className='flex flex-col md:flex-row gap-14 items-center'>
            {/* Text */}
            <div className='flex-1 flex flex-col gap-6'>
              <div className='accent-divider' />
              <div className='inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest w-fit'>
                {product.category}
              </div>
              <h2 className='text-primary text-4xl font-black leading-tight tracking-tight'>
                {product.category}
              </h2>
              <p className='text-text-muted text-lg leading-relaxed'>
                {product.description}
              </p>

              {/* Key Specs */}
              <div className='flex flex-wrap gap-4 mt-2'>
                {product.size && (
                  <div className='flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border-light'>
                    <span className='material-symbols-outlined text-accent text-base'>straighten</span>
                    <div>
                      <p className='text-[10px] text-text-muted uppercase tracking-widest font-bold'>Size</p>
                      <p className='text-primary text-sm font-bold'>{product.size}</p>
                    </div>
                  </div>
                )}
                {product.weight && (
                  <div className='flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border-light'>
                    <span className='material-symbols-outlined text-accent text-base'>scale</span>
                    <div>
                      <p className='text-[10px] text-text-muted uppercase tracking-widest font-bold'>Weight</p>
                      <p className='text-primary text-sm font-bold'>{product.weight}</p>
                    </div>
                  </div>
                )}
                {product.packingDetails && (
                  <div className='flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border-light'>
                    <span className='material-symbols-outlined text-accent text-base'>inventory_2</span>
                    <div>
                      <p className='text-[10px] text-text-muted uppercase tracking-widest font-bold'>Packing</p>
                      <p className='text-primary text-sm font-bold'>{product.packingDetails}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image */}
            <div className='flex-1 w-full'>
              <div className='relative group'>
                <div className='absolute -inset-2 bg-accent/15 rounded-xl blur-xl group-hover:bg-accent/25 transition-all duration-500' />
                <div
                  className='relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-product'
                  style={{ backgroundImage: `url('${product.heroImage}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className='flex flex-1 justify-center py-16 bg-white'>
        <div className='layout-content-container flex flex-col w-full max-w-[1280px] px-6'>
          <div className='text-center mb-12'>
            <div className='accent-divider mx-auto mb-4' />
            <h2 className='text-3xl font-black text-primary mb-3'>
              Product Features
            </h2>
            <p className='text-text-muted max-w-2xl mx-auto text-sm'>
              Engineered to perform — every feature built to deliver lasting value in real-world applications.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {product.features.map((item, index) => (
              <div
                key={index}
                className='flex gap-4 rounded-xl border border-border-light bg-surface p-6 hover:border-accent/40 hover:shadow-card transition-all group'
              >
                <div className='text-accent bg-accent/10 w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-all'>
                  <span className='material-symbols-outlined text-2xl'>{item.icon}</span>
                </div>
                <div>
                  <h3 className='text-primary font-bold text-sm mb-1'>{item.title}</h3>
                  <p className='text-text-muted text-sm leading-relaxed'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colour Variants */}
      {product.variants && product.variants.length > 0 && (
        <div className='flex flex-1 justify-center py-16 bg-surface'>
          <div className='layout-content-container flex flex-col w-full max-w-[1280px] px-6'>
            <div className='mb-10'>
              <div className='accent-divider mb-4' />
              <h2 className='text-3xl font-black text-primary mb-2'>Colour & Style Selection</h2>
              <p className='text-text-muted text-sm'>All variants available — choose the finish that best suits your project.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
              {product.variants.map((variant, i) => (
                <div key={i} className='bg-white rounded-xl border border-border-light p-5 hover:border-accent/40 hover:shadow-card transition-all'>
                  {/* Colour swatch placeholder */}
                  <div className='w-full h-24 rounded-lg bg-gradient-to-br from-surface to-border-light mb-4 flex items-center justify-center'>
                    <span className='material-symbols-outlined text-text-muted/40 text-3xl'>texture</span>
                  </div>
                  <p className='text-[10px] text-accent font-bold uppercase tracking-widest mb-1'>{variant.code}</p>
                  <h4 className='text-primary font-bold text-sm'>{variant.name}</h4>
                  {variant.description && (
                    <p className='text-text-muted text-xs mt-1'>{variant.description}</p>
                  )}
                  {variant.size && (
                    <p className='text-text-muted text-xs mt-1 font-medium'>{variant.size}</p>
                  )}
                  {variant.weight && (
                    <p className='text-text-muted text-xs'>{variant.weight}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Applications */}
      {product.applications && (
        <div className='flex flex-1 justify-center py-16 bg-white'>
          <div className='layout-content-container flex flex-col w-full max-w-[1280px] px-6'>
            <div className='flex flex-col md:flex-row gap-12 items-start'>
              <div className='flex-1'>
                <div className='accent-divider mb-4' />
                <h2 className='text-3xl font-black text-primary mb-3'>Applications</h2>
                <p className='text-text-muted text-sm mb-8'>Where this product performs best.</p>
                <div className='flex flex-wrap gap-3'>
                  {product.applications.map((app, i) => (
                    <span key={i} className='flex items-center gap-2 px-4 py-2.5 bg-surface border border-border-light rounded-lg text-sm font-semibold text-primary'>
                      <span className='w-1.5 h-1.5 bg-accent rounded-full' />
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Installation Steps */}
              {product.installationSteps && (
                <div className='flex-1'>
                  <div className='accent-divider mb-4' />
                  <h2 className='text-3xl font-black text-primary mb-3'>Installation</h2>
                  <p className='text-text-muted text-sm mb-8'>Step-by-step guide for professional results.</p>
                  <ol className='space-y-4'>
                    {product.installationSteps.map((step, i) => (
                      <li key={i} className='flex gap-4'>
                        <div className='w-7 h-7 rounded-full bg-accent text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5'>
                          {i + 1}
                        </div>
                        <p className='text-text-muted text-sm leading-relaxed'>{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Accessories (if any) */}
      {product.accessories && product.accessories.length > 0 && (
        <div className='flex flex-1 justify-center py-12 bg-surface'>
          <div className='layout-content-container flex flex-col w-full max-w-[1280px] px-6'>
            <div className='accent-divider mb-4' />
            <h2 className='text-3xl font-black text-primary mb-8'>Matching Accessories</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
              {product.accessories.map((acc, i) => (
                <div key={i} className='bg-white rounded-xl border border-border-light p-5 flex gap-4 items-start'>
                  <div className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0'>
                    <span className='material-symbols-outlined text-accent text-xl'>category</span>
                  </div>
                  <div>
                    <p className='text-[10px] text-accent font-bold uppercase tracking-widest mb-1'>{acc.code}</p>
                    <h4 className='text-primary font-bold text-sm'>{acc.name}</h4>
                    {acc.size && <p className='text-text-muted text-xs mt-0.5'>{acc.size}</p>}
                    {acc.description && <p className='text-text-muted text-xs mt-1'>{acc.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ServiceComponent