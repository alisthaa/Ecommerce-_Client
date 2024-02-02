import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumbs({title,links})  {
  return <>
  <div className='bg-[#F1F1F1] h-96 mt-5'>
<div className='container pt-24'>
  <h1 className='text-[36px] font-Josefin font-bold text-primary-dark'>{title}</h1>
  {
    links.map((link,index) =>{
    return  <Link className={`mr-3 ${index+1 == links.length ?"text-secondary" : ""} font-Lato`} to={link.url}>{link.title}</Link>
            })
}
   </div>
    </div>

  </>
}
