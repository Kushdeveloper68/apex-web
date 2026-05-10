import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product, featured = false }) {
  return (
    <Link
      to={`/detailservice/${product.id}`}
      className='product-card group block bg-white rounded-2xl overflow-hidden border border-border-light hover:border-accent/30 transition-all'
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[4/3]' : 'aspect-[3/2]'} bg-surface`}>
        <div
          className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105'
          style={{ backgroundImage: `url('${product.cardImage || product.heroImage}')` }}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
        
        {/* Category Badge */}
        <div className='absolute top-3 left-3'>
          <span className='px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest rounded-md'>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className='p-5'>
        <h3 className='text-primary font-bold text-lg leading-tight mb-1 group-hover:text-accent transition-colors'>
          {product.category}
        </h3>
        <p className='text-text-muted text-sm leading-relaxed mb-4 line-clamp-2'>
          {product.shortDescription}
        </p>

        {/* Size badge */}
        {product.size && (
          <div className='flex items-center gap-1.5 mb-4'>
            <span className='material-symbols-outlined text-accent text-sm'>straighten</span>
            <span className='text-xs text-text-muted font-medium'>{product.size}</span>
          </div>
        )}

        {/* Color Variants */}
        {product.variants && product.variants.length > 0 && (
          <div className='flex items-center gap-2 mb-4'>
            <span className='text-xs text-text-muted font-medium'>{product.variants.length} colours</span>
            <div className='flex gap-1'>
              {product.variants.slice(0, 4).map((v, i) => (
                <div
                  key={i}
                  className='w-4 h-4 rounded-full border border-border-light bg-surface'
                  title={v.name}
                />
              ))}
              {product.variants.length > 4 && (
                <div className='w-4 h-4 rounded-full border border-border-light bg-surface flex items-center justify-center'>
                  <span className='text-[8px] text-text-muted font-bold'>+{product.variants.length - 4}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className='flex items-center justify-between'>
          <span className='text-accent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all'>
            View Details
            <span className='material-symbols-outlined text-sm'>arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard