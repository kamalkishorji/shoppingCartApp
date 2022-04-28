import React from 'react';
import { NavLink } from 'react-router-dom';
import { logOut } from '../firebase';
import { addProductToDatabase } from './database/database';
import { useSelector } from 'react-redux';
import { updateProduct } from './database/database';
import { db } from '../firebase';
import { collection,getDocs } from 'firebase/firestore';
//import { useDispatch } from 'react-redux';


const Buy = () => {
    const orderedItems = useSelector(state=>state.product.cart);
    //const dispatch = useDispatch();
    //console.log(orderedItems);
    let totalprice =0;
    for(let item of orderedItems){
        totalprice += item.total;
    }
    const updateDatabase = async()=>{
        const querySnapshot = await getDocs(collection(db,'products'));
        querySnapshot.forEach((doc) => {
          for(let item of orderedItems){
            if(doc.data().id === item.id){
               // console.log(doc.data());

              updateProduct(doc.id,doc.data().quantity-item.quantity,doc.data());
            }
          }
        });
    }
    const Payment = ()=>{
        alert('congratulations your payment is successful ');
        for(let item of orderedItems){
            addProductToDatabase(item,'cart');
        }
        updateDatabase();
        // dispatch({
        //   type : 'EMPTY_CART',
        //   payload : 0
        // });

    }
    const summary = orderedItems.map((item)=>{
        return <li>{item.name} --- Price : {item.price} Quantity : {item.quantity} Total : {item.total}</li>
    })
  return (
    <>
     <nav className="navbar navbar-dark bg-dark">
    <button className='btn btn-danger' onClick={Payment}>Payment</button>
      <button className='btn btn-danger'><NavLink to = '/productlist'>Product List</NavLink></button>
      <button className='btn btn-danger'><NavLink to = '/cartlist'>Cart : {orderedItems.length}</NavLink></button>
      <button className='btn btn-danger' onClick={logOut}><NavLink to = '/'>Logout</NavLink></button>  
   </nav>
   <div className='ordersummary'>
       <h1>Order summary</h1>
       <ul>
       {summary}
       <li>Grand Total : {totalprice}</li>
       </ul>
   </div>
    </>
  )
}

export default Buy;