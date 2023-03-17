import React , { useState }  from 'react';
import { loginUser } from '../../actions/authActions';

import { useSelector, useDispatch } from 'react-redux';

const Login = (props)=> {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const emailError = useSelector((state) => state.errors.email);
    const passwordError = useSelector((state) => state.errors.password);

    let [email, setEmail] = useState('');
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    let [password, setPassword] = useState('');
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };
  
    const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          email: email,
          password: password
        }
        
        dispatch(loginUser(userData))
      }
    
    if (isAuthenticated) {
        window.location.href = "/";
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
               <input type='text' name='email' placeholder='email' onChange={handleEmailChange } />
               <span>{emailError}</span>
               <input  type='password' name='password' placeholder='password' onChange={handlePasswordChange } />
               <span>{passwordError}</span>
               <input type='submit' id='btnLogin' className='btn btn-primary' />
            </form>
        </div>
    )
};

export default Login;