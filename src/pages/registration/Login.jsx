import React from 'react'
import { Link, json } from 'react-router-dom'
import MyContext from '../../context/data/myContext'
import { useContext,useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Loader from '../../components/loader/Loader.jsx'
import {auth} from '../../firebase/FirebaseConfig.jsx'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const context = useContext(MyContext);
  const {loading,setLoading} = context;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
async function login(e)
 {
    e.preventDefault();
    if(email === "" )
       return toast.error("Please enter email")   
    if(password === "")
      return  toast.error("Please enter password")
    
      setLoading(true)
      try {
        const result = await signInWithEmailAndPassword(auth,email,password);
        console.log(result  )
        localStorage.setItem('user',JSON.stringify(result));
        toast.success('Signin Successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
       navigate("/")
        setLoading(false);

      } catch (error) {
        
        toast.error("Invalid password or email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setLoading(false);
      }

 }
  return (
    
    <div className='flex justify-center items-center h-screen'>
      {loading &&
       <Loader/>}
           <div className="login_container bg-gray-800  w-[95%] md:w-[70%] lg:w-[50%]  flex flex-col items-center rounded-lg py-10 gap-5">
            <h1 className='text-white text-3xl '> Login</h1>
            <form className='flex flex-col gap-6  justify-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto'>

                     <input type="email" name="" value={email} onChange={(e)=>setEmail(e.target.value)} className='border outline-none bg-gray-600 px-2 py-2 text-white rounded-lg' placeholder='email' id="" />
                     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className='border outline-none bg-gray-600 px-2 py-2 text-white  rounded-lg' placeholder='Password' name="" id="" />     
                     <input type="submit" onClick={login} className='bg-pink-600 px-3 text-white py-2 cursor-pointer  rounded-lg' value="login" />
          </form>
            <div className="for_newacc">
                  <span className='text-white '>Dont have an account ? <Link className='text-pink-600' to={"/signup"}> SignUp </Link></span>
            </div>
           </div>
    </div>
  )
}

export default Login
