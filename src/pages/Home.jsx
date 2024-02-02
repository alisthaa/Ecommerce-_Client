import React, { useEffect, useState } from "react";
import Banner from "../components/home/Banner";
import noimage from "../assets/images/no-image.jpg";
import { CiHeart, CiZoomIn } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import Product from "../components/common/Product";
import { Link } from "react-router-dom";
import { addToCart as reduxAddToCart, increment, setCart } from "../app/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductLoader from "../components/common/ProductLoader";
import { toast } from "react-toastify";
import useAuthenticate from "../hooks/useAuthenticate";
function Home() {
  const dispatch = useDispatch();
  const authenticate = useAuthenticate();
  const reduxStore = useSelector((store) => store);
  const user = reduxStore.user.value;
  const [isLoadingTrendingProduct, setIsLoadingTrendingProduct] =
    useState(true);
  const [isLoadingLatestProduct, setIsLoadingLatestProduct] = useState(true);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/Trending")
      .then((res) => {
        // console.log(res.data.data)
        setTrendingProducts(res.data.data);
        setIsLoadingTrendingProduct(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products?per_page=6")
      .then((res) => {
        // console.log(res.data.data)
        setLatestProducts(res.data.products);
        setIsLoadingLatestProduct(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // this will runinly once while component form
  let load=[1,2,3,4]
  return (
    <>
      <Banner/>

      {/* <ProductLoader/> */}
      <div className="flex justify-center">
        <div className=" mt-24 grid grid-cols-1 gap-6 sm:mt-28 md:grid-cols-2 lg:grid-cols-4 2xl:mt-[226px]">
          {isLoadingTrendingProduct &&
          
            load.map((el) => {
              return <ProductLoader />;
            })
            }

          {trendingProducts.map((el) => {
            return <Product key={el._id} product={el} />;
          })}
        </div>
      </div>

      <h1 className="p-auto flex justify-center pt-[128px] font-Josefin text-[42px] font-bold text-primary-dark">
        Latest Products
      </h1>
      <ul className="flex justify-center gap-14 pb-14 pt-5 font-Lato">
        <li className="text-secondary underline">New Arrival</li>
        <li className="text-primary-dark">Best Seller</li>
        <li className="text-primary-dark">Featured</li>
        <li className="text-primary-dark">Special Offer</li>
      </ul>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-7 sm:mt-28 md:grid-cols-2 lg:grid-cols-3 2xl:mt-[150px]">
          {isLoadingLatestProduct &&
             [1, 2, 3, 4, 5, 6].map((el) => {
                return <ProductLoader />;
              })
           }
          {latestProducts.map((el) => {
            return (
              <>
                <div className=" group">
                  <Link to={`/products/${el._id}`}>
                    <div className="relative flex h-[270px] w-[360px] items-center justify-center overflow-hidden bg-[#F7F7F7]">
                      <img
                        src={el.image || noimage}
                        className="h-[245px] w-[245px]"
                      />

                      {/* <img src={el.image} alt=""className="h-[245px] w-[245px]" /> */}
                      <div className="absolute bottom-20 left-[15px] hidden h-[17px] w-[17px] grid-cols-1 gap-2 group-hover:grid">
                        <span
                          onClick={(event) => {
                            event.preventDefault();
                            authenticate(() =>{
                              dispatch(reduxAddToCart(el));
                              alert("added to cart");
                            })
                          }}
                        >
                          <FaShoppingCart className="text-primary" />
                        </span>

                        <CiHeart className="text-primary" />
                        <CiZoomIn className="text-primary" />
                      </div>
                    </div>

                    <div className="flex items-center font-Josefin">
                      <p className="ml-0 text-[16px] text-primary-dark">
                        {el.name}
                      </p>
                      <p className="pl-28 text-[14px] text-primary-dark">
                        {el.price}
                      </p>
                      <p className="pl-2 text-[12px] text-secondary line-through">
                        $65.00
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
