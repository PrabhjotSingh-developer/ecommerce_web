import React, { useEffect } from 'react'
import { useState } from 'react'
import MyContext from './myContext.jsx'
import {toast} from 'react-toastify'
import { Timestamp,addDoc,collection, onSnapshot, orderBy, query } from 'firebase/firestore'
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
       const productRef = collection(fireDB,'product')
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
  const getProductData = async() =>{
    setLoading(true);
    try {
    
       const q =  query(collection(fireDB,'product'),orderBy("time"));
       const data = onSnapshot(q,(QuerySnapshot)=>{
         let productArray = [];
    
          console.log(QuerySnapshot)
          QuerySnapshot.forEach((doc)=>{ 
           console.log(doc.data())
            productArray.push({...doc.data(),id:doc.id});
          })
          setProducts(productArray);
          console.log(productArray)
          setLoading(false)
        })
       console.log(data)
        return ()=>data

    } catch (error) {
       console.log(error)
       setLoading(false)
    }
  }
  useEffect(()=>{
         getProductData()
  },[])
  return (
    <MyContext.Provider value={{mode,toggleMode,loading,setLoading,product,setProduct,addProducts,products}}>
         {props.children}
    </MyContext.Provider>
  )
}

export default MyState
