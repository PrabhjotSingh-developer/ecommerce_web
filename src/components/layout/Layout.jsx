import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Footer from '../footer/Footer.jsx'
import Home from '../../pages/home/Home.jsx'
import { useContext } from 'react'
import MyContext from '../../context/data/myContext.jsx'
const Layout = ({children}) => {
  const {mobileBar} = useContext(MyContext)
  return (
    <div className='absolute top-0 w-[100%]'>
     
       <Navbar/>
       {!mobileBar &&
           <>
            <div className="content">
             {children}
        </div>
        <Footer/>
           </>
       }
       
    </div>
  )
}

export default Layout
