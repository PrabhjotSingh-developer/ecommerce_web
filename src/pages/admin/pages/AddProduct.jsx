import React, { useContext } from 'react'
import MyContext from '../../../context/data/myContext'
const AddProduct = () => {
   const context = useContext(MyContext)
  
   const {product,setProduct,addProducts} = context
//    console.log(product)
    return (
        <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                            value={product.title}
                            onChange={(e)=>setProduct({...product,title:e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                            value={product.price}
                            onChange={(e)=>setProduct({...product,price:e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                            value={product.imageUrl}
                            onChange={(e)=>setProduct({...product,imageUrl:e.target.value})}
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                            value={product.category}
                            onChange={(e)=>setProduct({...product,category:e.target.value})}
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                             value={product.description}
                            onChange={(e)=>setProduct({...product,description:e.target.value})}>
                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg' onClick={addProducts}>
                            Add Product
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
    
  )
}

export default AddProduct
