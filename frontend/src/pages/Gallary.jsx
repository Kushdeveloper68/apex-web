import React from 'react'

function Gallary() {
  return (
   <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12">
        {/* <!-- PageHeading --> */}
        <div className="flex flex-col gap-4 mb-12 text-center">
          <h1
            className="text-[#161413] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]"
          >
            Crafting Outdoor Excellence
          </h1>
          <p
            className="text-[#7c746e] dark:text-[#a39d99] text-lg max-w-2xl mx-auto"
          >
            Explore our portfolio of bespoke carpentry, premium decking, and
            architectural cladding solutions tailored for luxury living.
          </p>
        </div>
        {/* <!-- Chips / Filter --> */}
        <div
          className="flex justify-center gap-2 mb-10 overflow-x-auto pb-4 scrollbar-hide"
        >
          <button
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-primary text-white px-6 text-sm font-bold shadow-sm"
          >
            All Projects
          </button>
          <button
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#2a2724] text-[#161413] dark:text-white px-6 text-sm font-semibold hover:bg-primary/10 transition-colors border border-[#e5e5e5] dark:border-[#33302e]"
          >
            Decking
          </button>
          <button
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#2a2724] text-[#161413] dark:text-white px-6 text-sm font-semibold hover:bg-primary/10 transition-colors border border-[#e5e5e5] dark:border-[#33302e]"
          >
            Cladding
          </button>
          <button
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#2a2724] text-[#161413] dark:text-white px-6 text-sm font-semibold hover:bg-primary/10 transition-colors border border-[#e5e5e5] dark:border-[#33302e]"
          >
            Cabinets
          </button>
          <button
            className="flex h-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#2a2724] text-[#161413] dark:text-white px-6 text-sm font-semibold hover:bg-primary/10 transition-colors border border-[#e5e5e5] dark:border-[#33302e]"
          >
            Pergolas
          </button>
        </div>
        {/* <!-- Masonry Image Grid --> */}
        <div className="masonry-grid gap-6 space-y-6">
          {/* <!-- Project Item 1 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Modern wood terrace"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Wide angle view of a luxury modern cedar wood deck with glass railings"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVY6P9Mt1wn5Uu1K9yyOgFpalERUckrAyLuDZi03FpHDG-Y7hmJtpobi-_Bq-iPdBoAqSg4-GJRpCgI1YdOo01p0AfxzMMiwlsbZndNKGlU5wgRH2ysUAAhR3tsJq1bGsOhJzoNhUhXPChZdhd0FFh94xFN7NeHWjHchoNbdrHlHViV7241c6Re6FFt5X3US6Yw4DQFG1Oi-VldFUkPwskkU80r17p10ISRiWGg3YEyfdeHfM7hVWXqpgm1iwW6qcxvhfKjEKB-rw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Decking</span
              >
              <h3 className="text-white text-xl font-bold">
                The Hillside Vista Terrace
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Premium Ipe hardwood with integrated LED accent lighting.
              </p>
            </div>
          </div>
          {/* <!-- Project Item 2 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Vertical wood cladding"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Modern residence exterior featuring vertical cedar wood wall cladding"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl51Z08CevNeDMASjB-pQOR63yvmdYJzrYX_EJkQnQ_MgwAcY7r2Qx_hv5oehUi-h9QY-tUrksj9xntV9pQDRZhAgVZrCCk8HpjFVDCIBBN7znYosafW5L99TEpHj_YngW6k6ZB_AH0Q6JsCN-QJtoQET6lzjoNfhG0VlToMznXqbVbzinfNm4zF9Iuhjh5GH7BCwb5bwkSATbz9OdZP1tPGT0RK9gFdfmLJpAvi2pjm8xJjUkZJWLwr1Ew2hqtPnGMTk9OPpPLgw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Cladding</span
              >
              <h3 className="text-white text-xl font-bold">
                Zenith Architectural Wall
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Sustainable red cedar vertical slats for thermal performance.
              </p>
            </div>
          </div>
          {/* <!-- Project Item 3 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Custom cabinetry"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Minimalist dark wood kitchen cabinetry with gold hardware"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBimconrjzFo0N77I1uWGBfkmcgkwWP9LFHCLuEdMRz8APmVdqXL_oPTZRMJ06g65lMzTa8fDZu2uPg1wnRb_4CVMiVhBWvrBqaJWzzZsaNqcALj-YcvpCAeQ-yChtqB5F014rnLUjwnvt7q4abG2oev2hhUxDT5XXCyGS6ixTRx-6Q69PzSFaIrsPazJIcFBm7ps1gP3Lhh-2v28HSx2m30vqSVbbHajD6LEbHy7HKCsTBO87nhmezx7OvMCW5_lTJdcyKWFWyjkM"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Cabinets</span
              >
              <h3 className="text-white text-xl font-bold">
                Master Chef Kitchen Suite
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Custom-milled walnut cabinetry with seamless soft-close tech.
              </p>
            </div>
          </div>
          {/* <!-- Project Item 4 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Luxury Pergola"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Large white modern pergola structure over an outdoor seating area"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbxO7f3EsLSlu0bfN2J7EByUhv-kYzQAdCKRakSacenzhiYHaTWkTDF_80Qqfz_RtgV5PDZlXONGrjEQMZ2bHf_K196L-YSUUxwjSSny84HSvuW7YpXbjo6VSOhzv9rJ7pQL_Cvs1QsN4RokMx3Phutm-BaY9Z-wSIPNL4IDaEVJ2MBia4tfkyHRpnf7rlTpVz089IZX4OIy64NX4XSIOoug2WvBvaid71uT6NQoEmLd-uD8ygfzPgtnXEa3NHivbisVw2t0t54b4"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Pergolas</span
              >
              <h3 className="text-white text-xl font-bold">
                Skyline Alfresco Lounge
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Motorized louvered roof system for all-weather outdoor living.
              </p>
            </div>
          </div>
          {/* <!-- Project Item 5 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Composite decking"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Premium composite decking project surrounding a swimming pool"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvCzdVw_fsiBKlfinIn6zrKUEF0M3gGm-6rNnPR-9AFVuUYk1SfBGIut4uPn4-JQNrxDyeZP-edJTxwt6q-6ekQw5VBTiECO_q8_iCyWU_XtO7kZJKBpGeDQHCmbJ0S3-MHtQP9Zk69eXZYIT7JVgVqANVYPOCY2L1XhW1UbJ1UPS8Fn3AkLqBRnFXDKw8f8IJG6WBpbtaIDdGx-_dVbulZN4ILlPFOlNai0evFrW5JyOGEpVttA45b4ZgKCE4XvEM4Bt0pS-lay0"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Decking</span
              >
              <h3 className="text-white text-xl font-bold">The Oasis Pool Deck</h3>
              <p className="text-white/80 text-sm mt-2">
                Low-maintenance composite boards in Slate Grey finish.
              </p>
            </div>
          </div>
          {/* <!-- Project Item 6 --> */}
          <div
            className="relative group overflow-hidden rounded-xl bg-gray-200 break-inside-avoid"
          >
            <img
              alt="Wood interior accent"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Detail of a wood slat wall in a modern living room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJ8XD697CGfi-UeTfNcSs05i8WVArpvTjDKUP0OBda9KIGETBbe_hQJcHyVE9Vjk30tf5eTYL_SZf_zCkl-Cdna4AbJ8ihheKpugwCeHnFEz7eMerhaqBjvTzVAQl4QpFILdBbmvGDaxvLoeA1qVautDAg3bio-AMrYKhV8ooc2USbQ8CILhxYn9o5NuTbwlgGRP5frar_VVbPqlfphWHZ5nltEKq35n4tanfY8uoWoJgqXc_OqgxU2NnxHjhUwApks6rVZyXsd8"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
            >
              <span
                className="text-primary text-xs font-bold uppercase tracking-widest mb-1"
                >Cladding</span
              >
              <h3 className="text-white text-xl font-bold">
                Nordic Interior Accents
              </h3>
              <p className="text-white/80 text-sm mt-2">
                Oak slat feature wall for acoustic dampening and warmth.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- CTASection --> */}
        <div
          className="mt-24 mb-12 bg-white dark:bg-[#211e1b] rounded-2xl p-8 md:p-16 text-center border border-[#e5e5e5] dark:border-[#33302e]"
        >
          <h2
            className="text-[#161413] dark:text-white text-3xl md:text-4xl font-black mb-4"
          >
            Inspired by our work?
          </h2>
          <p
            className="text-[#7c746e] dark:text-[#a39d99] text-lg mb-8 max-w-xl mx-auto"
          >
            Let's collaborate on your next outdoor masterpiece. Our design
            consultations are tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Book a Consultation
            </button>
            <button
              className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all"
            >
              View More Services
            </button>
          </div>
        </div>
      </main>
  )
}

export default Gallary