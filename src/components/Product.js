import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { addProductToDatabase } from './database/database';
import { getAuth } from 'firebase/auth';


const Product = (props) => {
    const {product} = props;
    const dispatch = useDispatch();
    //const isLogedin = useSelector(state=>state.product.isLogedin);
    const navigate = useNavigate();
    const [user,loading,error] = useAuthState(auth);
    // const auth = getAuth();
    // const cuser = auth.currentUser;

    
    function addCart(product){
     let  newproduct = {...product};
      newproduct.quantity = 1;
      addProductToDatabase(newproduct,'cart');
     if(user){
      dispatch(
        {
          type : 'ADD_TO_CART',
          payload :  product
        });
    }
    else {
      alert('Please Login');
      navigate('/');
    }
     }
  if(product.quantity !== 0){
  return (
    <>
    <div className='product' >
        <h3>{product.name} </h3>
        <p>Product Price :{product.price}</p>
        <p>Quantity :{product.quantity}</p>
        <button className='btn btn-danger' onClick={()=>addCart(product)} ><NavLink to = '/cartlist'>Add to Cart</NavLink></button>

    </div>

    </>
  )
  }
  else {
    return (
      <div className= 'product'>
        <h3>{product.name}</h3>
        <h4>Out of stock</h4>
      </div>
    )
  }
}

export default Product