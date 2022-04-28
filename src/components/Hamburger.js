import React from 'react';
import { Link } from 'react-router-dom';

const Hamburger = (props) => {
  return (
    <>
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
                  <li className='dropdown-item' onClick={props.onClose}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>Sign In</Link>
                  </li>
                  <li className='dropdown-item' onClick={props.onClose}>
                    <Link to='/register' style={{ textDecoration: 'none' }}> Sign Up</Link>

                  </li>
                  <li className='dropdown-item'>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className='dropdown-item' onClick={props.onClose}>
                    <Link to='/productlist' style={{ textDecoration: 'none' }}>Product List Page</Link>

                  </li>
                  <li className='dropdown-item' onClick={props.onClose}>
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
    </>
  )
}

export default Hamburger