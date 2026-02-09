import React from 'react'

let serviceIndex=0; // dynamic routing settinng and error handling
let services = [
  {
    heading:" What Is Composite Decking?",
    description:"Composite decking is a high-tech material engineered from a precise blend of 95% recycled wood fibers and plastic films. Unlike traditional timber, it mimics the natural grain of wood while providing a protective 'cap' that resists the elements.",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw4UQsgEBvuIZ8Vm7QQ35jkvdA8aGarXZtIkT6SmhodGWOeeBQxUsk0sYc0LfzM5xxAXnTxKTu41R7IbiRum_kMwcLCQldUoyWy5xeACmCTDMiMghFru9fZhOhZK2koQ5kp1DHq9Onww8qsbNpF_8-rAzbRqHVPEU4KQloomeWvM_wRmx5MReJ5L_v1g-7Lzdp9qicqz_BgAem2i88t5YRSJy3aAEt4gZke-K0tfQdxseN1N_Z18ypAevSzJj2xNBirsPt0SIcM5c",
    property: [{
      icon:"biotech",
      title:"Engineered Core",
      description:"Structural integrity that prevents warping and rot."
    }, {
      icon:"eco",
      title:"Sustainable",
      description:"Redirecting thousands of tons of plastic from landfills annually."
    }
  ],
    reasons:[
      {
        icon:"wb_sunny",
        title:"Weather Resistance",
        description:"Advanced UV inhibitors ensure your deck stands up to harsh sun and heavy rain without fading or cracking."
      },
      {
        icon:"verified_user",
        title:"Unrivaled Longevity ",
        description:"Enjoy peace of mind with our 25-year industry-leading premium residential warranty against stains and fades."
      },
      {
        icon:"mop",
        title:"Low Maintenance ",
        description:"Never stain, seal, or paint again. A simple soap and water wash is all it takes to keep it looking brand new."
      },
      {
        icon:"palette",
        title:" Architectural Style",
        description:"Available in a rich palette of multi-tonal colors and deep wood-grain textures to complement your home."
      },
    ]
  },
  
]





function ServiceComponent() {

  return (
     <>
      <div className="flex flex-1 justify-center py-12">
          <div
            className="layout-content-container flex flex-col w-full max-w-[1280px] px-4"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 flex flex-col gap-6">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                  Material Science
                </div>
                <h2 className="text-[#161413] dark:text-white text-4xl font-black leading-tight tracking-tight">
                  {services[serviceIndex].heading}
                </h2>
                <p
                  className="text-[#4d4844] dark:text-gray-400 text-lg leading-relaxed"
                >
                  {services[serviceIndex].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">

                  {services[serviceIndex].property.map((item , index) => (
                     <div className="flex flex-col gap-2" key={index}>
                    <div className="flex items-center gap-2 text-primary dark:text-accent">
                      <span className="material-symbols-outlined text-xl"
                        >{item.icon}</span>
                      <span className="font-bold">{item.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  ))}
              
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className="absolute -inset-2 bg-accent/20 rounded-xl blur-xl group-hover:bg-accent/30 transition-all duration-500"
                  ></div>
                  <div
                    className="relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl"
                    data-alt="Macro view of composite deck boards showing wood texture"
                    style={{
                      backgroundImage: `url('${services[serviceIndex].mainImage}')`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>


 <div className="flex flex-1 justify-center py-16 bg-background-light dark:bg-background-dark/50" >
          <div
            className="layout-content-container flex flex-col w-full max-w-[1280px] px-4"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-primary dark:text-white mb-4">
                Why Homeowners Choose Composite
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Modern engineering meets outdoor aesthetics. Our composite
                solutions offer unparalleled benefits over traditional cedar or
                pine.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services[serviceIndex].reasons.map((item , index)=> (
            <div
                className="flex flex-1 gap-4 rounded-xl border border-[#e2e0df] dark:border-[#333] bg-white dark:bg-background-dark p-8 flex-col hover:border-accent transition-colors group"
              key={index}>
                <div
                  className="text-accent bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined text-3xl"
                    >{item.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#161413] dark:text-white text-lg font-bold">
                    {item.title}
                  </h2>
                  <p
                    className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
       </>
  )
}

export default ServiceComponent