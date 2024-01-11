import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
const Home = () => {
  const context = useContext(MyContext)
  // console.log(context)
  

  return (
    <Layout>
        {/* <h1>Name = {name}</h1> */}
        {/* <h2>Rollno = {rollno}</h2> */}
    </Layout>
  )
}

export default Home
