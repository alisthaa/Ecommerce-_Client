import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import {
  FaRegEnvelope,
  FaShoppingCart,
  FaSearch,
  FaAngleDown,
  FaRegUser,
  FaRegHeart,
  FaChevronDown,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import "../../index.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/slice/userSlice";
import BuyerComponent from "./BuyerComponent";
import ProtectedComponent from "./ProtectedComponent";

function Header() {
  const reduxStore = useSelector((store) => store);
  const user = reduxStore.user.value;
  const cart = reduxStore.cart.value;
  
  const navigate = useNavigate();
const dispatch = useDispatch()
  const [isMenuOpen,setIsMenuOpen]= useState(false);
  const handleLogout =()=>{
    dispatch(logout())
  }
  const toggleMenu = () => {
    // setIsMenuOpen(!isMenuOpen)
    setIsMenuOpen((prev) => !prev);
  };
  
  return (
    <>
      <header>
        <nav className="flex flex-wrap items-center justify-between h-auto md:h-11 bg-primary ">

          <ul className=" gap-6 container flex flex-col items-center  font-semibold  md:flex-row md:justify-between text-white">

      <div className="flex flex-col md:flex-row md:gap-10">
              <div className="flex items-center justify-center gap-2 ">
                     <li>
                  <FaRegEnvelope className="h-4 w-4" />
                    </li>
                      <li>
                        <a href=" " className="font-Josefin text-base font-semibold">
                       mhhasanul@gmail.com
                        </a>
                       </li>
                   </div>
                
              <div className="flex items-center justify-center gap-2 ">
                   <li>
                    {" "}
                    <IoMdCall className="h-4 w-4" />{" "}
                   </li>
                     <li>
                     {" "}
                     <a href="" className=" font-Josefin text-base">
                       (12345)67890
                      </a>{" "}
                   </li>
                </div> 
      </div>

    <div className=" flex flex-col md:flex-row md:ml-96 md:gap-6">
              <div className="flex items-center gap-2 font-Josefin font-semibold">
                <li className="">English</li>
                <li>
                  <FaAngleDown className="h-4 w-4" />{" "}
                </li>
              </div>

              <div className="flex items-center  gap-2 font-Josefin font-semibold">
                <li>USD</li>
                <li>
                  <FaAngleDown className="h-4 w-4" />{" "}
                </li>
              </div>
{user?(
  <>
  <div className="flex items-center font-Josefin font-semibold justify-center gap-2">

            <li>
            <BuyerComponent>cart({cart.length})</BuyerComponent>        
            </li>


               <li>{user.name} </li> 
               <li> &nbsp;</li>
               <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
               <li>
                  {" "}
                  <FaRegUser className="h-4 w-4" />{" "}
                </li>
                </div>  
  </>
):
<>
<div className="flex items-center  gap-2 font-Josefin font-semibold">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  {" "}
                  <FaRegUser className="h-4 w-4" />{" "}
                </li>
              </div>
</>}

              

            


              <div className="flex items-center justify-center gap-2 font-Josefin font-semibold">
                <li>WishList</li>
                <li>
                  {" "}
                  <FaRegHeart className="h-4 w-4" />
                </li>
              </div>

              <div className="flex items-center gap-2 font-Josefin font-semibold">
              <ProtectedComponent role="buyer">
                <li>
                  {" "}
                  <FaShoppingCart className="h-4 w-4" />{" "}
                </li>
                </ProtectedComponent>
              </div>


        </div>
          </ul>
        </nav>

        <nav className="mt-4 container flex flex-wrap h-10  items-center justify-between">

          <span className="cursor-pointer font-Josefin text-[34px] font-bold text-primary-dark">
            {" "}
           <Link to="/"> Hekto</Link>{" "}
          </span>

          <CiMenuBurger  onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }} className="text-2xl lg:hidden" />

          <ul className={` ${
            isMenuOpen ? "max-h-[999px]" : "max-h-0 lg:max-h-full"
          } flex max-h-[999px] flex-col items-center justify-between overflow-hidden transition-all lg:m-auto lg:flex-row lg:gap-1`}>
             <li className="  duration-500 text-base text-secondary hover:text-purple-800">
              <div className=" md:ml-4 flex items-center gap-0">
                <Link to="/">Home</Link>
                <FaChevronDown />
              </div>
             </li>

             <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800 ">
              {" "}
              <Link to="/pages">Pages </Link>
             </li>
             <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800 ">
              {" "}
              <Link to="/products">Products</Link>
             </li>
             <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800 ">
              {" "}
              <Link to="/blog">Blog</Link>
             </li>
             <BuyerComponent> 
             <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800">
              {" "}
              <Link to="/carts">carts</Link>
             </li>
             </BuyerComponent>
             <ProtectedComponent role={"seller"}>
              <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800">
              <Link to="/products/seller">seller-products</Link>
            </li>
              </ProtectedComponent>
             <ProtectedComponent role="seller">
             <li className=" mx-6 text-base text-primary-dark duration-500 hover:text-purple-800">
              {" "}
              <Link to="/products/add">Add-products</Link>
             </li>
             </ProtectedComponent>
          </ul>

          {/* <div className="h-10 w-80 border border-gray-500">
            <div className=" ml-auto flex h-10 w-8 items-center justify-center bg-pink-600">
              <FaSearch className=" h-6 w-6 text-white" />
            </div>
          </div> */}
          <form action="" className="flex justify-center w-full lg:w-auto "  
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/products?searchTerm=" + e.target.searchTerm.value);
          }}>
            <div className="flex gap-0">
              <input
            name="searchTerm"
                type="text"
                className=" ml-14 px-4 py-2 h-10 w-[266px] border border-gray-500 focus:border-secondary focus:outline-none" 
              />
              <button className=" px-1 h-10 w-8 bg-secondary "  type="submit">
                {" "}
                <FaSearch className=" h-6 w-6 text-white" />
              </button>
            </div>
          </form>
        </nav>
      </header>
    </>
  );
}
export default Header;
