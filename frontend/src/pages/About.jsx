import React from 'react'

function About() {
  return (
    <main className="max-w-[1200px] mx-auto">
      {/* <!-- Breadcrumbs --> */}
      <div className="flex flex-wrap gap-2 px-10 py-6">
        <a
          className="text-[#7c746e] dark:text-[#a39a94] text-sm font-medium"
          href="#"
          >Home</a
        >
        <span className="text-[#7c746e] text-sm font-medium">/</span>
        <span className="text-[#161413] dark:text-white text-sm font-medium"
          >About Us</span
        >
      </div>
      {/* <!-- Hero Section --> */}
      <section className="px-10 pb-12">
        <div className="@container">
          <div
            className="relative flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
            data-alt="Rustic wood workshop texture with carpenter tools"
            style={{
              backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.4),
                  rgba(0, 0, 0, 0.6)
                ),
                url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIdvz8FJvG-7qowF4prY57UGwVeIRH-4RJXjpYAsmXHoVeqsxEo7ywSAMPxqaPyBNne-t1IWWsFwKDqOKv-C2lLh3Vl0CnIPU6dbN7Cfr7FfwTE-hz9JlMhGZr8s_RT5T2GjJPzfAGYYof_RjCxhKlFvLVsXJYykgwr2bD27J8Usx0zmFheSYGfC9kgBunV__C-FS0VhCeaymP3YQhtUZ4kdA-lkG8IZ7-AQ1ZvygKbapOq1JYh5Uj9fXQ1lq7rhFfx9lpK87PSF8')`
            }}
          >
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1
                className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl"
              >
                Craftsmanship Built to Last
              </h1>
              <p className="text-white/90 text-lg font-medium max-w-xl mx-auto">
                Transforming outdoor visions into structural legacies. From
                first cut to final finish, we define excellence in exterior
                design.
              </p>
            </div>
            <div className="mt-4">
              <button
                className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg hover:scale-105 transition-transform"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Story Section --> */}
      <section
        className="px-10 py-20 flex flex-col md:flex-row gap-16 items-center"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest">
            Our Legacy
          </h2>
          <h3 className="text-4xl font-black leading-tight tracking-tight">
            Our Story
          </h3>
          <p className="text-[#4c4743] dark:text-[#ccc6c0] text-lg leading-relaxed">
            Born from a passion for traditional carpentry, APEX Deck &amp;
            Design transforms outdoor spaces into architectural masterpieces.
            Our journey is rooted in quality, precision, and the belief that
            every deck should be a sanctuary.
          </p>
          <p className="text-[#4c4743] dark:text-[#ccc6c0] text-lg leading-relaxed">
            What started as a small workshop dedicated to bespoke furniture
            evolved into a premier exterior design firm. Today, we combine
            decades of hands-on experience with modern engineering to deliver
            exterior solutions that aren't just built—they're crafted.
          </p>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <span className="font-bold italic text-primary"
                >Master Carpenter &amp; Founder</span
              >
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative group">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg transition-all group-hover:top-0 group-hover:left-0 -z-10"
            ></div>
            <div
              className="w-full aspect-[4/5] bg-center bg-cover rounded-lg shadow-xl"
              data-alt="High quality finished hardwood deck with luxury furniture"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaM6YDXE1Xfo5ulLPyaNiTMzUdP2UTvLQ-82SVpwEI7TtR-e85ksIb9jOTq_6KPCdpfEibv4ENkaWsyrfCDcdv3oF5_cVTQzBVa3w85TtwjfR75Z7MI2iA86wRd8QNipUnI39uUvRK2KQfUyCp8gfUB84-BKVQxj5UEICpEeOVDaMxtczxONKMxNTxuDyvHPlWtQcZnm1ri5oRg3EmaAtoYRGdBLxuL468goGjdRumPf7TQgWFCaHzXXUPaNTAmk1NDaQDxlqSDuA')`,
              }}
            ></div>
          </div>
        </div>
      </section>
      {/* <!-- Stats Bar --> */}
      <section className="px-10 py-12">
        <div
          className="bg-primary rounded-xl p-10 flex flex-wrap justify-around gap-8 text-white"
        >
          <div className="text-center">
            <div className="text-4xl font-black mb-1">15+</div>
            <div
              className="text-white/80 text-sm font-medium uppercase tracking-wider"
            >
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-1">500+</div>
            <div
              className="text-white/80 text-sm font-medium uppercase tracking-wider"
            >
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-1">100%</div>
            <div
              className="text-white/80 text-sm font-medium uppercase tracking-wider"
            >
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black mb-1">25</div>
            <div
              className="text-white/80 text-sm font-medium uppercase tracking-wider"
            >
              Master Artisans
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Our Values Section --> */}
      <section className="px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black mb-4">The Values We Build Upon</h2>
          <p className="text-[#7c746e] dark:text-[#a39a94]">
            Every nail, plank, and beam is guided by our commitment to
            excellence and integrity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Value 1 --> */}
          <div
            className="p-8 bg-white dark:bg-[#25221f] rounded-xl border border-[#e5e5e0] dark:border-[#33312e] hover:shadow-lg transition-shadow"
          >
            <div
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6"
            >
              <span className="material-symbols-outlined">high_quality</span>
            </div>
            <h4 className="text-lg font-bold mb-3">Uncompromising Quality</h4>
            <p
              className="text-[#7c746e] dark:text-[#a39a94] text-sm leading-relaxed"
            >
              We source only premium sustainable hardwoods and composite
              materials designed to endure the elements.
            </p>
          </div>
          {/* <!-- Value 2 --> */}
          <div
            className="p-8 bg-white dark:bg-[#25221f] rounded-xl border border-[#e5e5e0] dark:border-[#33312e] hover:shadow-lg transition-shadow"
          >
            <div
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6"
            >
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <h4 className="text-lg font-bold mb-3">Absolute Honesty</h4>
            <p
              className="text-[#7c746e] dark:text-[#a39a94] text-sm leading-relaxed"
            >
              Transparent quotes, realistic timelines, and clear communication
              from design to installation.
            </p>
          </div>
          {/* <!-- Value 3 --> */}
          <div
            className="p-8 bg-white dark:bg-[#25221f] rounded-xl border border-[#e5e5e0] dark:border-[#33312e] hover:shadow-lg transition-shadow"
          >
            <div
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6"
            >
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h4 className="text-lg font-bold mb-3">Custom Solutions</h4>
            <p
              className="text-[#7c746e] dark:text-[#a39a94] text-sm leading-relaxed"
            >
              We don't do 'cookie-cutter'. Every design is tailored to your
              home's unique architecture and lifestyle.
            </p>
          </div>
          {/* <!-- Value 4 --> */}
          <div
            className="p-8 bg-white dark:bg-[#25221f] rounded-xl border border-[#e5e5e0] dark:border-[#33312e] hover:shadow-lg transition-shadow"
          >
            <div
              className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6"
            >
              <span className="material-symbols-outlined"
                >sentiment_very_satisfied</span
              >
            </div>
            <h4 className="text-lg font-bold mb-3">Total Satisfaction</h4>
            <p
              className="text-[#7c746e] dark:text-[#a39a94] text-sm leading-relaxed"
            >
              Our job isn't done until you are thrilled with your new outdoor
              sanctuary. We stand by our work.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className="px-10 py-20">
        <div
          className="bg-background-dark dark:bg-black rounded-xl p-12 text-center relative overflow-hidden"
        >
          {/* <!-- Background decoration --> */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"
          ></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"
          ></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-white text-3xl md:text-4xl font-black">
              Ready to elevate your exterior?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Join the hundreds of homeowners who have transformed their
              backyards into premium living spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                className="bg-primary text-white font-bold h-14 px-10 rounded-lg hover:brightness-110 transition-all"
              >
                Start Your Quote
              </button>
              <button
                className="bg-white/10 hover:bg-white/20 text-white font-bold h-14 px-10 rounded-lg backdrop-blur-sm transition-all"
              >
                Browse Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About