import React from 'react';
import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from 'react-redux';
import '../style/register.css';
import {
    auth,
    registerWithEmailAndPassword,

} from '../firebase';
//import { useSelector } from 'react-redux';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const isLogedin = useSelector(state=>state.product.isLogedin);
//  console.log('islogedin from register',isLogedin);

  const register = ()=>{
      if(!name || !email || !password ) alert('Please enter data');
      registerWithEmailAndPassword(name,email,password);
  };

  useEffect(()=>{
      if(loading)
        return;
      if(user){
        dispatch({
          type: 'AUTH_HANDLE',
          payload: true,
      });
        navigate('/productlist');
      }
  },[user,loading]);

  return (
    <div className='form-container'>
        <label>Name </label>
            <input
                type= 'text'
                className = "login-text-box"
                value={name}
                onChange = {(e)=>setName(e.target.value)}
                placeholder = 'Full Name'
            />
            <label>Email </label>
            <input
               type="text"
               className="login-text-box"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="E-mail Address"
        />
         <label>Password  </label> 
          <input
              type="password"
              className="login-text-box"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             placeholder="Password"
        /> <br/>
         <button className='login-btn' onClick={register}>
          Register
        </button>
          Already have an account? <Link to="/login">Login</Link> now.

    </div>
  )
}

export default Register