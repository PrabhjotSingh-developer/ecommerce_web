import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Cart,
  Order,
  Dashboard,
  NoPage,
  Login,
  Signup,
  ProductInfo,
  AddProduct,
  UpdateProduct,
} from "./pages/index.js";
import MyState from "./context/data/myState.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <MyState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProduct />
              </ProtectedRouteForAdmin>
            }
          />

          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </MyState>
    </Router>
  );
}

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) return children;
  else return <Navigate to={"/login"} />;
};

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if ((admin.user.email = "prabjot@gmail.com")) return children;
  else return <Navigate to={"/login"} />;
};
