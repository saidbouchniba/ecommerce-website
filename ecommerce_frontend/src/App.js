import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Singup';
import Contact from './components/Contact';
import Product from './components/Product';
import Cart from './components/Cart';
import Confirmationemail from './components/Confirmationemail';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getcurrent, getproducts } from './Redux/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from './components/Success';
import Cancel from './components/Cancel';

function App() {
  const [dark,setdark]=useState(localStorage.getItem("dark")||false)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
    dispatch(getproducts())
  },[dark])
  return (
    <div style={{background:dark===true?"black":"white",color:dark===true?"white":"" }} className="App">
     <Header dark={dark}
     setdark={setdark}/>
     <Routes>
      <Route path='/' element={ <Home dark={dark}/>}/>
      <Route path='/Signin' element={ <Signin/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/contact' element={<Contact dark={dark}/>}/>
      <Route path='/products' element={<Product dark={dark}/>}/>
      <Route path='/cart' element={<Cart dark={dark}/>}/>
      <Route path='/users/:token' element={<Confirmationemail/>}/>
      <Route path='/success'element={<Success/>}/>
      <Route path='/cancel'element={<Cancel/>}/>
     </Routes>
     <ToastContainer position="top-right"/>
    
     <Footer/>
     
    </div>
  );
}

export default App;
