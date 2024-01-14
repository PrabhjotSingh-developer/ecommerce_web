import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
const Home = () => {
  const context = useContext(MyContext)
  // console.log(context)
  

  return (
    <Layout>
         <HeroSection/>
    </Layout>
  )
}

export default Home
