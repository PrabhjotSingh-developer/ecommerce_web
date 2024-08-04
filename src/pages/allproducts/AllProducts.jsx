import React, { useEffect } from "react";
import { useContext ,useState} from "react";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify"
import "./allproduct.css"
const AllProducts = () => {
  let data = JSON.parse(localStorage.getItem('AllProductsData')) 

  const {loading,mode} = useContext(MyContext)
  const [showPro,setShowPro] = useState(data)
  const [viewData,setViewData] = useState(data)
  const [selectedValue,setSelectedValue] = useState("")
  const color = mode === "light" ? "" : "text-white";
  const background_color = mode === "light" ? "bg-[#f3f4f6]" : "bg-[#282C34]";
   const dispatch = useDispatch();
  function filterProduct(e)
  {
   
    let data = JSON.parse(localStorage.getItem('AllProductsData'))
    setShowPro(data)
    let arr = []
    let f = e.target.value
      if(f === "All")
        return
         arr = viewData.filter((item)=>item.category === f)
         setShowPro(arr)
      setSelectedValue("")
     
  }
  function filterPrice(e)
  {
    let arr = []
     

    let f = e.target.value
    console.log(f)
    if(f === "low")
    {
       arr =  showPro.sort((a,b)=>a.price - b.price)
       setSelectedValue("low")
    }
    else if(f==="high"){
      arr =  showPro.sort((a,b)=>b.price - a.price)
      setSelectedValue("high")
      
      
    }
  
    setShowPro([])
    setShowPro([...showPro,arr]) 
    
    // console.log(showPro)
    // setShowPro(arr)
  }
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to Cart Successfully");
  };
  useEffect(()=>{
      
  },[data])
  return (
    <Layout>
      <div className="flex flex-col py-4">
         <div className="innerfilter flex justify-center items-center gap-4  w-[100%] flex-row">
           <div className="select_state">
            <label htmlFor="Category" className={`mr-2 ${color}`}>Category</label>
            <select name="Category" defaultChecked="All"  className=" py-1"  id="" onChange={filterProduct}>
                <option value="All" >All</option>
                <option value="Laptop" >Laptop</option>
                <option value="headphones" >Airdopes</option>
                
             </select>
           </div>
            
           <div className="select_state">
            <label htmlFor="Price"  className={`md:ml-10 mr-2 ${color}`}>Price</label>
             <select name="Price" className=" py-1" id="" value={selectedValue} onChange={filterPrice}>
                <option value="">Select by Price</option>
                <option value="low">Low to High</option>
                <option value="high"> High to Low</option>
             </select>
             </div>
         </div>
          <div className="allProducts grid gap-10 lg:grid-cols-3 md:grid-cols-2 place-content-center py-20  md:w-[80%] mx-auto ">
               {
                  loading ? <Loader/>:
                  (
                     
                     showPro?.map((item,index)=>{
                      if(item.title!=undefined)
                      {
                         
                       return   <div
                       className="productItem w-[90%] md:w-[90%] p-5 border rounded-lg gap-5 flex flex-col mx-auto"
                       key={index}
                     >
                       <Link to={`/productinfo/:${item.id}`}>
                         <div className="product_img w-[100%] p-2  ">
                           <img src={item?.imageUrl} className=" " alt="" />
                         </div>
                       </Link>
                       <div
                         className={`product_content px-2 flex flex-col gap-3 py-4 ${color}`}
                       >
                         <Link to={`/productinfo/:${item.id}`}>
                           <p>E-bharat</p>
                           <h2 className="font-semibold text-xl">
                             {" "}
                             {item?.title?.substring(0, 10)}
                           </h2>
                         </Link>
                         <h4 className="font-semibold">₹{item.price}</h4>
                         <button
                           className="bg-pink-600 px-4 py-2 mb-4 rounded-lg text-white font-semibold "
                           onClick={()=>addCart(item)}
                         >
                           Add to cart
                         </button>
                       </div>
                     </div>
                      }
                     })
                   
                    
                  )  
                  
               }
          </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
