import React from "react";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiHeart, CiZoomIn } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
export default function Banner() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} -translate-x-[100px]`}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} translate-x-[100px]`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const data = [
    {
      image: banner1,
      h1: "Best Furniture For Your Castle..",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati quia quo, similique sunt quae harum commodi, facilis adipisci cupiditate beatae. In beatae excepturi dolore, temporibus fugiat dolorem nisi omnis.",
    },
    {
      image: banner2,
      h1: "Best Furniture For Your Castle..",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati quia quo, similique sunt quae harum commodi, facilis adipisci cupiditate beatae. In beatae excepturi dolore, temporibus fugiat dolorem nisi omnis.",
    },
    {
      image: banner3,
      h1: "Best Furniture For Your Castle..",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati quia quo, similique sunt quae harum commodi, facilis adipisci cupiditate beatae. In beatae excepturi dolore, temporibus fugiat dolorem nisi omnis.",
    },
  ];
  
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((el) => {
          return (
            <div className=" relative mt-4">
              <img src={el.image} alt="" />
              <div className="container"> 
              <div className="absolute top-0 w-[35%]">
                <p className=" pb-4 pt-[30%] text-secondary"> {el.h1}</p>
                <p className="pb-4 font-Josefin text-[40px] font-bold tracking-wide">
                  {" "}
                  {el.h2}
                </p>
                <p className="mt-4 pb-4 text-slate-400"> {el.description}</p>
                <button className="btn bg-secondary text-white">
                  Shop Now
                </button>
              </div>
              </div>
            </div>
          );
        })}
      </Slider>


      
    </>
  );
}
