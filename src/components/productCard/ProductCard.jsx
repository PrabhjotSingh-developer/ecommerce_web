import React from 'react'
import MyContext from '../../context/data/myContext';
import { useContext } from 'react';
const ProductCard = () => {
    const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const color = mode === 'light' ? '' :'text-white'
  const background_color = mode === 'light' ? 'bg-[#f3f4f6]':'bg-[#282C34]' 
  const arr = [1,2,3,4]
  return (
    <div className={`mt-5 ${background_color}`}>
         <div className={`productHeading w-[95%]  md:w-[80%] p-6 mx-auto ${color}`}>
                 <h2 className='font-semibold text-3xl'>Our Latest Collection</h2>
                 <p className=' w-[20%] md:w-[10%]  mt-2 h-[4px] bg-pink-600'></p>
         </div>
         <div className="productCards grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-10 w-[97%] md:w-[85%] sm:p-5 p-3 lg:p-9 mx-auto">
            {
                 arr.map((item)=>(
                  <div className="productItem w-[100%] p-5 border rounded-lg">
               <div className="product_img w-[100%] p-2 h-[300px] bg-red-500 hover:scale-105 transition-all">
                           <img src="" className=' ' alt="" />
                      </div>
                     <div className={`product_content px-2 flex flex-col gap-3 py-4 ${color}`}>
                             <p>E-bharat</p>
                             <h2 className='font-semibold text-xl'>Product heading {item}</h2>
                             <h4 className='font-semibold'>Price</h4>
                             <button className='bg-pink-600 px-4 py-2 rounded-lg text-white font-semibold '>Add to cart</button>
                     </div>

               </div>
                 ))
            }
             
         </div>
    </div>
  )
}

export default ProductCard
