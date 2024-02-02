import React from 'react'
import { CiHeart, CiZoomIn } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart as reduxAddToCart, increment } from '../../app/slice/cartSlice';
import { toast } from 'react-toastify';
import useAuthenticate from "../../hooks/useAuthenticate";
export default function Product({product}) {
const dispatch = useDispatch()
const authenticate = useAuthenticate()
const reduxStore = useSelector((store) => store);
const user = reduxStore.user.value;


const handleLoginRequired = (event) => {
  event.preventDefault()
  authenticate(() =>{
    dispatch(reduxAddToCart(product));
    alert("added to cart");
  })
}


  return <>

  <div className="group h-[361px] w-[270px] drop-shadow-lg ">
  <Link to={`/products/${product._id}`}>
                <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
                  <img src={product.image} alt="" className="h-[178px] w-[178px] " />
                </div>
                <div className="hidden absolute left-0  top-0  gap-3 pl-3 pt-2 group-hover:flex justify-center">
                  
                <span onClick={handleLoginRequired}
             className="bg-primary-light h-[30px] w-[30px] flex justify-center items-center rounded-full scale-0 group-hover:scale-100 ">
                  <FaShoppingCart className="text-primary" />
                  </span>

                  <span className=" h-[30px] w-[30px] flex justify-center items-center scale-0 group-hover:scale-100 ">
                  <CiHeart className="text-blue-700" />
          
                  </span>
                  <span className=" h-[30px] w-[30px] flex justify-center items-center scale-0 group-hover:scale-100 ">
                  <CiZoomIn className="text-blue-700" />
                  
                  </span>

                  <button className=" mt-48 h-[29px] w-[94px] border border-blue-700 bg-green-400 text-center text-[12px] text-white">
                    View Details
                  </button> 

                </div>
                <div className=" group-hover:bg-[#2F1AC4] pt-3">
                  <p className="font-Lato text-[18px] font-bold text-secondary group-hover:text-white">
                    {" "}
                    {product.name}{" "}
                  </p>
                  <p className="font-Josefin text-primary-dark group-hover:text-white">
                    {" "}
                    Code - Y523201{" "}
                  </p>
                  <p className="font-Lato text-[14px] text-primary-dark group-hover:text-white">
                    {" "}
                    {product.price}{" "}
                  </p>
                </div>
                </Link>
              </div>
  


  
              </>
}
