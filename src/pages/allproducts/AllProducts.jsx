import React, { useEffect } from "react";
import { useContext ,useState} from "react";
import Loader from "../../components/loader/Loader";
import MyContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const {loading} = useContext(MyContext)
 
  const [showPro,setShowPro] = useState([])
  const [viewData,setViewData] = useState([])
  const [selectedValue,setSelectedValue] = useState("")
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
  useEffect(()=>{
      let data = JSON.parse(localStorage.getItem('AllProductsData'))
      setShowPro(data)
      setViewData(data)
  },[])
  return (
    <Layout>
      <div className="flex flex-col">
         <div className="innerfilter flex justify-center items-center w-[100%] ">
            <label htmlFor="Category" className="mx-4">Category</label>
            <select name="Category" defaultChecked="All"  className="mr-5" id="" onChange={filterProduct}>
                <option value="All" >All</option>
                <option value="Laptop" >Laptop</option>
                <option value="headphones" >Airdopes</option>
                <option value="Watches" >Watches</option>
             </select>
            <label htmlFor="Price"  className="mx-4">Price</label>

             <select name="Price" className="mr-5" id="" value={selectedValue} onChange={filterPrice}>
                <option value="">Select by Price</option>
                <option value="low">Low to High</option>
                <option value="high"> High to Low</option>
             </select>
         </div>
          <div className="allProducts grid gap-10 lg:grid-cols-3 md:grid-cols-2 place-content-center mt-20 w-[80%] mx-auto ">
               {
                  loading ? <Loader/>:
                  (
                     
                     showPro?.map((item,index)=>{
                      if(item.title!=undefined)
                      {
                         
                       return   <div
                       className="productItem w-[90%] p-5 border rounded-lg gap-5 flex flex-col mx-auto"
                       key={index}
                     >
                       <Link to={`/productinfo/:${item.id}`}>
                         <div className="product_img w-[100%] p-2  ">
                           <img src={item?.imageUrl} className=" " alt="" />
                         </div>
                       </Link>
                       <div
                         className={`product_content px-2 flex flex-col gap-3 py-4 `}
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
