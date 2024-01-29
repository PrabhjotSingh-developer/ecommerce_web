import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
               <div className="login_container bg-gray-800  w-[95%] md:w-[70%] lg:w-[50%]  flex flex-col items-center rounded-lg py-10 gap-5">
                <h1 className='text-white text-3xl '>Sign up</h1>
                <form className='flex flex-col gap-6  justify-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto'>
                         <input type="text" name="" className='border outline-none bg-gray-600 px-2 py-2 text-white rounded-lg' placeholder='Name' id="" />
                         <input type="email" name="" className='border outline-none bg-gray-600 px-2 py-2 text-white rounded-lg' placeholder='email' id="" />
                         <input type="password"  className='border outline-none bg-gray-600 px-2 py-2 text-white  rounded-lg' placeholder='Password' name="" id="" />     
                         <input type="submit" className='bg-pink-600 px-3 text-white py-2 cursor-pointer  rounded-lg' value="Sign up" />
              </form>
                <div className="for_newacc">
                      <span className='text-white '> Have an account ? <Link className='text-pink-600' to={"/login"}>Login</Link></span>
                </div>
               </div>
        </div>
      )
}

export default Signup
