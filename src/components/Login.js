import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import '../style/login.css';
import { async } from '@firebase/util';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            dispatch({
                type: 'AUTH_HANDLE',
                payload: true,
            });
            navigate('/productlist');

        }
    }, [user, loading]);

//    function  handleChange() {
//        let ladmin = false;
//         checkAdmin()
//         .then(res=>ladmin = res);
//       //console.log('check admin',admin);
//         if (ladmin) {
//             setCheck((prevstate) => !prevstate);
//             dispatch({
//                 type: 'ADMIN_CHECK',
//                 payload: check
//             });

//         } else {
//             alert("opps! you are not admin");

//         }

//     }


    return (
        <div className='form-container'>
            <label>Email </label>
            <input
                type='text'
                className='login-text-box'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder='Email Adress'
            />
            <label>Password  </label>
            <input
                type="password"
                className="login-text-box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />

            <button
                className="login-btn"
                onClick={() => logInWithEmailAndPassword(email, password)}
            >
                Login
            </button>

            Don't have account ? <Link to='/register' >Register</Link>now.
        </div>

    )
}

export default Login