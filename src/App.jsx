import Header from "./components/common/Header"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./pages/Signup"
import axios from 'axios'
import { setUser } from './app/slice/userSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import Cart from "./pages/Cart"
import AddProducts from "./pages/AddProducts"
import ProtectedRoute from "./components/common/ProtectedRoute"
import { setCart } from "./app/slice/cartSlice"
import SellerProducts from "./pages/SellerProducts"
import UpsertProduct from "./pages/UpsertProduct"

function App(){
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
      let access_token =  localStorage.getItem("access_token")
      if(access_token){
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user",{
          headers:{
            Authorization:`Bearer ${access_token}` 
          }
        })
        .then(res =>{
          setIsLoading(false);
          dispatch(setUser(res.data)) // populatate user data in redux
        })
        .catch(err =>{
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
  
      let cartData = JSON.parse(localStorage.getItem("cartItems"));

    if (cartData) {
      dispatch(setCart(cartData));
    } else {
    }
  }, []);
  
return (
  <>
    {isLoading ? (
      <div className="flex h-screen items-center justify-center">
        <p>logo./ quotes/ spinner</p>
      </div>
    ) : (
<>
<Header/>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
      <Route path="" element={<ProtectedRoute role="buyer" />}>
      <Route path="carts" element={<Cart/>} />
      </Route>
      <Route path="products">
        <Route path="" element={<Products />} />
        <Route path=":slug" element={<SingleProduct />} />
      </Route>
      <Route path="products" element={<ProtectedRoute role="seller" />}>
              <Route path="seller" element={<SellerProducts/>} />
              <Route path="add" element={<UpsertProduct />} />
              <Route path="edit/:_id" element={<UpsertProduct />} />
        </Route>
    </Routes>
    </>
      )}
    <ToastContainer/>
</>
)
}
export default App
/* react slick */