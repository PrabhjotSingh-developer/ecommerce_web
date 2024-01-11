import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'
const Order = () => {
  const context = useContext(MyContext)
  // const {name,rollno} = context
  return (
    <Layout>
       order
       {/* <h1>{name} = {rollno}</h1> */}
    </Layout>
  )
}

export default Order
