import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import MyContext from '../../context/data/myContext';

const Filter = () => {
    const {mode} = useContext(MyContext)
    const bg_color = (mode === 'light')?'bg-[#f3f4f6] text-black':'bg-[#404246] text-white';
    
  return (
    <div className={`${bg_color} w-[80%] mx-auto p-8 h-[100vh]`}>
         <div className={`search_bar flex items-center gap-2 justify-center bg-white mx-auto mb-4 py-4`}>
                <IoSearch className="cursor-pointer"/>
                <input type="text" placeholder='Search' className='w-[90%]  outline-none'/>
         </div>
         <div className="filter_sec">
               <div className="buttons_filter py-4 flex justify-between">
                     <button>Filters</button>
                     <button>Reset Filters</button>
               </div>
               <div className="select_items flex gap-5">
                      <select name="" id="" className={`p-2 outline-none rounded-lg w-[200px] ${mode ==='light'?'bg-white':'bg-black text-white'}`}>
                            <option value="" >one</option>
                            <option value="">two</option>
                            <option value="">three</option>
                      </select>
                      <select name="" id="" className={`p-2 outline-none rounded-lg w-[200px] ${mode ==='light'?'bg-white':'bg-black text-white'}`}>
                            <option value="">one</option>
                            <option value="">two</option>
                            <option value="">three</option>
                      </select>
               </div>
         </div>
    </div>
  )
}

export default Filter
