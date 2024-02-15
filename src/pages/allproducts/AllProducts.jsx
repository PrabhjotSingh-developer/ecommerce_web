import React from 'react'
import { useContext } from 'react'
import MyContext from '../../context/data/myContext'
const AllProducts = () => {
    const {products} = useContext(MyContext)
    console.log(products)
  return (
    <div>
         hello g
    </div>
  )
}

export default AllProducts
