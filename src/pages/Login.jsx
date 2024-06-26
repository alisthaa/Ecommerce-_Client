import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import fashionImage from "../assets/images/fashionImage.png"
import BreadCrumbs from '../components/common/BreadCrumbs';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUser } from "../app/slice/userSlice";
import { useDispatch } from "react-redux";
export default function Login() {
const navigate = useNavigate()
const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submitted");
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/login",{
      email:e.target.email.value,
      password:e.target.password.value,})
      .then((res)=>{
        console.log(res.data.user);
        toast('succesfully logged in')
        navigate("/")
        dispatch(setUser(res.data.user))
        localStorage.setItem("access_token",res.data.access_token)
      })
      .catch((err)=>{
        console.log(err);
        toast.error("invalid credentials")
      })
  } 


  return <>
    <BreadCrumbs 
      title={"My Account"}
        links={[
          { title: "Home .", url: "/" },
          {title: "Pages .", url: "/pages"},
          { title: "My Account", url: "#" },
        ]} />
    <div className='flex justify-center mt-24 mb-24'> 
    <div className='w-[500px] h-[450px] shadow-lg shadow-[#C2C5E1]'>
      <div className="flex justify-center mt-12"> <h1 className='text-[32px] font-Josefin font-bold'>Login</h1> </div>
      <div className="flex justify-center text-base font-Lato text-[#9096B2]"><p>Please login using account detail bellow.</p></div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-wrap gap-6 mt-9">  
        
        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder='Email Address' 
        className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'/>
        
        <input 
        required 
        type="text" 
        name="password" 
        id="password" 
        placeholder='Password' 
        className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'/>
        </div>
        <p className='mt-3 mb-6 ml-[56px] text-[17px] font-Lato text-[#9096B2]'>Forgot your password?</p>
        <button 
        type='submit' 
        className=' ml-[56px] h-11 w-96 border bg-secondary text-white font-Lato text-[17px]'>
          Log in
          </button>
      </form>
      <div className="flex justify-center mt-7 text-[17px] font-Lato text-[#9096B2]" >
         <p>Don't have an Account? 
          <Link to={"/signup"}> Create account </Link> 
          </p> </div>
     
    </div>
    </div>


    <div className='flex justify-center mb-24'>
    <img src={fashionImage} alt="" />
    </div>
    </>
}
