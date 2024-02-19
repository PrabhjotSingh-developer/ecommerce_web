import React, { useEffect } from 'react'
import { useState } from 'react'
import MyContext from './myContext.jsx'
import {toast} from 'react-toastify'
import { Timestamp,addDoc,collection, deleteDoc, onSnapshot, orderBy, query, setDoc,doc, QuerySnapshot, getDocs } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig.jsx';

import { useNavigate } from 'react-router-dom'
const MyState = (props) => {
  const navigate = useNavigate()
  const [mode,setMode] = useState('light');
  const [loading,setLoading] = useState(false)
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17,24,39)"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "white"
     
    }
  }
  const [product,setProduct] = useState({
    title:null,
    price:null,
    imageUrl:null,
    category:null,
    time:Timestamp.now(),
    description:null,
    date: new Date().toLocaleString(
      "en-US",
      {
         month:"short",
         day:"2-digit",
         year:"numeric"
      }
    )
  })
  const addProducts = async()=>{
    if(product.title == null||product.price== null||product.imageUrl == null||product.category ==null ||product.description==null )
    {
      return toast.error("all fields are required")
    }
    setLoading(true)

    try {
       const productRef = collection(fireDB,'products')
       await addDoc(productRef,product)
       toast.success("Add Product successfully");
       getProductData()
       navigate("/dashboard")
       setLoading(false)
    } catch (error) {
       console.log(error)
       setLoading(false)
      
    }
    setProduct("")
  }
  const [products,setProducts] = useState([]);
  const getProductData = async () =>{
    setLoading(true);
    
    try {
      
       const q =  query(
        collection(fireDB,"products"),
        orderBy("time")  
         );
       const data = onSnapshot(q,(QuerySnapshot)=>{
         let productArray = [];
        
          QuerySnapshot.forEach((doc)=>{ 
            productArray.push({...doc.data(),id:doc.id});
          })
          localStorage.setItem('AllProductsData',JSON.stringify(productArray))
          setProducts(productArray);
          setLoading(false)
        })
       
        return data

    } catch (error) { 
       console.log(error)
       setLoading(false)
       throw error;
    }
  }

  const editHandle = (item)=>{
    setProduct(item);
  }
  // update product 
  const updateProduct = async(item)=>{
       setLoading(true);
       try {
           await setDoc(doc(fireDB,"products",product.id),product)
           toast.success("Product updated Successfully");
           getProductData();
           setLoading(false)
           navigate("/dashboard")
       } catch (error) {
        setLoading(false)
        toast.error("Product updated failed")
        console.log(error)
       }
  }
  const deleteProduct = async(item) =>{
    setLoading(true)
    try {
       await deleteDoc(doc(fireDB,"products",item.id))
       toast.success("Product deleted successfully")
       setLoading(false)
       getProductData();
       navigate("/dashboard")
    } catch (error) {
      setLoading(false)
      console.log(error)
       toast.error("! Product not deleted");
       navigate("/dashboard")

      //  console.log("Product not deleted")
    }
  }

 
  // Order details from database
  const [order,setOrder] = useState([])
  const getOrderData = async() =>{
      setLoading(true);
      try {
        const result =await getDocs(collection(fireDB,"order"),orderBy("time"))
        let orderArr= []
        result.forEach((doc)=>{
           orderArr.push(doc.data())
          })
          console.log(orderArr)
          setOrder(orderArr)
          setLoading(false)
        
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
  }
  // userData 
  const [userData,setUserData] = useState([])
  const getUserData = async() =>{
    setLoading(true)
      try {
         const result = await getDocs(collection(fireDB,"users"))
         const userArray = [];
         result.forEach((doc)=>{
           userArray.push(doc.data())
          
          })
          //  console.log(userArray)
          setUserData(userArray)
          setLoading(false) 
          
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
         getProductData()
         getOrderData()
         getUserData()
  },[])
  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,product,setProduct,addProducts,products,editHandle,updateProduct,deleteProduct,order,getOrderData,userData,  getProductData}}>
         {props.children}
    </MyContext.Provider>
  )
}

export default MyState
