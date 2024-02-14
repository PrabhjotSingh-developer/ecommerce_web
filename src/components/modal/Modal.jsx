import React from 'react'
import MyContext from '../../context/data/myContext';
import { useContext } from 'react';
import { zoomIn } from 'react-animations';

import styled,{keyframes} from 'styled-components';
const Modal = ({detail,setDetail,closeModal,buyNow}) => {
  const {name,phoneNumber,pincode,address} = detail
   console.log(buyNow)
    const context = useContext(MyContext)
  const { mode } = context;
  const bg_color= mode === 'dark'?'bg-gray-800 text-white':'bg-white '
  const bounceAnimation = keyframes`${zoomIn}`;
  const BouncyDiv = styled.div` animation: 1s ${bounceAnimation}`;

  return (

     <div className={` w-[90%] md:w-[60%] lg:w-[40%] flex item-center justify-center mx-auto ${bg_color} `}>
            <form action="" className={`flex flex-col w-[100%] gap-2 p-7 py-12 rounded-xl `} >
                <label htmlFor="name" className={`${mode==='dark'?'text-white':''}`}>Enter Full Name</label>
                   <input type="text" name="" value={name} onChange={(e)=>setDetail({...detail,name:e.target.value})}  id="name"  className={`border outline-none mb-3 py-1 border-black rounded-md px-2 ${mode==='dark'?'bg-gray-600':''}`}/>
                   <label htmlFor="address" className={`${mode==='dark'?'text-white':''}`}>Enter Full Address</label>
                   <input type="text" name="" value={address} onChange={(e)=>setDetail({...detail,address:e.target.value})} id="address"  className={`border outline-none mb-3 py-1 border-black rounded-md px-2 ${mode==='dark'?'bg-gray-600':''}`}/>
                   <label htmlFor="pincode" className={`${mode==='dark'?'text-white':''}`}>Enter Pincode</label>
                   <input type="text" name=""  value= {pincode} onChange={(e)=>setDetail({...detail,pincode:e.target.value})}  id="pincode"  className={`border outline-none mb-3 py-1 border-black rounded-md px-2 ${mode==='dark'?'bg-gray-600':''}`}/>
                   <label htmlFor="mobile" className={`${mode==='dark'?'text-white':''}`}>Enter Mobile Number</label>
                   <input type="text" name="" value={phoneNumber} onChange={(e)=>setDetail({...detail,phoneNumber:e.target.value})} id="mobile"  className={`border outline-none mb-3 py-1 border-black rounded-md px-2 ${mode==='dark'?'bg-gray-600':''}`}/>
                   <button value="Submit" onClick={(e)=>buyNow(e)}  className='bg-pink-600 text-white py-2 w-[fit-content] px-8 rounded-xl'>Sumbit </button>
                   
            </form>
            <span onClick={closeModal}>X</span>
    </div>
   
  )
}

export default Modal
