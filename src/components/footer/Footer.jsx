import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../../context/data/myContext'
import { FaTwitterSquare,FaInstagramSquare,FaLinkedin  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const data = [
  {
    head:"CATEGORIES",
    links:["Home","Order","Local For Vocal","Cart"]
  },
  {
    head:"CUSTOMER SERVICE",
    links:["Return Policy","About","Contact Us"]
  },
  {
    head:"Services",
    links:["Privacy"]
  }
]
const Footer = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const color = mode === 'light' ? '' :'text-white'
  const background_color = mode === 'light' ? 'bg-[#f3f4f6]':'bg-[#3e4042]'
  return (
    <div className={`main_footer ${color,background_color}`}>
      <div className={`flex justify-between lg:w-[85%] py-4 md:p-9 w-[100%] items-center mx-auto md:flex-row flex-col lg:gap-3 gap-5 `}>
        <div className="footer_links flex sm:w-[80%] md:w-[50%] lg:w-[90%] md:p-3 sm:justify-between sm:flex-row flex-col items-center sm:items-start gap-7 ">
              {
                data.map((item,index)=>{
                    const {links} = item
                    // console.log(links)
                  return <div className={`footer_items flex flex-col gap-y-3 sm:py-3 items-center ${color} `} >
                         <h3 className='font-bold'>{item.head}</h3>
                         <div className="allLinks flex flex-col gap-3 items-center sm:items-start">
                           {
                           links.map((linkName,key)=>(
                              <Link >{linkName}</Link>
                           ))
                         }
                         </div>
                        
                  </div>
})
              }
        </div>
        <div className="footerImage mx-auto w-[80%] sm:w-[60%] md:w-[30%] lg:w-[40%]">
           <img className=' mx-auto' src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
        </div>
     </div>
     <div className="footer_below flex justify-between lg:w-[85%] mx-auto w-[100%] py-2 items-center sm:flex-row flex-col gap-4">
           <div className={`footer_name flex gap-4 ${color} items-center sm:flex-row flex-col`}>
              <h3 className='font-bold text-2xl'>ecommerce</h3>
              <div className="weblink flex gap-2 items-center">
                 <p>© 2023 E-bharat — </p>
              <Link>www.abc.com</Link>
              </div>
             
           </div>
           <div className={`foo_icon flex gap-2 ${color} items-center`}>
           <FaTwitterSquare />
           <FaFacebook />
           <FaInstagramSquare />
           <FaLinkedin />
           </div>
     </div>
    </div>
    
  )
}

export default Footer
