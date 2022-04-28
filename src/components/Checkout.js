import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../firebase';

const Checkout = () => {
    const checkout = useSelector(state=>state.product.cart);
    let grandtotal = 0;
    for(let item of checkout){
        grandtotal += item.price*item.quantity;
    }
  return (
    <>
    <nav class="navbar navbar-dark bg-dark">
    <button className='btn btn-danger'><NavLink to = '/buy'>Buy</NavLink></button>
      <button className='btn btn-danger'><NavLink to = '/productlist'>Product List</NavLink></button>
      <button className='btn btn-danger'><NavLink to = '/cartlist'>Cart</NavLink></button>
      <button className='btn btn-danger' onClick={logOut}><NavLink to = '/'>Logout</NavLink></button>  
   </nav>
    {checkout.map((product)=>{
        return <div className='cart'>
            <h3>{product.name}</h3>
            <p>Product Price : {product.price}</p>
            <p>Quantity : {product.quantity}</p>
            <p>Price : {product.total} </p>
        </div>
    })}
    
    </>
  )
}

export default Checkout