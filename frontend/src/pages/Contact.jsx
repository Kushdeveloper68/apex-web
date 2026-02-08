import React from 'react'

function Contact() {
  return (
   <>
   {/* <!-- Hero Section --> */}
    <section className="relative w-full">
      <div className="max-w-[1200px] mx-auto px-4 py-8 @container">
        <div
          className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-10 pb-16"
          data-alt="Luxury timber deck with architectural lighting at sunset"
          style={{
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.7) 100%
              ),
              url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbP4I3cxyCkPwyicJNv1e6FQVgFjfNrd1fB-iExSL3ckMYSUsOiwEdX5bT4qfl8kt4nxzhCzQrinvSSu53fRw0shT7xchTBiS3ZqNXK3AQOQjCx__Jpmj4IwHbVU4rJ_rmMMRMf2U0QWaawKpXEnW67nTr4Ot4RT9N7FcjzK-2rmJCsBJSl00aawexltWvvodUHtJmE5JtE3TYeiW8dZZDJJAVdr-0_HlV-UlmLLS4gD_-m0WVQgpEeGn1MOXJ-m6hIZwXAA5zEWE')`
          }}
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1
              className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-6xl"
            >
              Let’s Discuss Your Project
            </h1>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              Crafting premium outdoor living spaces across Australia. From
              bespoke timber decks to architectural pergolas, we bring your
              vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Main Content Area: Form + Info --> */}
    <main className="max-w-[1200px] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* <!-- Inquiry Form (Left 2/3) --> */}
        <div
          className="lg:col-span-2 bg-white dark:bg-[#25211e] p-8 rounded-xl shadow-sm border border-[#e2e0df] dark:border-[#333]"
        >
          <h2 className="text-2xl font-bold text-[#161413] dark:text-white mb-6">
            Inquire About Your Project
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span
                  className="text-sm font-bold text-[#161413] dark:text-gray-300 uppercase tracking-wider"
                  >Full Name</span
                >
                <input
                  className="form-input w-full rounded-lg border-[#e2e0df] dark:border-[#444] dark:bg-[#1c1916] h-14 p-4 text-base focus:ring-primary focus:border-primary"
                  placeholder="John Smith"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span
                  className="text-sm font-bold text-[#161413] dark:text-gray-300 uppercase tracking-wider"
                  >Phone Number</span
                >
                <input
                  className="form-input w-full rounded-lg border-[#e2e0df] dark:border-[#444] dark:bg-[#1c1916] h-14 p-4 text-base focus:ring-primary focus:border-primary"
                  placeholder="0400 000 000"
                  type="tel"
                />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span
                  className="text-sm font-bold text-[#161413] dark:text-gray-300 uppercase tracking-wider"
                  >Email Address</span
                >
                <input
                  className="form-input w-full rounded-lg border-[#e2e0df] dark:border-[#444] dark:bg-[#1c1916] h-14 p-4 text-base focus:ring-primary focus:border-primary"
                  placeholder="john@example.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span
                  className="text-sm font-bold text-[#161413] dark:text-gray-300 uppercase tracking-wider"
                  >Service Interest</span
                >
                <select
                  className="form-input w-full rounded-lg border-[#e2e0df] dark:border-[#444] dark:bg-[#1c1916] h-14 p-4 text-base focus:ring-primary focus:border-primary"
                >
                  <option disabled="" defaultValue="">
                    Select a Service
                  </option>
                  <option value="custom-decking">Custom Decking</option>
                  <option value="pergolas">Pergolas &amp; Gazebos</option>
                  <option value="outdoor-kitchens">Outdoor Kitchens</option>
                  <option value="landscaping">Integrated Landscaping</option>
                  <option value="commercial">Commercial Projects</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span
                className="text-sm font-bold text-[#161413] dark:text-gray-300 uppercase tracking-wider"
                >Project Details</span
              >
              <textarea
                className="form-input w-full rounded-lg border-[#e2e0df] dark:border-[#444] dark:bg-[#1c1916] p-4 text-base focus:ring-primary focus:border-primary"
                placeholder="Tell us about your dream outdoor space..."
                rows="4"
              ></textarea>
            </label>
            <button
              className="w-full md:w-auto min-w-[240px] bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Request Free Quote</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
          {/* <!-- Trust Badges --> */}
          <div
            className="mt-10 pt-8 border-t border-[#f3f2f1] dark:border-[#333] flex flex-wrap gap-8 opacity-70"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"
                >verified</span
              >
              <span className="text-xs font-bold uppercase tracking-widest"
                >Fully Licensed</span
              >
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"
                >security</span
              >
              <span className="text-xs font-bold uppercase tracking-widest"
                >10-Year Warranty</span
              >
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary"
                >schedule</span
              >
              <span className="text-xs font-bold uppercase tracking-widest"
                >24h Response</span
              >
            </div>
          </div>
        </div>
        {/* <!-- Contact Info Sidebar (Right 1/3) --> */}
        <div className="space-y-8">
          <div
            className="bg-white dark:bg-[#25211e] p-8 rounded-xl border border-[#e2e0df] dark:border-[#333]"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary"
                    >call</span
                  >
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-primary uppercase tracking-widest"
                  >
                    Call Us
                  </p>
                  <p className="text-lg font-semibold">1300 APEX DECK</p>
                  <p className="text-sm text-gray-500">Mon - Fri, 8am - 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary"
                    >mail</span
                  >
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-primary uppercase tracking-widest"
                  >
                    Email Us
                  </p>
                  <p className="text-lg font-semibold">hello@apexdesign.com.au</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary"
                    >location_on</span
                  >
                </div>
                <div>
                  <p
                    className="text-xs font-bold text-primary uppercase tracking-widest"
                  >
                    Service Areas
                  </p>
                  <ul className="mt-1 space-y-1">
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="size-1 bg-primary rounded-full"></span>
                      Greater Sydney
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="size-1 bg-primary rounded-full"></span>
                      Melbourne Metro
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="size-1 bg-primary rounded-full"></span>
                      Brisbane &amp; Gold Coast
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium">
                      <span className="size-1 bg-primary rounded-full"></span>
                      Canberra Region
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Review/Trust Card --> */}
          <div className="bg-primary p-8 rounded-xl text-white">
            <div className="flex gap-1 mb-4">
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
              <span className="material-symbols-outlined fill-1">star</span>
            </div>
            <p className="text-lg italic font-light mb-4 leading-relaxed">
              "The team at APEX transformed our backyard into an oasis. The
              quality of the timber work is second to none."
            </p>
            <p className="font-bold">— David R., Sydney</p>
          </div>
        </div>
      </div>
    </main>
    {/* <!-- Map Section --> */}
    <section
      className="w-full bg-white dark:bg-background-dark py-12 border-t border-[#e2e0df] dark:border-[#333]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Our Service Presence</h2>
        <div
          className="w-full h-[400px] bg-gray-200 dark:bg-[#333] rounded-xl overflow-hidden relative group"
        >
          {/* <!-- Map Placeholder Representation --> */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-[#f0edea] dark:bg-[#1a1715]"
            data-alt="Map of Australia showing service coverage across major coastal cities"
            data-location="Australia"
          >
            <span className="material-symbols-outlined text-6xl text-primary/40"
              >map</span
            >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative">
                <div
                  className="absolute -top-12 -left-4 bg-white dark:bg-[#25211e] px-4 py-2 rounded-lg shadow-xl border border-primary/20 text-xs font-bold whitespace-nowrap"
                >
                  APEX Head Office - Sydney
                </div>
                <span className="material-symbols-outlined text-primary text-4xl"
                  >location_on</span
                >
              </div>
            </div>
            {/* <!-- Decorative city dots --> */}
            <div className="absolute top-2/3 left-[45%]">
              <span className="material-symbols-outlined text-primary/60 text-sm"
                >radio_button_checked</span
              >
            </div>
            <div className="absolute top-1/4 left-[55%]">
              <span className="material-symbols-outlined text-primary/60 text-sm"
                >radio_button_checked</span
              >
            </div>
          </div>
          <div
            className="absolute bottom-6 right-6 bg-white/90 dark:bg-background-dark/90 p-4 rounded-lg shadow-lg backdrop-blur text-sm font-semibold border border-white/20"
          >
            Operating across all major metros.
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact