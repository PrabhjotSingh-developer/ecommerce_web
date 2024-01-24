import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import {Home,Cart,Order, Dashboard, NoPage,Login,Signup} from "./pages/index.js"
import MyState from "./context/data/myState.jsx";

function App() {
 
  return (
   < MyState>
   <Router>
           <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/order" element={<Order/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup/>}/>

                  <Route path="/*" element={<NoPage/>}/>
                  

           </Routes>
   </Router>
   </MyState>
  )
}

export default App
