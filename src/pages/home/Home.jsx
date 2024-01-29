import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Filter from '../../components/filter/Filter.jsx'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import Track from '../../components/track/Track.jsx'
import Testinomial from '../../components/testinomial/Testinomial.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice.js'
const Home = () => {
  const context = useContext(MyContext)
  // console.log(context)
  
const dispatch = useDispatch()
const cartItem = useSelector((state)=>state.cart)
console.log(cartItem)
const addCart = () =>{
  dispatch(addToCart("shirt"));
}
const deleteCart = () =>{
  dispatch(deleteFromCart('shirt'))
}
  return (
    <Layout>
      <div className="flex gap-2">
          <button onClick={()=>addCart()}>add</button>
          <button onClick={()=>deleteCart()}>delete</button>
      </div>
         <HeroSection/>
         <Filter/>
         <ProductCard/>
         <Track/>
         <Testinomial/>
    </Layout>
  )
}

export default Home
