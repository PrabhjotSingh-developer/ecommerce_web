import React from 'react'
import { IoBag } from "react-icons/io5";
import { FaTruck } from "react-icons/fa6";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { useContext } from 'react';
import MyContext from '../../context/data/myContext';
const data = [
    {
        icon:<IoBag />,
        heading:"Premium Tshirts",
        para:"Our T-Shirts are 100% made of cotton."
    },
    {
        icon:<FaTruck />,
        heading:"Free Shipping",
        para:"We ship all over india for FREE"
    },
    {
        icon:<HiOutlineCurrencyRupee />,
        heading:"Exciting Offers",
        para:"We provide amazing offers & discounts"
    }]
const Track = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const color = mode === 'light' ? '' :'text-white'
  const background_color = mode === 'light' ? 'bg-white':'bg-[#3e4042]'
  return (
    <div className={`main_track ${mode==='light'?'bg-[#f3f4f6]':''}`}>
       <div className={`w-[95%] md:w-[80%] mx-auto track_sec flex gap-9 justify-center flex-wrap lg:justify-evenly py-[6rem] ${color} ${mode==='light'?'bg-[#f3f4f6]':''}`}>
          {
            data.map((item)=>(
              <div className={`track_item flex flex-col gap-3 items-center border p-8 rounded-lg ${background_color} w-[90%] lg:w-[auto]`}>
                      <span className='text-3xl'>{item.icon}</span>
                     <h2 className='font-semibold'>{item.heading}</h2>
                     <p>{item.para}</p>
              </div>
            ))
          }
      </div>
    </div>
   
  )
}

export default Track
