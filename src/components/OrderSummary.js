import React from 'react';
import { useSelector } from 'react-redux';
//import { getDocs, collection } from 'firebase/firestore';
//import { addProductToDatabase, updateProduct } from './database/database';
//import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const OrderSummary = () => {
    const [fielddata, setFieldData] = useState({
        name : '',
        mobile : '',
        pin : ''
    });
    // const [show,setShow] = useState(
    //    { 
    //        isName : true,
    //        isMobile : true,
    //        isPin : true
    // }

   // );
    const [isName,setIsname]=useState(true);
    const [isMobile,setIsmobile] = useState(true);
    const [isPin,setIspin] = useState(true);
    const cart = useSelector(state => state.product.cart);
    const navigate = useNavigate();
    let totalprice = 0;
    for (let item of cart) {
        totalprice += item.quantity * item.price;
    }
    function handleClick(){
        let {name,mobile,pin} = fielddata;
        //console.log(name.length);
        if(!name){
           // setShow({...show, isName : false});
           setIsname(false);
           //console.log('name',isName);
        }else{setIsname(true)}
        if(mobile.trim().length !== 10 || mobile === ''){
            //setShow(prev=>{return{...prev, isMobile : false}});
            setIsmobile(false);
            //console.log('mobile',isMobile);
        }else{setIsmobile(true)}
        if(pin.trim().length !==6 || pin ==='' ){
            //setShow(prev=>{return {...prev, isPin : false}});
            setIspin(false);
            //console.log('pin',isPin);
        }else{setIspin(true)}
        //console.log(show);
        // if(isName && isMobile && isPin){
        //     navigate('/payment');
        // }

    }
    //console.log(fielddata);
    //console.log(totalprice);
    // const updateDatabase = async()=>{
    //     const querySnapshot = await getDocs(collection(db,'products'));
    //     querySnapshot.forEach((doc) => {
    //       for(let item of cart){
    //         if(doc.data().id === item.id){
    //            // console.log(doc.data());

    //           updateProduct(doc.id,doc.data().quantity-item.quantity,doc.data());
    //         }
    //       }
    //     });
    // }
    // const Payment = ()=>{

    //     for(let item of cart){
    //         addProductToDatabase(item,'cart');
    //     }
    //     updateDatabase();
    //     // dispatch({
    //     //   type : 'EMPTY_CART',
    //     //   payload : 0
    //     // });

    // }
    // const cancelPayment = ()=>{
    //     alert("Transaction failed !");
    //     navigate('/cartlist');

    // }
    return (
        <>
            {/* <div className="modal1">
    <div className="container">
      <h1>Order Summary</h1>
<table>
  <tr>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price</th>
  </tr>
  {cart.map((item)=>{
      return <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.total}</td>
    </tr>
  })}
  <tr>
      <td></td>
      <td>Total Price</td>
      <td>{totalprice}</td>
  </tr>
  </table>

      <div className="clearfix">
        <button id = 'cancelbtn'  className="paybtn"
        onClick={cancelPayment}
        >Cancel payment</button>
        <button id = 'deletebtn'
        onClick={()=>navigate('/payment')}
         className="paybtn">Pay</button>
      </div>
    </div>
</div> */}
            {/* <div className='container'>
                <div className='row justify-content-center  py-2 px-0 '>
                    <div className='col md-8' >
                        <div className='card px-4' >
                            <div className="card-header">Billing address</div>
                            <label>First Name</label>
                            <input type='text' className="form-control"></input>
                            <label>Last Name</label>
                            <input type='text' className="form-control"></input>
                            <label>Email</label>
                            <input type='text' className="form-control"></input>
                            <label>Adress 1</label>
                            <input type='text' className="form-control"></input>
                            <label>Adress 2</label>
                            <input type='text' className="form-control"></input>
                            <div className='row py-5'>
                                <div className='col'>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Country</option>
                                        <option value="1">India</option>
                                        <option value="2">Pakistan</option>
                                        <option value="3">US</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>State</option>
                                        <option value="1">Bihar</option>
                                        <option value="2">UP</option>
                                        <option value="3">MP</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <input placeholder='Zip'></input>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary py-2"
                                onClick={() => navigate('/payment')}
                            >Continue to checkout</button>
                        </div>
                    </div>

                    <div className='col md-4 '>
                        <div className='card px-5' >
                            <div className='row py-1'>
                                <div className='col text-muted'>
                                    <h2>Your Cart</h2>
                                </div>
                                <div className='col text-muted'>
                                    <h2>{cart.length}</h2>
                                </div>
                            </div>
                            {cart.map((product) => {
                                return <div className='row py-1' key={product.id}>
                                    <div className='col'>
                                        <h6>{product.name}</h6>
                                    </div>
                                    <div className='col'>
                                        <span className='text-muted'>{product.quantity}<i class="fa fa-close"></i>
                                            {product.price}={product.total}</span>
                                    </div>
                                </div>
                            })}
                            <div className='row py-1'>
                                <div className='col'>
                                    <h6 className='text-muted'>Total</h6>
                                </div>
                                <div className='col'>
                                    <h6 className='text-muted'>{totalprice}</h6>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div> */}

            <div className='container-sm my-4'>
                <div className='row justify-content-center py-2' >
                    <div className='col-6'>
                        <h6>Billing Address</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        <select className="form-select" style={{height : '35px'}}>
                            <option selected>Country</option>
                            <option value="1">India</option>
                            <option value="2">Pakistan</option>
                            <option value="3">US</option>
                        </select>
                        <label>Full Name</label>
                        <input type='text' className='form-control' style={{height : '35px'}}
                        name ='name'
                        onChange={(e)=>setFieldData((prevstate)=>{
                            return {...prevstate, name : e.target.value}
                        })}
                        ></input>
                        {!isName && <p className='text-danger'>Please fill your name</p>}
                        <label>Mobile Number</label>
                        <input type='number' className='form-control' style={{height : '35px'}}
                        onChange={(e)=>setFieldData((prevstate)=>{
                            return {...prevstate, mobile : e.target.value}
                        })}
                        ></input>
                        {!isMobile && <p className='text-danger'>Mobile number should be of 10 digit number and not empty</p>}
                        <label>Pincode</label>
                        <input type='number' className='form-control' style={{height : '35px'}}
                        onChange={(e)=>setFieldData((prevstate)=>{
                            return {...prevstate, pin : e.target.value}
                        })}
                        ></input>
                        {!isPin && <p className='text-danger'>Pin code must be of 6 digit number and not empty</p>}
                        <label>Flat, House no., Building, Company, Apartment</label>
                        <input type='text' className='form-control' style={{height : '35px'}}></input>
                        <label>Area, Street, Sector, Village</label>
                        <input type='text' className='form-control' style={{height : '35px'}}></input>
                        <label>Landmark</label>
                        <input type='text' className='form-control' style={{height : '35px'}} placeholder='E.g near applo hospital'></input>
                        <div className='row'>
                            <div className='col'>
                                <label>Town/City</label>
                                <input type='text' className='form-control' style={{height : '35px'}}></input>
                            </div>
                            <div className='col'>
                                <label>State</label>
                            <select className="form-select">
                            <option selected>Choose state</option>
                            <option value="1">Bihar</option>
                            <option value="2">UP</option>
                            <option value="3">MP</option>
                        </select>
                            </div>
                        </div>
                        <input className="form-check-input" type="checkbox" id="checkRemember"/>
                        <label className="form-check-label px-2" for="checkRemember"/>Make this my default address
                        <p>Preferences are used to plan your delivery. However, shipments can 
                            sometimes arrive early or later than planned.</p>
                        <label>Address Type</label>
                        <select className="form-select">
                            <option selected>Select an adress type</option>
                            <option value="1">Home (7am to 9pm delivery)</option>
                            <option value="2">Office/Commercial (10am to 6pm delivery)</option>
                        </select>
                        <div className='my-3'>
                        <button className="btn btn-primary "
                        onClick={handleClick}
                        >Use this adress</button>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='card py-3'>
                            <div className='row justify-content-center my-2'>
                                <div className='col-5'>
                                    <h3>Your Cart</h3>
                                </div>
                                <div className='col-5'>
                                    <h3>{cart.length}</h3>
                                </div>
                            </div>
                            {cart.map((product) => {
                                return <div className='row justify-content-center my-2' key={product.id} >
                                    <div className='col-5'>
                                        <h6>{product.name}</h6>
                                    </div>
                                    <div className='col-5'>
                                        <span>{product.quantity}<i class="fa fa-close"></i>
                                            {product.price}={product.total}</span>
                                    </div>
                                </div>
                            })}
                            <div className='row justify-content-center'>
                                <div className='col-5'>
                                    <h6>Total</h6>
                                </div>
                                <div className='col-5'>
                                    <h6>{totalprice}</h6>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-6'>
                                    <button className="btn btn-primary"
                                    onClick={() => navigate('/payment')}
                                    >Proceed To Buy</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummary