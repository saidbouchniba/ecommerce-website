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
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcurrent, getproducts } from './Redux/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getcurrent())
    dispatch(getproducts())
  })
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/Signin' element={ <Signin/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/users/:token' element={<Confirmationemail/>}/>
     </Routes>
     <ToastContainer position="top-right"/>
    
     <Footer/>
     
    </div>
  );
}

export default App;
