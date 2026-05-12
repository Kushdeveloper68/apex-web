import React from 'react'
import { Link } from 'react-router-dom'

const VALUES = [
  {
    icon: 'high_quality',
    title: 'Uncompromising Quality',
    desc: 'We source only premium, certified materials engineered to perform beautifully for decades.',
  },
  {
    icon: 'eco',
    title: 'Sustainability First',
    desc: 'Eco-friendly products with near-zero formaldehyde — better for your family, better for the planet.',
  },
  {
    icon: 'architecture',
    title: 'Precision Engineering',
    desc: 'Every product manufactured to exacting tolerances so installation is fast, clean, and professional.',
  },
  {
    icon: 'support_agent',
    title: 'Expert Guidance',
    desc: 'From product selection to installation support, our team is here every step of the way.',
  },
]

const STATS = [
  { count: '5+', label: 'Product Lines' },
  { count: '500+', label: 'Projects Installed' },
  { count: '100%', label: 'Eco-Certified Range' },
  { count: '24h', label: 'Quote Response' },
]

const TEAM_HIGHLIGHTS = [
  {
    icon: 'verified',
    title: 'Certified Products',
    desc: 'All products meet international quality and safety standards including fire retardancy, formaldehyde emissions, and structural performance.',
  },
  {
    icon: 'local_shipping',
    title: 'Australia-Wide Supply',
    desc: 'Delivering premium decoration materials to builders, architects, and homeowners across all major Australian metros.',
  },
  {
    icon: 'handshake',
    title: 'Trade & Retail',
    desc: 'Tailored pricing and dedicated account support for trade professionals, builders, and developers.',
  },
]

function About() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-sm'>
        <Link to='/' className='text-text-muted hover:text-accent transition-colors font-medium'>Home</Link>
        <span className='text-border-light'>/</span>
        <span className='text-primary font-semibold'>About Us</span>
      </div>

      {/* Hero */}
      <section className='max-w-7xl mx-auto px-3 pb-10'>
        <div
          className='relative flex min-h-120 flex-col gap-6 bg-cover bg-center rounded-2xl items-center justify-center p-8 text-center overflow-hidden shadow-product'
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIdvz8FJvG-7qowF4prY57UGwVeIRH-4RJXjpYAsmXHoVeqsxEo7ywSAMPxqaPyBNne-t1IWWsFwKDqOKv-C2lLh3Vl0CnIPU6dbN7Cfr7FfwTE-hz9JlMhGZr8s_RT5T2GjJPzfAGYYof_RjCxhKlFvLVsXJYykgwr2bD27J8Usx0zmFheSYGfC9kgBunV__C-FS0VhCeaymP3YQhtUZ4kdA-lkG8IZ7-AQ1ZvygKbapOq1JYh5Uj9fXQ1lq7rhFfx9lpK87PSF8')`,
          }}
        >
          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-5'>
              Our Story
            </div>
            <h1 className='text-white text-5xl font-black leading-tight mb-4'>
              Premium Materials.<br />Lasting Results.
            </h1>
            <p className='text-white/85 text-lg leading-relaxed max-w-xl mx-auto mb-8'>
              TRUEBUILD Deck & Design is Australia's trusted supplier of premium decoration materials — bringing professional-grade wall panels, cladding, and acoustic solutions to residential and commercial spaces.
            </p>
            <Link to='/services' className='inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-bold text-sm hover:bg-accent-light transition-all'>
              <span className='material-symbols-outlined text-base'>category</span>
              Browse Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className='max-w-7xl mx-auto px-3 py-20 flex flex-col md:flex-row gap-16 items-center'>
        <div className='flex-1 space-y-6'>
          <div className='accent-divider' />
          <h3 className='text-accent text-sm font-bold uppercase tracking-widest'>Our Heritage</h3>
          <h2 className='text-4xl font-black text-primary leading-tight'>
            About TRUEBUILD<br />Deck & Design
          </h2>
          <p className='text-text-muted text-lg leading-relaxed'>
            TRUEBUILD Deck & Design was founded on a simple belief: Australian homes and commercial spaces deserve access to the same premium decoration materials used by the world's top architects and designers — without the traditional import complexity.
          </p>
          <p className='text-text-muted text-lg leading-relaxed'>
            We supply a curated range of high-performance products including PVC Marble Sheets, WPC Wall and Outdoor Panels, PS architectural panels, and MDF Acoustic Panels. Every product in our range is selected for quality, sustainability credentials, and ease of installation.
          </p>
          <p className='text-text-muted text-lg leading-relaxed'>
            Whether you're a builder looking for reliable cladding solutions, an architect sourcing acoustic materials for a commercial fitout, or a homeowner wanting to transform a bathroom with marble-look panels — TRUEBUILD has the product and the expertise to make it happen.
          </p>
        </div>

        <div className='flex-1 w-full'>
          <div className='relative group'>
            <div className='absolute -top-4 -left-4 w-full h-full border-2 border-accent/30 rounded-2xl transition-all group-hover:top-0 group-hover:left-0 -z-10' />
            <div
              className='w-full aspect-4/5 bg-center bg-cover rounded-2xl shadow-product'
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaM6YDXE1Xfo5ulLPyaNiTMzUdP2UTvLQ-82SVpwEI7TtR-e85ksIb9jOTq_6KPCdpfEibv4ENkaWsyrfCDcdv3oF5_cVTQzBVa3w85TtwjfR75Z7MI2iA86wRd8QNipUnI39uUvRK2KQfUyCp8gfUB84-BKVQxj5UEICpEeOVDaMxtczxONKMxNTxuDyvHPlWtQcZnm1ri5oRg3EmaAtoYRGdBLxuL468goGjdRumPf7TQgWFCaHzXXUPaNTAmk1NDaQDxlqSDuA')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className='max-w-7xl mx-auto px-3 pb-8'>
        <div className='bg-primary rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white'>
          {STATS.map((item, i) => (
            <div key={i} className='text-center'>
              <div className='text-4xl font-black text-accent mb-1'>{item.count}</div>
              <div className='text-white/70 text-xs font-semibold uppercase tracking-wider'>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products We Carry */}
      <section className='max-w-7-luto px-3 py-20'>
        <div className='text-center mb-14'>
          <div className='accent-divider mx-auto mb-4' />
          <h2 className='text-4xl font-black text-primary mb-3'>Our Product Range</h2>
          <p className='text-text-muted max-w-2xl mx-auto text-sm'>
            Five complementary product lines covering every interior and exterior decoration need.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {[
            { id: 'pvc-marble-sheet', icon: 'texture', title: 'PVC Marble Sheet', desc: '1220×2800×3mm · 21 kg · Waterproof, UV-coated, flame-retardant marble-look panels for indoor wall decoration.' },
            { id: 'wpc-wall-panel', icon: 'view_column', title: 'WPC Wall Panel', desc: '168×24×2900mm · 2.465 kg/pcs · Real wood texture PVC film on eco-friendly WPC core — zero formaldehyde.' },
            { id: 'wpc-outdoor-panel', icon: 'home_work', title: 'WPC Outdoor Panel', desc: '220×26×2900mm · 6.96 kg/pcs · Co-extruded shiplap panels for facades, fencing, and pergola cladding.' },
            { id: 'ps-panel', icon: 'layers', title: 'PS Panel', desc: 'Multiple profiles (130–310mm wide) · Lightweight polystyrene with thermal insulation and sound reduction.' },
            { id: 'acoustic-panel', icon: 'volume_off', title: 'MDF Acoustic Panel', desc: '600×21×3000mm · 13.6 kg/pcs · Slatted wood acoustic panels for studios, boardrooms, and home theatres.' },
          ].map((item, i) => (
            <Link
              key={item.id}
              to={`/detailservice/${item.id}`}
              className='group flex gap-4 p-6 bg-white rounded-2xl border border-border-light hover:border-accent/30 hover:shadow-card-hover transition-all'
            >
              <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all'>
                <span className='material-symbols-outlined text-xl'>{item.icon}</span>
              </div>
              <div>
                <h4 className='text-primary font-bold text-sm mb-1 group-hover:text-accent transition-colors'>{item.title}</h4>
                <p className='text-text-muted text-xs leading-relaxed'>{item.desc}</p>
                <span className='mt-3 flex items-center gap-1 text-accent text-xs font-bold'>
                  View Product <span className='material-symbols-outlined text-xs'>arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className='bg-surface py-20'>
        <div className='max-w-7xl mx-auto px-3'>
          <div className='text-center mb-14'>
            <div className='accent-divider mx-auto mb-4' />
            <h2 className='text-4xl font-black text-primary mb-3'>The Values We Build Upon</h2>
            <p className='text-text-muted max-w-xl mx-auto text-sm'>
              Every product decision, every customer interaction, every delivery — guided by these principles.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {VALUES.map((item, i) => (
              <div key={i} className='p-7 bg-white rounded-2xl border border-border-light hover:shadow-card-hover transition-all'>
                <div className='w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5'>
                  <span className='material-symbols-outlined'>{item.icon}</span>
                </div>
                <h4 className='text-primary font-bold mb-2 text-sm'>{item.title}</h4>
                <p className='text-text-muted text-sm leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade / Capability Highlights */}
      <section className='max-w-7xl mx-auto px-3 py-20'>
        <div className='text-center mb-14'>
          <div className='accent-divider mx-auto mb-4' />
          <h2 className='text-4xl font-black text-primary mb-3'>How We Work</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {TEAM_HIGHLIGHTS.map((item, i) => (
            <div key={i} className='bg-white rounded-2xl border border-border-light p-8 text-center hover:border-accent/30 hover:shadow-card-hover transition-all'>
              <div className='w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-5'>
                <span className='material-symbols-outlined text-2xl'>{item.icon}</span>
              </div>
              <h4 className='text-primary font-bold mb-3'>{item.title}</h4>
              <p className='text-text-muted text-sm leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='max-w-7xl mx-auto px-3 pb-20'>
        <div className='bg-primary rounded-2xl p-12 text-center relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32' />
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -ml-32 -mb-32' />
          <div className='relative z-10 space-y-5'>
            <div className='accent-divider mx-auto' />
            <h2 className='text-white text-3xl md:text-4xl font-black'>
              Ready to start your project?
            </h2>
            <p className='text-white/70 text-base max-w-xl mx-auto'>
              Join hundreds of builders, architects, and homeowners who have transformed their spaces with TRUEBUILD premium materials.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-3'>
              <Link to='/contact' className='px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-light transition-all'>
                Get a Free Quote
              </Link>
              <Link to='/services' className='px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all'>
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About