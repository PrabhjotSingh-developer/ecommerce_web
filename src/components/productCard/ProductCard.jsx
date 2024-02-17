import React, { useEffect } from "react";
import MyContext from "../../context/data/myContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import Loader from "../loader/Loader.jsx";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const context = useContext(MyContext);
  const { mode, toggleMode, products, loading, setLoading } = context;
  const color = mode === "light" ? "" : "text-white";
  const background_color = mode === "light" ? "bg-[#f3f4f6]" : "bg-[#282C34]";
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(loading);
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Added to Cart Successfully");
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className={`mt-5 ${background_color}`}>
      <div
        className={`productHeading w-[95%]  md:w-[80%] p-6 mx-auto ${color}`}
      >
        <h2 className="font-semibold text-3xl">Our Latest Collection</h2>
        <p className=" w-[20%] md:w-[10%]  mt-2 h-[4px] bg-pink-600"></p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="productCards grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-17 w-[97%] md:w-[85%] sm:p-5 p-3 lg:p-9 mx-auto">
          {products.map((item, index) => {
            if (index < 4)
              return (
                <div
                  className="productItem w-[100%] p-5 border rounded-lg relative "
                  key={index}
                >
                  <Link to={`/productinfo/:${item.id}`}>
                    <div className="product_img w-[100%] p-2 h-[300px] hover:scale-105 transition-all">
                      <img src={item.imageUrl} className=" " alt="" />
                    </div>
                  </Link>
                  <div
                    className={`product_content px-2 flex flex-col gap-3 py-4 ${color}`}
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
                      onClick={() => addCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
