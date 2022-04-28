import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import ProductModal from './ProductModal';
import { logOut } from '../firebase';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal/lib/components/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Inventory = () => {
  const [cproduct, setCroduct] = useState({});
  const [docid, setDocid] = useState('');
  const [productlist, setProductlist] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const getIdOfProduct = async (productid) => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      if (doc.data().name === productid) {
        setDocid(doc.id);
      }
    });
  }



  function fetchProduct() {
    axios.get('https://us-central1-fir-auth-47465.cloudfunctions.net/products')
      .then(res => setProductlist(res.data))
      .catch(err => console.log(err));
  }
  useEffect(() => {
    fetchProduct();
  }, [productlist]);
  //console.log(productlist);
  function postProduct(product) {
    product.id = doc.id;
    axios.post('https://us-central1-fir-auth-47465.cloudfunctions.net/products', product);
  }
  // console.log(product);
  const updateProduct = (product) => {
    product.id = docid;
    axios.put(`https://us-central1-fir-auth-47465.cloudfunctions.net/products/${docid.trim()}`, product);

  }
  const deleteProduct = () => {
    axios.delete(`https://us-central1-fir-auth-47465.cloudfunctions.net/products/${docid.trim()}`);

  }
  function handleEdit(product) {

    setShow(true);
    getIdOfProduct(product.name);
    setCroduct(product);
    // console.log(docid);

  }
  function handleDelete(productid) {
    getIdOfProduct(productid);
    deleteProduct();

  }
  function handleUpdate(item) {
    if (item.name === '' || item.price === '' || item.quantity === '') {
      alert('Please fill the product details');
      return;
    }

    updateProduct(item);
    setShow(false);
    setCroduct({});
    //console.log("docid :"+docid);

  }
  function addNewProduct(product) {
    setCroduct({});
    if (product.name === '' || product.price === '' || product.quantity === '') {
      alert('Please fill the product details');
      return;
    }
    postProduct(product);
    setShow(false);

  }
  function handleLogout() {
    logOut();
    navigate('/');
    dispatch({
      type: 'AUTH_HANDLE',
      payload: false
    });
  }



  return (
    <>
      {/* <div className='product-container' style={{ width: '100%' }}>
        <table className='products'>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {productlist.map(product => {
            return <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td><i className='far fa-edit' onClick={() => handleEdit(product)}></i></td>
              <td><i className='fa fa-trash' onClick={() => handleDelete(product.name)}></i></td>
            </tr>
          })}
        </table>
      </div> */}
      <div className='container py-3'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {productlist.map((product)=>{
            return <tr key={product.id}>
            <th>{product.name}</th>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><i className='far fa-edit' onClick={() => handleEdit(product)}></i></td>
            <td><i className='fa fa-trash' onClick={() => handleDelete(product.name)}></i></td>
          </tr>
          })}
          
          
        </tbody>
      </table>
      </div>
      <Modal isOpen={show} style={customStyles}>
        <ProductModal onclick={handleUpdate} citem={cproduct} addNew={addNewProduct} />
      </Modal>
      <div className='container' style={{paddingBottom : '3rem'}}>
        <div className='row justify-content-center'>
          <div className='col-3'>
            <button className='btn btn-danger' onClick={() => { setShow(true); setCroduct({}) }}>Add New Product</button>
          </div>
        </div>
      </div>

    </>

  )
}

export default Inventory