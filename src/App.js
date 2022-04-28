import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartList from './components/cart/CartList';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Buy from './components/Buy';
import './App.css';
import OrderSummary from './components/OrderSummary';
import Inventory from './components/Inventory';
import Payment from './components/Payment';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import TopMenu from './components/Topmenu';
import Footer from './components/Footer';



function App() {
  const isLogedin = useSelector(state => state.product.isLogedin);
  //  console.log('islogedin',isLogedin);
  return (
    <>
       
    <BrowserRouter>
       <Navbar/>
      <TopMenu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute user={isLogedin} />}>
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/cartlist' element={<CartList />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/order' element={<OrderSummary />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/buy' element={<Buy />} />

        <Route path='/inventory' element={<Inventory />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
