import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
const Layout = ({children}) => {
  return (
    <div>
       <Navbar/>
        <div className="content">
          {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
