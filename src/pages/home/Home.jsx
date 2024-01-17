import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Filter from '../../components/filter/Filter.jsx'
import ProductCard from '../../components/productCard/ProductCard.jsx'
const Home = () => {
  const context = useContext(MyContext)
  // console.log(context)
  

  return (
    <Layout>
         <HeroSection/>
         <Filter/>
         <ProductCard/>
    </Layout>
  )
}

export default Home
