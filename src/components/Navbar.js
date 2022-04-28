import React from 'react';
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../firebase';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../firebase';
import { query,collection,where,getDocs, QuerySnapshot } from 'firebase/firestore';


const Navbar = () => {
    const [admin,setAdmin] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user,loading,error] = useAuthState(auth);
    const cart = useSelector(state=>state.product.cart);
    const checkAdmin = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
          if (doc.data().admin === 'true' && doc.data().uid === user?.uid) {
            //console.log(user?.uid);
              setAdmin(true);
              return;
              //console.log(admin);
          }else{
            //setAdmin(false);
          }
      });
    }
   //console.log(admin);
    function handleLogout(){
        logOut(); 
      dispatch({
        type : 'AUTH_HANDLE',
        payload : false
      });
      navigate('/');
    }
    useEffect(()=>{
      checkAdmin();
     },[user,loading,admin]);
     //style={{overflow : 'hidden',position : 'fixed',width : '100%'}}
  return (
    <>
    
      <nav className='py-3' >

        <ul className="nav justify-content-end ">
          <li>
          </li>
          <li className="nav-item px-5">
              <Link to = '/cartlist'>
                  <div className='btn btn-primary'>
                  <IconCart3 className="i-va " />
                  <div className=" top-5 left-100  translate-middle badge bg-danger rounded-circle">
                    {cart.length}
                  </div>
                  </div>
                  </Link>
                
                
  
          </li>
          <li className="nav-item px-5">
            <div className="btn-group">
              <div className='dropdown'>
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle border mr-3 dropdown-toogle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                >
                  <FontAwesomeIcon icon={faUser} className="text-light" />
                </button>
                <ul className='dropdown-menu'>
                  <li className='dropdown-item'>Profile</li>
                  <li className='dropdown-item'><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
                  <li className='dropdown-item' onClick={handleLogout}>Logout</li>
                  {admin && <li className='dropdown-item'><Link to='/inventory' style={{ textDecoration: 'none' }}>Inventory</Link></li>}
                </ul>
                </div>
                </div>
                
            
          </li>
          <li className="nav-item">
          
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar