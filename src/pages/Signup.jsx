import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import fashionImage from "../assets/images/fashionImage.png"
import BreadCrumbs from '../components/common/BreadCrumbs';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
const navigate = useNavigate()
const [validationError, setValidationError] = useState({});
  const handleSubmit = (e) =>{
    e.preventDefault()
   /*  axios.post("http://localhost:8000/api/signup",{ */
    axios.post("https://ecommerce-sagartmg2.vercel.app/api/users/signup",{
      name:e.target.name.value,
      role:e.target.role.value,
      email:e.target.email.value,
      password:e.target.password.value
    })
      .then((res)=>{
        console.log(res.data);
        toast('signup succesful')
        navigate("/login")
      })
      .catch((err)=>{
        console.log(err);
        let errorMsg = ""
        err.response.data.errors.forEach(el =>{
            errorMsg+= `${el.param}: ${el.msg} , `
        }) 
        if (err.response?.status == 400) {
          let errObj = {};
          err.response.data.errors.forEach((el) => {
            errObj[el.param] = el.msg;
          });
          console.log(errObj);
          setValidationError(errObj);
        }
      toast.error("Something Went Wrong")
      })
  } 


  return <>
    <BreadCrumbs 
      title={"Sign Up"}
        links={[
          { title: "Home .", url: "/" },
          {title: "Pages .", url: "/pages"},
          { title: "Sign Up", url: "#" },
        ]} />
    <div className='flex justify-center mt-24 mb-24'> 
    <div className='w-[500px] h-[850px] shadow-lg shadow-[#C2C5E1]'>
      <div className="flex justify-center mt-12"> <h1 className='text-[32px] font-Josefin font-bold'>Sign Up</h1> </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-wrap gap-6 mt-9">  
        
        
        <label for="name" className='w-96 font-Lato'>Name</label>
        <input id="name"
              type="text"
              name="name"
              placeholder="Name"
              className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'
              />
 
      { 
      validationError && 
      <> <span className="text-sm text-red-500">{validationError.name}</span>
       </>
       }


<label for="Role" className='w-96 font-Lato'>Role</label>
              <select name="role" id="" className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'>
                <option value="">select</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
             </select>

             { 
      validationError && 
      <> <span className="text-sm text-red-500">{validationError.role}</span>
       </>
       }



<label for="email" className='w-96 font-Lato'>Email</label>
        <input  
        type="email" 
        name="email" 
        id="email" 
        placeholder='Email Address'  
        className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'/>
        
        
        { 
      validationError && 
      <> <span className="text-sm text-red-500">{validationError.email}</span>
       </>
       }


        <label for="password" className='w-96 font-Lato'>Password</label>
        <input  
        type="password" 
        name="password" 
        id="password" 
        placeholder='*********'  
        className='w-96 h-11 border-[#C2C5E1] border font-Lato focus:border-secondary focus:outline-none'/>
       
       
       { 
      validationError && 
      <> <span className="text-sm text-red-500">{validationError.password}</span>
       </>
       }


        </div>
        <button type='submit' className=' mt-5 ml-[56px] h-11 w-96 border bg-secondary text-white font-Lato text-[17px]'>Sign Up</button>
      </form>
    </div>
    </div>


    <div className='flex justify-center mb-24'>
    <img src={fashionImage} alt="" />
    </div>
    </>
}
