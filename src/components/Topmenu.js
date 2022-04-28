import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

//style={{ overflow : 'hidden',position :'fixed', left : '0',width : '100%'}}

const TopMenu = () => {
  const [show,setShow] = useState(false);
  function close(){
    setShow(!show);
  }
  return (
    <React.Fragment>  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 px-0"  >

        <div className="container-fluid">
          <button className="navbar-toggler" type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent15"
            aria-controls="navbarSupportedContent15"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
            >
            <span className="navbar-toggler-icon" onClick={()=>setShow(!show)}></span></button>
            <Modal isOpen = {show}>
              <Hamburger onClose={close}/>
            </Modal>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span className="navbar-brand">E-Commerce</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle font-weight-bold"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  All Pages
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className='dropdown-item'>
                    <Link to='/login' style={{ textDecoration: 'none' }}>Sign In</Link>
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/register' style={{ textDecoration: 'none' }}> Sign Up</Link>

                  </li>
                  <li className='dropdown-item'>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className='dropdown-item'>
                    <Link to='/productlist' style={{ textDecoration: 'none' }}>Product List Page</Link>

                  </li>
                  <li className='dropdown-item'>
                    <Link to='/cartlist' style={{ textDecoration: 'none' }}>Cart Page</Link>

                  </li>
                  <li className='dropdown-item'>
                    Contact Us
                  </li>

                </ul>
              </li>
              <li className="nav-item nav-link">
                Fashion
              </li>
              <li className="nav-item nav-link">
                Supermarket
              </li>
              <li className="nav-item nav-link">
                Electronics
              </li>
              <li className="nav-item nav-link">
                Furniture
              </li>

              <li className="nav-item nav-link">
                Jewellery
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    </React.Fragment>
  );
};

export default TopMenu;
