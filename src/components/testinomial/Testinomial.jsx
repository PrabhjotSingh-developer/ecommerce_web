import React from 'react'
import { useContext,useState } from 'react';
import MyContext from '../../context/data/myContext';

const data = [
    {
        desc:"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        name:"KAMAL NAYAN UPADHYAY",
        workAs:"Senior Product Designer"
    },
    {
        desc:"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        name:"REACT JS",
        workAs:"UI Develeoper"
    },
    {
        desc:"Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
        name:"REACT JS",
        workAs:"CTO"
    },

]
const Testinomial = () => {
    const context = useContext(MyContext);
     const { mode, toggleMode } = context;
      const [mobileMenu,setMobileMenu] = useState(false);
     const color = mode === 'light' ? '' :'text-white'
     const background_color = mode === 'light' ? 'bg-[#f3f4f6]':'bg-[#282C34]' 
   return (
    <div>
        <div className={`testinomial_heading ${background_color} py-8`}>
            <div className="flex flex-col items-center">
             <h2 className={`font-bold text-xl ${color}`}>Testimonial</h2>
              <h2 className={`font-semibold text-xl ${color}`}>What our <span className='text-pink-600'>customers</span>  are saying</h2>
            </div>
            <div className="testinomial_card flex w-[95%] md:w-[80%] gap-5 mx-auto mt-8 flex-wrap flex-col justify-center sm:flex-row ">
                {
                    data.map((item,index)=>(
                         <div className={`testinomial_items flex items-center flex-col w-[90%] mx-auto lg:w-[32%] p-4 gap-4 ${color}`} key={index}>
                          <div className="w-[100px] h-[100px] bg-pink-600 rounded-full">

                          </div>
                          <div className="test_content flex gap-4 flex-col items-center">
                               <p className='text-center'>{item.desc}</p>
                               <p className='w-[30px] h-[4px] bg-pink-600 mx-auto'></p>
                               <h3 className='font-bold text-center'>{item.name}</h3>
                               <p>{item.workAs}</p>
                          </div>
                    </div>
                    ))
                }
                   
            </div>
        </div>
    </div>
  )
}

export default Testinomial
