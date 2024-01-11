import React from 'react'
import MyContext from '../../context/data/myContext.jsx';
import { useContext } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const context = useContext(MyContext);
  const {mode,toggleMode}  = context
 
  
 
  return (
    <header className='navbar'>
         <div className={`upper_nav bg-pink-600 text-white  ${mode === 'light' ? 'bg-black' :  'bg-red-400'}`}>
               <p className='text-center py-4 font-[600]'>Get free delivery on orders over ₹300</p>
         </div>
         <nav className='flex justify-between px-4 py-3'>
              <div className="logo">
                   <h3 className='font-1rem font-[800]'>Ecommerce</h3>
              </div>
              <div className="links ">
                   <ul className='flex gap-2 '>
                        <li>
                              <Link >All Products</Link>
                        </li>
                        <li>
                              <Link >Order</Link>
                        </li>
                        <li>
                              <Link >Admin</Link>
                        </li>
                        <li>
                              <Link >Logout</Link>
                        </li>
                        <li>
                              <Link >India</Link>
                        </li>
                   </ul>
              </div>
         </nav>
    </header>
  )
}

export default Navbar
