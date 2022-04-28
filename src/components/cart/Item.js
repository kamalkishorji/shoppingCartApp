import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Item = (props) => {
  const data = useSelector(state=>state.product.products);


  
  const cartitem = props.item;
  const dispatch = useDispatch();
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
   <div className='product'>
       <h3>{cartitem.name}</h3>
       <p>Product Price : {cartitem.price}</p>
       <p>Quantity : {cartitem.quantity} </p>
       <p>Total :{cartitem.total} </p>
       <button onClick = {()=>incQuantity(cartitem)}>AddQuantity</button>
       <button onClick={()=>decQuantity(cartitem)}>RemoveQuantity</button>
       <button onClick={()=>removeItem(cartitem.id)}>RemoveItem</button>
       
   </div>
   </>
  )
}

export default Item