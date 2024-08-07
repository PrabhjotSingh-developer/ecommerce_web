import React, { useState} from "react";
import MyContext from "../../context/data/myContext.jsx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify'

const NavLink = (props) =>{
  const context = useContext(MyContext);
  const {getProductData} = context;
  const navigate = useNavigate()
      function logout()
      {
        localStorage.clear('user');
        toast.success('logout Successful')
        navigate("/")
        getProductData()
      }
      const user = JSON.parse( localStorage.getItem('user'))
      
      return (
            <ul className={` ${props.className}`}>
              <li>
                 <Link to={"/"}>Home</Link>
              </li>
            <li>
              <Link to="/allproducts"> All Products</Link>
            </li>
            
              { user!=null &&
                <li>
              <Link to={"/order"}>Order</Link> </li>
              }
           
            { user?.user?.email === "prabhjotsingh0001@gmail.com" &&
              <li>
              <Link to={"/dashboard"}>Admin</Link>
              </li>
            }
            <li>
              {
                user === null ? <Link to={"/login"}>Login</Link>  :<Link onClick={logout} to="/">Logout</Link>
              }
            </li>
           
          </ul>
      )
}
const Navbar = () => {
  const cartItems = useSelector((state)=>state.cart);

  const context = useContext(MyContext);
  const { mode, toggleMode ,mobileBar,setMobileBar} = context;
 
  const color = mode === 'light' ? '' :'text-white'
  const background_color = mode === 'light' ? 'bg-[#f3f4f6]':'bg-[#282C34]' 
  function dropdownMenu()
  {
          setMobileBar(!mobileBar)
  }
  return (
    <header className="navbar  w-[100%]">
      <div
        className={`upper_nav  text-white  ${mode === 'dark' ?('bg-[#3e4042]'):('bg-pink-600') }`}
      >
        <p className="text-center py-4 font-[600]">
          Get free delivery on orders over ₹300
        </p>
      </div>
      <nav className={` px-4 py-4 relative w-[100%]  ${color,background_color} `}>
        <div className="main_menu flex justify-between items-center w-[100%] mx-auto">
             <div className="logo flex items-center gap-4">
           <div className="side_bar sm:hidden bg-gray-200 p-2  rounded">
                <GiHamburgerMenu className={`cursor-pointer `} onClick={dropdownMenu}/>
           </div>
           <Link to="/" > <h3 className={`text-[1.2rem] font-[700] ${color}`}>Cartify</h3></Link> 
              </div>
            <div className="links flex items-center gap-8">
           <NavLink className={`hidden gap-4 items-center sm:flex ${color}` }/>
            <ul className={`flex gap-3 items-center justify-between ${color}`}>
              <li>
               <IoSunny onClick={toggleMode}/>
              </li>
              <li>
                  <Link to="/cart" className="flex items-center">
                      <IoCartOutline /> {cartItems.length }{" "}
                  </Link>
              </li>
          </ul>
              </div>
        </div>
     
        <div className={`mobile_sidebar sm:hidden ${background_color} `}>
             <NavLink className={`absolute top-[63px] w-[100%] gap-4 flex flex-col p-6 z-40 ${color} ${background_color} ${mobileBar?'left-0 transition-all h-[95vh]':'left-[-100%] transition-all'} `}/>
        </div>
      </nav>
     
    </header>
  );
};

export default Navbar;
