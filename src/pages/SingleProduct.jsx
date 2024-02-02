import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import bag from '../assets/images/bag.png'
import {FaRegHeart,FaArrowRight} from "react-icons/fa";
import BreadCrumbs from '../components/common/BreadCrumbs';
import axios from 'axios';
import noimage from "../assets/images/no-image.jpg"
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addToCart as reduxAddToCart, increment } from '../app/slice/cartSlice';
import useAuthenticate from '../hooks/useAuthenticate';
export default function SingleProduct() {
  const dispatch = useDispatch()
  const authenticate = useAuthenticate();
  const [product, setProduct] = useState({});
  const [review, setReview]= useState({})
  const [length, setLength]= useState();

  let productId = "64549d085e021d67be48e82a"
   const {slug}  = useParams() 
  console.log(slug)

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-sagartmg2.vercel.app/api/products/"+slug,
      )
      .then((res) => {
        setProduct(res.data.data);
        setReview(res.data.data.reviews);
        let reviewLength= [res.data.review].length-1;
        setLength(reviewLength)
        console.log(reviewLength);
        console.log((res.data.data.reviews));
      })
      .catch(err =>{
        console.log(err);
        toast.error("something went wrong. try again later.")
      })
  }, []);


  const addReview = (data) => {
    alert("review added.");
    axios.put(
      "https://ecommerce-sagartmg2.vercel.app/api/products/review/" + slug,
      data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      },
    );
  };


  return <> 
    <BreadCrumbs
    title={"Product Details"}
    links={[
      { title: "Home .", url: "/" },
      {title: "Pages .", url: "/pages"},
      { title: "Product Details", url: "#" },
    ]}
    />

    <div className='container mt-24 mb-24'>

    <div className=' w-[1150px] h-[450px] shadow-lg shadow-[#C2C5E1]'>

<div className="flex"> 

<div>
<img src={product.image || noimage} alt="" className='w-[550px] h-[400px] ml-5 mt-[25px] mr-5'/>
</div>
<div className='pl-10 pt-16'>
  <h1 className='text-[36px] font-semibold font-Josefin text-primary-dark'>{product.name}</h1>
  <div className="flex gap-5"><p className='text-primary-dark'>${product.price}</p> <p className='text-secondary line-through text-[16px]'>$32.00</p>  </div>
<p className='text-primary-dark pt-3 font-semibold'>Color</p>
<p className='text-[#A9ACC6] pt-3 pb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit eaque vero ad commodi mollitia rerum illo iusto! Autem explicabo laboriosam iusto sunt optio harum voluptatibus, ratione cumque? Itaque, harum?

</p>
<button 
type='button'
onClick={(event) => {
  authenticate(() =>{
    dispatch(reduxAddToCart(product));
    alert("added to cart");
  })
}}
 className='pt-5 flex items-center gap-7 pl-16 font-Josefin text-primary-dark'> Add To Cart <FaRegHeart/> </button>
<div> 

<ul>
<li>Rating: {review.rating} </li>
<li>Comment: {review.comment} </li>
</ul>
</div>
</div>

</div>

    </div>
    </div>

    
    <form onSubmit={(e) =>{
        e.preventDefault()
        authenticate(() => {
          addReview({
            rating: e.target.rating.value,
            comment: e.target.comment.value,
          });
        });
      }}

      >
        <input type="text" name='rating' className="border px-4 py-2" />
        <input type="text" name='comment' className="border px-4 py-2" />
        <button className="btn">Add Review</button>
      </form>


  
 
<div className='h-[500px] bg-[#F9F8FE] mb-32'>
<div className="container">
  <div className='flex gap-20 pt-24 text-xl font-Josefin font-semibold text-[#151875]'> 
    <p className='hover:underline'>Description</p>
    <p className='hover:underline'>Additional Info</p>
    <p className='hover:underline'>Reviews</p>
    <p className='hover:underline'>Video</p>
  </div>
  <div className='mt-14 mb-4 font-Josefin'>
    <h1 className='text-[#151875] text-lg pb-3 '>Varius tempor.</h1>
    <p className='text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
  <div className='font-Josefin'>
    <h1 className='text-[#151875] text-lg pb-3 '>More details</h1>
    <p className='flex items-center gap-2 group text-[#A9ACC6]'> <FaArrowRight className='text-black group-hover:text-[#2F1AC4]'/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    <p className='flex items-center gap-2 group text-[#A9ACC6]'> <FaArrowRight className='text-black group-hover:text-[#2F1AC4]'/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    <p className='flex items-center gap-2 group text-[#A9ACC6]'> <FaArrowRight className='text-black group-hover:text-[#2F1AC4]'/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
    <p className='flex items-center gap-2 group text-[#A9ACC6]'> <FaArrowRight className='text-black group-hover:text-[#2F1AC4]'/> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
  </div>
</div>
</div>
    </>
}
