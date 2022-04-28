import React from 'react';
import Item from './Item';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logOut } from '../../firebase';
import '../cartlist.css';

const CartList = () => {
  //const [modal,setModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state=>state.product.cart);
  const navigate = useNavigate();
  const data = useSelector(state=>state.product.products);
  let grandtotal = 0;
  for(let item of cart){
      grandtotal += item.price*item.quantity;
  } 
  function handleLogout(){
    logOut(); 
    navigate('/');
    dispatch({
      type : 'AUTH_HANDLE',
      payload : false
    });
  }
  function incQuantity(cartproduct){

    let actucalproduct = data.find((item) => item.id===cartproduct.id);
    if(actucalproduct.quantity > cartproduct.quantity){
      
      dispatch({
        type : 'UPDATE_CART_QUANTITY',
        payload : {
                  productid : cartproduct.id,
                  quantity : 1
        }
      });
    }
    
  }
  function decQuantity(cartproduct){
    if(cartproduct.quantity > 0){
      dispatch({
        type :  'UPDATE_CART_QUANTITY',
        payload : {
                  productid : cartproduct.id,
                  quantity : -1
        }
      });
  
    }

    
  }

  function removeItem(cartproduct){
    dispatch({
      type : 'REMOVE_CART_ITEM',
      payload : {
        productid : cartproduct,
      }
    })
  }
  return (
    <>
    {/* <div className='carlistcontainer'>
    <div className="CartContainer">
   	   <div className="Header">
   	   	<h3 className="Heading">Shopping</h3>
   	   </div>

    {cart.map((product)=>{
      return <div className="Cart-Items">
      <div className="about">
        <h1 className="title">{product.name}</h1>
      </div>
      <div className="counter">
        <div className="change-btn" onClick = {()=>incQuantity(product)}>+</div>
        <div className="count">{product.quantity}</div>
        <div className="change-btn" onClick = {()=>decQuantity(product)}>-</div>
      </div>
      <div className="prices">
        <div className="amount">  &#x20b9; {product.total}</div>
        <div className="remove" onClick={()=>removeItem(product.id)}>Remove</div>
        </div>
        </div>
    })}
    </div>
    <hr/> 
   	 <div className="checkout">
   	 <div className="total">
   	 	<div>
   	 		<div className="Subtotal">Total</div>
   	 	</div>
   	 	<div className="total-amount">  &#x20b9; {grandtotal}</div>
   	 </div>
   	 <button className="checout-btn"
      onClick={()=>navigate('/order')}>Checkout</button>
      </div>
      
      </div> */}
      {/* <table class="table"> */}
  
    {/* <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Change Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Remove</th>
    </tr> */}

    {/* {cart.map((product)=>{
      return <tr key={product.id}>
      <th scope="row">{product.name}</th>
      <td><div className="counter">
        <div className="change-btn" onClick = {()=>incQuantity(product)}>+</div>
        <div className="count">{product.quantity}</div>
        <div className="change-btn" onClick = {()=>decQuantity(product)}>-</div>
      </div></td>
      <td><div className="prices">
        <div className="amount">  &#x20b9; {product.total}</div>
        </div>
        </td>
      <td><i className='fa fa-trash' onClick={()=>removeItem(product.id)}></i></td>
    </tr>
    })}
     */}
  
{/* </table> */}
<div className = 'container py-3' style={{marginBottom : '100px'}}>
  <div className='row justify-content-center'>
    <div className='col-3'>
      <h3>Your Cart</h3>
    </div>
  </div>
  {cart.map((product)=>{
    return <div className = 'row my-2' key={product.id}>
    <div className = 'col'>
      <h5 className='text-muted'>{product.name}</h5>
    </div>
    <div className='col'>
      <button className='rounded-circle border border-primary mx-2' onClick = {()=>incQuantity(product)}>+</button>
      <span>{product.quantity}</span>
      <button  className='rounded-circle border border-primary mx-2 ' onClick = {()=>decQuantity(product)}>-</button>
    </div>
    <div className='col'>
      <h5>RS {product.total}</h5>
    </div>
    <div className='col'>
    <i className='fa fa-trash' onClick={()=>removeItem(product.id)}></i>
    </div>
  </div>
  })}
  
  <div className='row justify-content-center my-2'>
    <div className='col-3'>
      <h3>Total</h3>
    </div>
    <div className='col-3'>
      <h3>RS {grandtotal}</h3>
    </div>
  </div>
  <div className='row justify-content-center'>
    <div className='col-3 my-2'>
      <button className="rounded-pill btn btn-primary" onClick={()=>navigate('/order')}>Checkout</button>
    </div>
  </div>
</div>
    
    </>
  )
}

export default CartList;