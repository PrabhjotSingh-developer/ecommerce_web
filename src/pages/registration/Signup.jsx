import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig.jsx';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../components/loader/Loader.jsx';
const Signup = () => {
      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("")
      const context = useContext(MyContext)
      const {loading,setLoading} = context
      const signup = async(e) =>{
            e.preventDefault()
            setLoading(true)
            if(name==="" || email === "" || password ==="")
            {
                   return toast.error("All field are required")
            }
            try {
                  const users = await createUserWithEmailAndPassword(auth,email,password);
                   var user = {
                        name:name,
                        uid:users.user.uid,
                        email:users.user.email,
                        time:Timestamp.now()
                   }
                   const userRef = collection(fireDB,"users")
                   await addDoc(userRef,user)
                   toast.success("Signup successful")
                   setName("")
                   setEmail("")
                   setPassword("")
                   setLoading(false)
            } catch (error) {
                  toast.error("User cannot created")
                  setLoading(false)
            }
      }
    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader/>}
               <div className="login_container bg-gray-800  w-[95%] md:w-[70%] lg:w-[50%]  flex flex-col items-center rounded-lg py-10 gap-5">
                <h1 className='text-white text-3xl '>Sign up</h1>
                <form className='flex flex-col gap-6  justify-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto'>
                         <input type="text" name="" value={name} onChange={(e)=>setName(e.target.value)} className='border outline-none bg-gray-600 px-2 py-2 text-white rounded-lg' placeholder='Name' id="" />
                         <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} className='border outline-none bg-gray-600 px-2 py-2 text-white rounded-lg' placeholder='email' id="" />
                         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className='border outline-none bg-gray-600 px-2 py-2 text-white  rounded-lg' placeholder='Password' name="" id="" />     
                         <input type="submit" onClick={signup} className='bg-pink-600 px-3 text-white py-2 cursor-pointer  rounded-lg' value="Sign up" />
              </form>
                <div className="for_newacc">
                      <span className='text-white '> Have an account ? <Link className='text-pink-600' to={"/login"}>Login</Link></span>
                </div>
               </div>
        </div>
      )
}

export default Signup
