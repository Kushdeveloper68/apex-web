import React from 'react'
import ServiceComponent from './../components/ServiceComponent';



function Detailservice() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden"
    >
      <div className="layout-container flex h-full grow flex-col">

        {/* <!-- HeroSection --> */}
        <div className="flex flex-1 justify-center py-6">
          <div
            className="layout-content-container flex flex-col w-full max-w-[1280px]"
          >
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[580px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-16 @[480px]:px-16"
                  data-alt="Modern luxury composite deck overlooking a garden"
                  style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.2) 0%,
                        rgba(0, 0, 0, 0.6) 100%
                      ),
                      url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwmR7lnozP1FXKdMtCf14GikCN-juJJ-jzBNa2cIkI-llMb7D2AShumW6qA-I8JEEsNmqtmIYwvrWUyqY3gZeo8ggVl5e3DsdLCMnGAPGUfJfqbZzrFGbMWRzgD_NMp7NBbnl5e0so9Lk28MpvRIob3lauEtx2IO8uoF-DGgXvSQkHt9aJR-b8uYd5UlDfk3Jl1aUD6TD_xPGsfDuDWW8M7_sNEqlnOFgjXdBR4TBvlj7GHw7izGQ_iGkgpAXu3UM_FB72cmNcqbs')`
                  }}>
                  <div className="flex flex-col gap-4 text-left max-w-[800px]">
                    <h1
                      className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl"
                    >
                      Elevated Living with
                      <span className="text-accent">Premium</span> Composite Decking
                    </h1>
                    <h2
                      className="text-gray-200 text-lg font-normal leading-relaxed @[480px]:text-xl"
                    >
                      Experience the perfect blend of architectural luxury and
                      industrial durability. APEX provides high-performance
                      outdoor solutions that stand the test of time.
                    </h2>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-accent text-white text-base font-bold tracking-wide hover:scale-105 transition-transform"
                    >
                      Start Your Project
                    </button>
                    <button
                      className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all"
                    >
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- FeatureSection: What Is Composite Decking --> */}
      <ServiceComponent/>

        {/* <!-- TextGrid: Benefits --> */}
       
        {/* <!-- SectionHeader & Gallery Grid: Where It's Used --> */}
        <div className="flex flex-1 justify-center py-16">
          <div
            className="layout-content-container flex flex-col w-full max-w-[1280px] px-4"
          >
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2
                  className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-2"
                >
                  Versatile Design
                </h2>
                <h3 className="text-3xl font-black text-[#161413] dark:text-white">
                  Where Premium Decking Excels
                </h3>
              </div>
              <button
                className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors"
              >
                Explore Applications
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Luxury patio deck with outdoor furniture"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8-bV5h2LoTF3FTDqCL67IicWJ4pVZ_4fr_H7dF7Sbo7sMoosJhp5AUzEJRd07d1C0fQVnM0OfwIJ6i7S74SI1px_qUb5-l3W9bmyPvofekqbHdvZfQi24nhNFoUSrBEY6Gx5Q8YkQHQ8F84oFt_9UfbBquELhnYu_HNflLFBn_xheeJMmqVBcR-JNESog3PJj5kzYcSffFJqQub15jXnpyd-j-ssUVmkdxIoJlJ9U3K3VvgtBuphPkrv11pWG2d2UT27oLfpC40')`
                  }}  
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                ></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold">Expansive Patios</h4>
                  <p
                    className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Spacious multi-level entertaining areas designed for
                    hosting.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Composite decking around a modern swimming pool"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgkeOnjeyzq8GaJULzwSfmsJjBb9-M5dyw4KAfh_WR4BfIZba20JAMnW8xC6vDKo7v1mn3HcVeFuqqb4UHhVcqwDgTKvvPQQtexw5wdl7ayOpD7AhCna3IFfFylGAjKy8TSZsMAhbTUjLxwN0UFDjylN3Bn8B984uYh96fnXB2-WytJ7GIj1VGuF2vEeEH_lLnbyNDvXcOF16drwFDvJCnM-OVs0QOUa-oWPm6o6Gp0vTrNptd1sSlFfL4dkc6LxK1xWfabBQcRPY')`
                  }}
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                ></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold">Poolside Oasis</h4>
                  <p
                    className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Splinter-free and slip-resistant surfaces for barefoot
                    safety.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  data-alt="Balcony deck with a scenic view"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOnvM0qwKNLv0JKWmDlfhbzflvVpTuZywWcfma9S6xdi5swDnO7Pe64Zrm1DhMJJdfn0HVrurVN0rTk0wdSJ1E4ZgMidgh3s0FniRAEFl7O6CpNfFr21E3XUEFcVOIyzw0wthEhDUeWXD8NxQb04A4OqUFytSxo0SuBExu-xN7KhzVKYjhNHpE3x6t_2nb9JmCSJmaq9qf9yC0NU9TbLociBfmQ8XlRwjdGvjU4wIftAoFFwm-sUAGqFnVSYxAtM_e8eYLoRhbHj8')`
                  }}
                ></div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                ></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-white text-xl font-bold">
                    Roof Decks &amp; Balconies
                  </h4>
                  <p
                    className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Lightweight, durable solutions for elevated urban living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Focused Project Gallery --> */}
        <div
          className="flex flex-1 justify-center py-16 bg-white dark:bg-background-dark"
        >
          <div
            className="layout-content-container flex flex-col w-full max-w-[1280px] px-4"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-primary dark:text-white mb-4">
                The APEX Portfolio
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="aspect-square bg-cover bg-center rounded-lg"
                data-alt="Dark charcoal composite deck with glass railing"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6ev7QgloYU-DeqFCJIwJp4Mhw3syIpXhCec5SNtxGxTHC-CuqofXIctDNaGSLUU9M54RBeY-n0TfYtqv2NxFxLFiSOxBo-nyfWuBuNfNWLFL718MAeWq_huvCW-300qmD9YmYFRFQt1fO-zpOK2F24ZI3DrSvV2Qh-loiSovSgUZ9ohExNuuYhiO_975BoZrhej4SRhvvItUaVg60fHtuthgE7QjKzo1lDMhW_bjc_RtgTll1lrmt1WP1Dtg9m40mMFP9SUdTXeM')`
                }}
              ></div>
              <div
                className="aspect-video lg:col-span-2 bg-cover bg-center rounded-lg"
                data-alt="Warm teak colored deck with outdoor kitchen"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLKHyTPy2pNxYnrOLHDk9B7OGtyBRuZm1GYwB-zj1k83zDwIp0goV63smH4eoqsZzPiy2SqocGrZQdQ437GxkCMavgXPFvP5ub5XvimU8MwcsisTzV6PnuUKdJLdfSeK_gFi3IDMMZPMixNijcq4zI6O5bkTUQyrzlUbrTdPdxesa4LS868NpNXTihKsdK1GzJVK5sVZLhGR3afWMZghrT0wpkXe4OB6dYNDwEVGQBzGZEhRpXcosL0cFbJ0iJ-K67z-TUZ7HBWaU')`
                }}
              ></div>
              <div
                className="aspect-video lg:col-span-2 bg-cover bg-center rounded-lg"
                data-alt="Custom curved deck design in light oak finish"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9bx0tncLjl37nR2nStvLyKh6c9T0I45nlY9Nn2c6LmC6ajNILnIGJlpfj0g7zjfBJcPSB6rsna4r-vktT5ctsDo0tVebkP_MVouEZE0HXW_5YWdgvm73YaQe70QiGQ71qP30GH1bd7KXaVGG5bkK9Hv5n_DLCG8jSAtYeHFpZ5zLd9jzQXU7ffWlu6xOKX9HVT7pGReuG97sMHc397OpJ16FQLYp-oh6ohJxBKIBHcbrbTx9LE65poRV_qb0j1IueTkIZVpqhTm4')`
                }}
              ></div>
              <div
                className="aspect-square bg-cover bg-center rounded-lg"
                data-alt="Modern firepit integrated into composite decking"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASm_pjKjSdRbSnorUTFGrzpdpHfXxG9OY_KUfS4w8yI3kAQXjBGTp3Dfc1URQBuaBNjYA1uOV_kYnZTH5yTDNoxkqDWdXjA8BsJ-fnLZQ-WwwM6cELtAqxxUXGNN-j-jBcM2VKOGrFwK8j4TmNaw_ccqMzkZ4bAb9Fy3gNmhuZJ4FHDT2lmJiH2H2bd-FASV6A4Tl3005iiQHNXV5aDZog6x-ouStKpV8v7C2t7BGyVG_jhlhNKvD-aXBFnHFwmw_cePGte1SdZSk')`
                }}
              ></div>
            </div>
            <div className="mt-12 flex justify-center">
              <button
                className="border-2 border-primary text-primary dark:border-white dark:text-white hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all"
              >
                View Full Gallery
              </button>
            </div>
          </div>
        </div>
        {/* <!-- CTA Section --> */}
        <div className="flex flex-1 justify-center py-20 px-4">
          <div
            className="layout-content-container flex flex-col w-full max-w-[1100px]"
          >
            <div
              className="bg-primary rounded-3xl p-12 relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* <!-- Decorative circle --> */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
              ></div>
              <div
                className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"
              ></div>
              <div className="relative z-10">
                <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
                  Start Your Decking Project Today
                </h2>
                <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
                  Join hundreds of satisfied homeowners who have transformed
                  their outdoor living space with APEX Deck &amp; Design.
                  Request your free consultation and quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-accent text-white px-10 py-4 rounded-xl font-extrabold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    Request a Free Quote
                  </button>
                  <button
                    className="bg-white text-primary px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-gray-100 transition-all"
                  >
                    Call (555) APEX-DECK
                  </button>
                </div>
                <div
                  className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm font-medium"
                >
                  <span className="flex items-center gap-1"
                    ><span className="material-symbols-outlined text-accent"
                      >check_circle</span
                    >
                    Quality Guaranteed</span
                  >
                  <span className="flex items-center gap-1"
                    ><span className="material-symbols-outlined text-accent"
                      >check_circle</span
                    >
                    Licensed &amp; Insured</span
                  >
                  <span className="flex items-center gap-1"
                    ><span className="material-symbols-outlined text-accent"
                      >check_circle</span
                    >
                    Expert Installers</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Detailservice