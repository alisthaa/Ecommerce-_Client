import React, { useState, useEffect } from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import { MdGridView } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";
import { TiTick } from "react-icons/ti";
import { FaCircle , FaHeart, FaShoppingCart} from "react-icons/fa";
import { CiZoomIn } from "react-icons/ci";
import noimage from "../assets/images/no-image.jpg"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from "react-router-dom";

export default function Products() {
  
  const [products,setProducts]=useState([])

  let [searchParams, setSearchParams] = useSearchParams();

  const [viewType, setviewType] = useState("grid")
  
  console.log(searchParams.get("searchTerm"));

  useEffect(()=>{
    let page = searchParams.get("page") || 1
    let searchTerm = searchParams.get("searchTerm") || ""
    axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products?per_page=7&search_term=${searchTerm}`)
    .then((res)=>{
      // console.log(res.data.data)
      setProducts(res.data.products)
    
    })
    .catch(err=>{
      console.log(err);   
    })
      },[searchParams])

  return <> 
 
    <BreadCrumbs
    title={"Shop Left Sidebar"}
    links={[
      { title: "Home .", url: "/" },
      {title: "Pages .", url: "/pages"},
      { title: "Shop Left Sidebar", url: "#" },
    ]}
    />

    <div className='container flex gap-32 text-[#151875] mt-28 mb-24'>
    <div>
      <h1 className='text-xl font-Josefin font-bold'> Ecommerce Acceories & Fashion item  </h1>
      <p className='text-[12px] font-Lato'>About 9,620 results (0.62 seconds)</p>
    </div>
    <div className='flex items-center gap-6 font-Lato'>
      <span> Per Page: <input className='h-6 w-12 border border-[#E7E6EF]'/> </span>
      <span> Sort By: <select name="" id="" className='border border-[#E7E6EF] h-6 w-20'>best match</select> </span>
      <span className='flex items-center'> View: <MdGridView className='mx-2'/> <TfiViewListAlt/> <input className='h-7 w-36 ml-4 border border-[#E7E6EF] '/> </span>
    </div>  
    </div>


<div className='container flex gap-14'>


  <div>
    <h1 className='font-bold font-Josefin text-[#151875] text-lg underline'>Product Brand</h1>
    <ul className='font-Lato pt-1 pb-10 text-[#7E81A2]'>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#E5E0FC] text-[#603EFF]'/> Coaster Furniture</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#E5E0FC] text-[#603EFF]'/> Fusion Dot High Fashion</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='text-[#E5E0FC] bg-[#603EFF]'/> Unique Furnitture Restor</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#E5E0FC] text-[#603EFF]'/> Dream Furnitture Flipping</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#E5E0FC] text-[#603EFF]'/> Young Repurposed</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#E5E0FC] text-[#603EFF]'/> Green DIY furniture</li>
    </ul>


    <h1 className='font-bold font-Josefin text-[#151875] text-lg underline'>Discount Offer</h1>
    <ul className='font-Lato pt-1 pb-10 text-[#7E81A2]'>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> 20% Cashback</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> 5% Cashback Offer</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> 25% Discount Offer</li>
    </ul>

    <h1 className='font-bold font-Josefin text-[#151875] text-lg underline'>Rating Item</h1>
    <ul className='font-Lato pt-1 pb-10'>
      <li className='py-2 flex gap-2 items-center'> <TiTick className='bg-[#FFF6DA] text-[#FFCC2E]'/> (2341)</li>
      <li className='py-2 flex gap-2 items-center'> <TiTick className='text-[#FFF6DA] bg-[#FFCC2E]'/>(1726)</li>
      <li className='py-2 flex gap-2 items-center'> <TiTick className='bg-[#FFF6DA] text-[#FFCC2E]'/>(258)</li>
      <li className='py-2 flex gap-2 items-center'> <TiTick className='bg-[#FFF6DA] text-[#FFCC2E]'/>(25)</li>
    </ul>

    <h1 className='font-bold font-Josefin text-[#151875] text-lg underline' >Categories</h1>
    <ul className='font-Lato pt-1 pb-10 text-[#7E81A2]'>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Prestashop</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Magento</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='text-[#FFDBF1] bg-[#FF3EB2]'/> Bigcommerce</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> osCommerce</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> 3dcart</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Bags</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Accessories</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Jewellery</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> Watches</li>
    </ul>

    <h1 className='font-bold font-Josefin text-[#151875] text-lg underline'>Price Filter</h1>
    <ul className='font-Lato pt-1 pb-10 text-[#7E81A2]'>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> $0.00 - $150.00</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> $150.00 - $350.00</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='text-[#FFDBF1] bg-[#FF3EB2]'/> $150.00 - $504.00</li>
      <li className='py-2 flex gap-2 items-center'><TiTick className='bg-[#FFDBF1] text-[#FF3EB2]'/> $450.00 +</li>
      <input placeholder='$10.00 - 20000$' className='border border-[#E7E6EF]'/>
    </ul>

<h1 className='font-bold font-Josefin text-[#151875] text-lg underline'>Filter By Color</h1>
<ul className='font-Lato pt-1 pb-10 text-[#7E81A2] grid grid-cols-3 gap-2'>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#5E37FF]'/>blue</li>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#FF9437]'/>orange</li>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#FFBF95]'/>brown</li>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#33D221]'/>green</li>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#E248FF]'/>purple</li>
  <li className='flex gap-2 items-center'> <FaCircle className='text-[#26CBFF]'/>sky</li>
</ul>
  </div>


  <div>

{
  products.map((el)=>{

return <>
<div className='h-60 w-[770px] shadow-lg shadow-slate-400 mb-8 flex gap-10'> 

<div> <img src={el.image||noimage} className='w-64 h-52 m-4'/> </div>

<div className='mt-6 text-[#111C85] '> 
<h1 className='font-Josefin font-bold text-[18px]'>{el.name}</h1>
<div className='flex gap-5 text-[14px] font-Josefin py-3'> <p>${el.price}</p>  <p className='text-secondary line-through'>$52.00</p> </div>

<p className='pt-2 pb-6 text-[#9295AA]'>{el.description}</p>
<div className='flex items-center gap-8 text-primary'>
 <FaShoppingCart/>
<FaHeart/>
<CiZoomIn/>
</div>

</div>


</div>

</>
  })
}
 
  </div>

</div>
    </>
}
