import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import Home from '../../pages/home/Home.jsx'
const Layout = ({children}) => {
  
  return (
    <div className='absolute top-0 w-[100%]'>
       <Navbar/>
        <div className="content">
             {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
