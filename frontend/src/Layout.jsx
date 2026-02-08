import React from 'react'
import {Navbar, Footer} from "./components"
function Layout({children}) {
  return (
    <div>

    <Navbar/>
      {children}
    <Footer/>

    </div>
    
  )
}

export default Layout