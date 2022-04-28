import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs,collection } from 'firebase/firestore';
import { addProductToDatabase,updateProduct } from './database/database';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Payment = () => {
       const dispatch = useDispatch();
       const navigate = useNavigate();
    const cart = useSelector(state=>state.product.cart);
    const updateDatabase = async()=>{
        const querySnapshot = await getDocs(collection(db,'products'));
        querySnapshot.forEach((doc) => {
          for(let item of cart){
            if(doc.data().id === item.id){
               // console.log(doc.data());

              updateProduct(doc.id,doc.data().quantity-item.quantity,doc.data());
            }
          }
        });
    }
    const handlePayment = ()=>{
        alert('congratulations your payment is successful ');
        // for(let item of cart){
        //     addProductToDatabase(item,'cart');
        // }
        dispatch({
          type : 'EMPTY_CART',
          payload : cart
        });

        updateDatabase();
        navigate('/productlist');
    }
  return (
    <div className='container my-5' style={{paddingBottom : '20rem'}}>
      <div className='row justify-content-center'>
        <div className='col-4'>
        <button className="btn btn-primary" onClick = {handlePayment}>Successful Payment</button>
        </div>
        <div className='col-4'>
        <button className="btn btn-primary"onClick={()=>navigate('/cartlist')}>Unsuccessful Payment</button>
        </div>
        </div>
    </div>
  )
}

export default Payment