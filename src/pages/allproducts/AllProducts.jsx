import React, { useEffect } from "react";
import { useContext ,useState} from "react";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const {loading} = useContext(MyContext)
  const [selectedValue,setSelectedValue] = useState('All')
  const [showPro,setShowPro] = useState([])
  function filterProduct(e)
  {
    let data = JSON.parse(localStorage.getItem('AllProductsData'))
    // console.log(data)
    setShowPro(data)
    let arr = []
    let f = e.target.value
    console.log(f)
    setSelectedValue(f)
    console.log(selectedValue)
    // console.log(f)
      if(selectedValue === "All")
          return
       
         arr = showPro.filter((item)=>item.category === selectedValue)
         console.log(arr)
         setShowPro(arr)
        
       
       
      
  }
  useEffect(()=>{
      let data = JSON.parse(localStorage.getItem('AllProductsData'))
      setShowPro(data)
  },[])
  return (
    <Layout>
      <div className="flex ">
         <div className="innerfilter flex justify-center items-center w-[100%] ">
            <label htmlFor="Category" className="mx-4">Category</label>
            <select name="Category" defaultChecked="All"  className="mr-5" id="" onChange={filterProduct}>
                <option value="All" >All</option>
                <option value="Laptop" >Laptop</option>
                <option value="headphones" >Airdopes</option>
                <option value="Watches" >Watches</option>
             </select>
            <label htmlFor="Price"  className="mx-4">Price</label>

             <select name="Price" className="mr-5" id="" >
                <option value="">Low to High</option>
                <option value=""> High to Low</option>
             </select>
         </div>
          <div className="allProducts">
               {
                  loading ? <Loader/>:
                  (
                     showPro.map((item,index)=>{
                       return  <div
                       className="productItem w-[100%] p-5 border rounded-lg relative "
                       key={index}
                     >
                       <Link to={`/productinfo/:${item.id}`}>
                         <div className="product_img w-[100%] p-2 h-[300px] hover:scale-105 transition-all">
                           <img src={item.imageUrl} className=" " alt="" />
                         </div>
                       </Link>
                       <div
                         className={`product_content px-2 flex flex-col gap-3 py-4 `}
                       >
                         <Link to={`/productinfo/:${item.id}`}>
                           <p>E-bharat</p>
                           <h2 className="font-semibold text-xl">
                             {" "}
                             {item.title.substring(0, 10)}
                           </h2>
                         </Link>
                         <h4 className="font-semibold">₹{item.price}</h4>
                         <button
                           className="bg-pink-600 px-4 py-2 mb-4 rounded-lg text-white font-semibold "
                           
                         >
                           Add to cart
                         </button>
                       </div>
                     </div>
                     })
                   
                    
                  )  
                  
               }
          </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
