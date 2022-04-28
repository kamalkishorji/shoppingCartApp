import React from 'react';
//import Product from './Product';
import {useSelector,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../firebase';
import { auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
//import { query,collection,where,getDocs, QuerySnapshot } from 'firebase/firestore';
//import { async } from '@firebase/util';
//import { updateProduct } from './database/database';
//import { addProductToDatabase } from './database/database';
import { AspectRatio } from 'react-aspect-ratio';

const ProductList = () => {
    const [name,setName] = useState('');
    const [data, setData] = useState([]);
   // const [admin, setAdmin] = useState(false);
    const dispatch = useDispatch();
   // const cart = useSelector((state=>state.product.cart));
    const cartitem  = useSelector(state=>state.product.cart);
    //const adminlogin = useSelector(state=>state.product.admin);
   const [user,loading,error] = useAuthState(auth);
  //console.log(user?.uid);
   const navigate = useNavigate();
  //  const fetchUserName = async () =>{
  //    try{
  //     const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //     //console.log(q);
  //     const doc = await getDocs(q);
  //     //console.log(doc);
  //     const data = doc.docs[0].data();
  //     setName(data.name);
  //     //console.log(data);
  //    }catch(err){
  //     console.error(err);
  //     alert("An error occured while fetching user data");

  //    }
  //  }
  
// const fetchProduct = async()=>{
//   let product = [];
//  const querySnapshot = await getDocs(collection(db, "products"));
//  querySnapshot.forEach((doc) => {
//  product.push(doc.data());
//  //console.log(doc.data());
// });
// setData(product);
// }
// fetchProduct();

  



useEffect(()=>{
  async function fetchProductlist(){
    let res = await fetch(' https://us-central1-fir-auth-47465.cloudfunctions.net/products');
    let product = await res.json();
    setData(product);
    dispatch({
      type : 'UPDATE_PRODUCT',
      payload : product,
    })
   }
   fetchProductlist();
},[]);
  //  useEffect(()=>{
  //   //  if(loading) return;
  //   //   if(!user){
  //   //     // dispatch({
  //   //     //   type : 'LOGIN_TRUE',
  //   //     //   payload : true
  //   //     // });
  //   //      return navigate('/');
          
  //     //} 
  //    // getIdOfUser(); 
  //    //fetchUserName();
  //  },[user,loading]);

   function addCart(product){
    let  newproduct = {...product};
     newproduct.quantity = 1;
    //  const updateCartInDatabase = async()=>{
    //    const querySnapshot = getDocs(collection(db,`users/${userid}/cart`));
    //    let flag = false;
    //     querySnapshot.forEach((doc)=>{
    //       if(doc.data().id === newproduct.id){
    //         doc.data().quantity += 1;
    //         flag = true;
    //       }
    //     });
    //     if(!flag){
    //       addProductToDatabase(newproduct,userid);
    //     }

    //  }
    //  updateCartInDatabase();
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
    function handleLogout(){
      logOut(); 
      navigate('/');
      dispatch({
        type : 'AUTH_HANDLE',
        payload : false
      });
    }
    
  return (
    <>
    {/* <div className='product-container'>
       <table className='products'>
  <tr>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Status</th>
    <th>Add To Cart</th>
  </tr>
  {data.map((product)=>{
    return <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.quantity ? 'In Stock' :'Out of Stock'}</td>
      <td>{product.quantity ?
      <div onClick={()=>addCart(product)}>
       <svg xmlns="http://www.w3.org/2000/svg"
        width="25"
         height="25"
          fill="currentColor"
         className="bi bi-bag-plus-fill" 
         viewBox="0 0 16 16">
       <path fill-rule="evenodd" 
       d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
        </svg> </div>
        : ""}</td>
      </tr>
  })}
  
</table>
     </div> */}
     <div className='container'>
     <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">
                    <h4 className="text-center mb-5"><strong>Product listing</strong></h4>
                    <div className="row" >
                  {data.map((product)=>{
          
                    return <div className="col-lg-4 col-md-12 mb-4" key={product.id}>
                      <div className='container justify-content-center'  style={{height : '350px', width : '300px'}}>
                        <AspectRatio ratio = '3/4' style = {{ height : '350px',  maxHeight : '100%',width : '300px', maxWidth : '100%'}} >
                            <img
                                src={`../images/${product.img}.webp`}
                                className="w-100"
                                style={{height : '350px', width : '300px', objectFit : 'contain'}}
                            />
                           </AspectRatio>
                           </div>

                                <div className="d-flex justify-content-start align-items-start h-100">
                                    <h4 className='my-3'>{product.name}</h4>
                                    <h5><span className="badge bg-light pt-2 ms-3 mt-3 text-dark">Rs {product.price}</span></h5>
                                    <div onClick={()=>addCart(product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-plus-fill mx-5 my-3" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                                    </svg>
                                    </div>
                                </div>
                            
                          
                        
                            
                            </div>

                  })}
                  </div>
                
                  
                    
                </div>
            </section>
            </div>
    </>
  )
}



export default  ProductList;