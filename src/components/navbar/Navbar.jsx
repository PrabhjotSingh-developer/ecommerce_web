import React, { useState } from "react";
import MyContext from "../../context/data/myContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
const NavLink = (props) =>{
      console.log(props)
      return (
            <ul className={` ${props.className}`}>
            <li>
              <Link>All Products</Link>
            </li>
            <li>
              <Link>Order</Link>
            </li>
            <li>
              <Link>Admin</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
            <li>
              <Link>India</Link>
            </li>
          </ul>
      )
}
const Navbar = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;
  const [mobileMenu,setMobileMenu] = useState(false);
  const color = mode === 'light' ? '' :'text-white'
  const background_color = mode === 'light' ? 'bg-[#f3f4f6]':'bg-[#282C34]' 
  function dropdownMenu()
  {
          setMobileMenu(!mobileMenu)
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
          <h3 className={`font-1rem font-[800] ${color}`}>Ecommerce</h3>
              </div>
            <div className="links flex items-center gap-8">
           <NavLink className={`hidden gap-4 items-center sm:flex ${color}` }/>
            <ul className={`flex gap-3 items-center justify-between ${color}`}>
              <li>
               <IoSunny onClick={toggleMode}/>
              </li>
              <li>
                  <Link className="flex items-center">
                      <IoCartOutline /> 0{" "}
                  </Link>
              </li>
          </ul>
              </div>
        </div>
     
        <div className={`mobile_sidebar sm:hidden ${background_color}`}>
             <NavLink className={`absolute top-[63px] w-[100%] gap-4 flex flex-col p-6  ${color} ${background_color} ${mobileMenu?'left-0 transition-all h-[100vh]':'left-[-100%] transition-all'} `}/>
        </div>
      </nav>
     
    </header>
  );
};

export default Navbar;
