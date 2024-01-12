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
  const background_color = mode === 'light' ? ' ':'rgb(40, 44, 52)' 
  function dropdownMenu()
  {
          setMobileMenu(!mobileMenu)
  }
  return (
    <header className="navbar">
      <div
        className={`upper_nav bg-pink-600 text-white  ${background_color }`}
      >
        <p className="text-center py-4 font-[600]">
          Get free delivery on orders over ₹300
        </p>
      </div>
      <nav className={`flex justify-between px-4 py-3 mx-auto relative ${color,background_color}`}>

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
      
      </nav>
       <div className={`mobile_sidebar w-[100%] sm:hidden ${mobileMenu ?  'h-[100vh]': ''}    ${color,background_color}`}>
             <NavLink className={`absolute top-[100px] w-[100%]  gap-4 flex flex-col p-5 ${color} ${mobileMenu?'left-0 transition-all':'left-[-100%] transition-all'} `}/>
        </div>
    </header>
  );
};

export default Navbar;
