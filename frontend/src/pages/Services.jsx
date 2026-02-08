import React from 'react'

function Services() {
  return (
    <>
 
     {/* <!-- HeroSection --> */}
      <section className="relative w-full">
        <div className="px-4 md:px-10 lg:px-40 py-10">
          <div className="@container">
            <div
              className="flex min-h-[500px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-2xl overflow-hidden relative"
              data-alt="Rich dark timber wood grain texture background"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.4) 0%,
                    rgba(0, 0, 0, 0.6) 100%
                  ),
                  url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcw0QrWwZiRJLUcIYjPGgZ7kRVInVE9CkZaZQlPS2htbL3XLh72adFppzjGAxQqbQa4QUYY5rSTw63SwQL1H882GXcNY3gyfuWWSBDDTfWxT3s0kzKPoh0gmixfcjBM_lXmbG120udP2Ysj5Kakumb3bOWDvF5pRLxv6jOcSUcPoj0R9Y3LWE2CjX1PwOUJj2VV76KKA0Sn5G8axKxE1dM8TV927fBemGYxW7dYjc3JUH9f9mrfZNlIMO4OcbHYiBH7eIv0J_gr6I')`
              }}
            >
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1
                  className="text-white text-4xl md:text-6xl font-serif leading-tight"
                >
                  Mastering the Art of Timber &amp; Exterior Design
                </h1>
                <p
                  className="text-white/90 text-base md:text-xl font-light tracking-wide max-w-2xl mx-auto"
                >
                  Premium carpentry and bespoke exterior solutions meticulously
                  crafted for modern living spaces.
                </p>
              </div>
              <div className="mt-4">
                <button
                  className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold tracking-wide hover:bg-primary/90 transition-all border border-white/20"
                >
                  <span>View Our Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section Title --> */}
      <div className="px-4 md:px-10 lg:px-40">
        <div
          className="flex flex-col gap-2 py-10 border-b border-[#f3f2f1] dark:border-[#333]"
        >
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
            Our Expertise
          </h2>
          <h3
            className="text-[#161413] dark:text-white text-3xl md:text-4xl font-serif"
          >
            Craftsmanship Services
          </h3>
        </div>
      </div>
      {/* <!-- Services Cards - Alternating Layout --> */}
      <main className="px-4 md:px-10 lg:px-40 flex flex-col gap-20 py-20">
        {/* <!-- Service 1: Indoor Cladding (Text Left) --> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#161413] dark:text-white text-2xl md:text-3xl font-serif"
              >
                Indoor Cladding
              </h3>
              <p
                className="text-[#7c746e] dark:text-gray-400 text-base md:text-lg leading-relaxed"
              >
                Enhance your interior spaces with the natural warmth and
                sophisticated texture of custom timber wall treatments. We
                specialize in feature walls that breathe life into living areas
                and office spaces.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Sustainable Hardwood Selection
              </li>
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Seamless Precision Installation
              </li>
            </ul>
            <button
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold w-fit hover:bg-primary hover:text-white transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </button>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <div
              className="aspect-[16/10] bg-center bg-cover rounded-xl shadow-xl overflow-hidden group"
              data-alt="Modern interior living room with vertical timber slat cladding wall"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPWIS1EfstEUGm56GVJ78PSNxgvFfVjvGrvphnFLCj1fsjCinXFGsjY3KaRz9sfnTAgolA4bITZf5q66OSLDnozpr-K3Ybr032slz4kOG6Y-Bf9FRcTiBDYnJNqfZwRPUrmhijECg2njzKfbMO7btEEDZaIZ94V8uoD9avQD5SANdNe4i6xDAfizgl2SKBr3zm213n7AN7AGTr90w67xrHs8wCXtotYgThurs_CprqW4785o2TSnS6n_i5N6RWqJrjFiaXe_Nun28')`
              }}
            >
              <div
                className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- Service 2: Outdoor Cladding (Text Right) --> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div
              className="aspect-[16/10] bg-center bg-cover rounded-xl shadow-xl overflow-hidden group"
              data-alt="Architectural exterior of a house with premium cedar wood cladding"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6L1Hyd5i0-pjwwUxds1NrxgseAD4nMFZ3cO7amIiceN6q5HujfxT6pKQg5k5iwvP1djgvf2ji09maKqaQdn-9HBBvrwkdyZtdEqCR6D-XRZGqfwiJ8UPXd_qRZha1GC_ilfQAc2VM2K_rHvweefCLvXcloJbLCIXo7qRP-GPJRgWIAiTpdW-LO-cVgDcTdEQF9kTtuAQCpspW2so3iVYNvSEhWGp_s6BosqUWuvHYZANw8Hc8Z0TL9ltfSDFsTCUKZEvFVw7J3Rk')`
              }}
            >
              <div
                className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              ></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#161413] dark:text-white text-2xl md:text-3xl font-serif"
              >
                Outdoor Cladding
              </h3>
              <p
                className="text-[#7c746e] dark:text-gray-400 text-base md:text-lg leading-relaxed"
              >
                Protect and beautify your home with durable, weather-resistant
                cladding solutions designed for architectural impact. Our
                treatments are built to withstand the elements while maintaining
                their aesthetic brilliance.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Weather-Proof Finishes
              </li>
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Modern Shiplap &amp; Tongue-and-Groove
              </li>
            </ul>
            <button
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold w-fit hover:bg-primary hover:text-white transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </button>
          </div>
        </div>
        {/* <!-- Service 3: Composite Decking (Text Left) --> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#161413] dark:text-white text-2xl md:text-3xl font-serif"
              >
                Composite Decking
              </h3>
              <p
                className="text-[#7c746e] dark:text-gray-400 text-base md:text-lg leading-relaxed"
              >
                Revolutionize your outdoor living with high-performance
                composite decking. Combining the beauty of real wood with
                ultra-low maintenance, it’s the perfect foundation for your
                backyard retreat.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Rot &amp; Fade Resistant
              </li>
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Hidden Fastener Systems
              </li>
            </ul>
            <button
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold w-fit hover:bg-primary hover:text-white transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </button>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <div
              className="aspect-[16/10] bg-center bg-cover rounded-xl shadow-xl overflow-hidden group"
              data-alt="Luxury modern composite deck overlooking a garden with outdoor furniture"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9VRSGoDNOzJ_ut69LkHEtAZyGIRVPc72vMQ3Ih-hWhh91iqw-uJ62993Gm1POWpaPIXswY_7_EemNMblQwn9KaotbC_w06Dl8oLBT4Gq_UytDcVxhta5HIaJMJlyiCSGwXFMGoizlfUM-HBs26KWXEcJgbqGUzaCnn7AhXT1EFPO58-5c376MMxLVCXPo3AAkCdf0LQof_sCurPrVLJEgy_0lNsI5Mw8Cu644HFwSwfvK7DsARVwBNhg2sOvzEMxEuNdC5sCHaZI')`
              }}
            >
              <div
                className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
        {/* <!-- Service 4: Cabinet Making (Text Right) --> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div
              className="aspect-[16/10] bg-center bg-cover rounded-xl shadow-xl overflow-hidden group"
              data-alt="High-end custom built-in wooden cabinets and shelving unit"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmR1HBnzsicSDsEauOBBX667a0WK0sfmGGlAJCoFG6tlWOteP3k-u2vs8qHHruwDY_wbeTczoJnOhW5VLQn8Wp_nYYCAhNhysdlUhtC26Kf1OoUNXggYcaFyAu2qy0hQcplusS9Ac-fIaQIAOsT6Hzz8zVJZgSNNhLVBzNZ6Y2RRvYvx3NfYdLcAQkwhTDhn6YPY8LFnR110Vj5nIiepwT51R0YXC4SX4WNrO5-L5_JEqI3fwq7Yj7xZycvYCOrRhu4euFKEfzbrk')`
              }}
            >
              <div
                className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              ></div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#161413] dark:text-white text-2xl md:text-3xl font-serif"
              >
                Cabinet Making
              </h3>
              <p
                className="text-[#7c746e] dark:text-gray-400 text-base md:text-lg leading-relaxed"
              >
                Bespoke cabinetry that blends functionality with artisan
                quality. From minimalist kitchen units to grand library shelves,
                our master carpenters bring precision to every joint.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Tailored Storage Solutions
              </li>
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Premium Hardware &amp; Soft-Close
              </li>
            </ul>
            <button
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold w-fit hover:bg-primary hover:text-white transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </button>
          </div>
        </div>
        {/* <!-- Service 5: Pergola Installation (Text Left) --> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <h3
                className="text-[#161413] dark:text-white text-2xl md:text-3xl font-serif"
              >
                Pergola Installation
              </h3>
              <p
                className="text-[#7c746e] dark:text-gray-400 text-base md:text-lg leading-relaxed"
              >
                Create a stunning focal point for your garden. Our
                custom-designed pergolas offer the perfect balance of shade and
                architectural elegance, extending your living space outdoors.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Bespoke Timber Frame Design
              </li>
              <li
                className="flex items-center gap-2 text-sm text-[#161413] dark:text-gray-300"
              >
                <span className="material-symbols-outlined text-primary text-lg"
                  >check_circle</span
                >
                Structural Integrity Guaranteed
              </li>
            </ul>
            <button
              className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold w-fit hover:bg-primary hover:text-white transition-all"
            >
              <span>Learn More</span>
              <span className="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </button>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <div
              className="aspect-[16/10] bg-center bg-cover rounded-xl shadow-xl overflow-hidden group"
              data-alt="Elegant timber pergola structure in a modern landscaped garden"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsVC8UlHibfXZ-6TzNWvbL360a53AMG-0Tx_zMDfAG3oH0bEG6E6hCWmgYdOHT8TbnUeA8bWL2GEtCTu5ml_WGLlVWfQkgrXqXWhw0nr7VSTZsut2JXOPtIZF63YCi_YplVpPr_nnCY5G7rHmPw8NgIrqfWLiDBWWo1LFt6w5-dlObKaPkB-vDIVhXZmHveJqd6aCXyFTN9vpsliSsKMYgooPw87jXwPWT_MeMHCmpQtKaPm8Z1h7fDchBk0VWjNy3EzbM2g-0Wvs')`
              }}
            >
              <div
                className="w-full h-full bg-black/0 group-hover:bg-black/10 transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- CTA Section --> */}
      <section className="bg-primary py-20 mt-10">
        <div
          className="px-4 md:px-10 lg:px-40 text-center flex flex-col items-center gap-8"
        >
          <h2 className="text-white text-3xl md:text-5xl font-serif">
            Ready to transform your space?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl">
            Whether it's a small interior refresh or a complete exterior
            overhaul, our team of experts is ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 h-12 rounded-lg bg-white text-primary font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Request a Free Consultation
            </button>
            <button
              className="px-8 h-12 rounded-lg border border-white text-white font-bold hover:bg-white/10 transition-colors"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
         </>
  )
}

export default Services