import React, { useState } from 'react';

import { registerUser } from '../../actions/authActions';

import { useSelector, useDispatch } from 'react-redux';

const Register = (props) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const emailError = useSelector((state) => state.errors.email);
    const passwordLength = useSelector((state) => state.errors.passwordLength);
    const passwordCapitalLetter = useSelector((state) => state.errors.passwordCapitalLetter);
    const passwordNumber = useSelector((state) => state.errors.passwordNumber);
    const passwordSmallLetter = useSelector((state) => state.errors.passwordSmallLetter);
    const password2 = useSelector((state) => state.errors.password2);
    const nameError = useSelector((state) => state.errors.name);

    let [name, setName] = useState('');
    const handleNameChange = event => {
        setName(event.target.value);
    };

    let [email, setEmail] = useState('');
    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    let [password, setPassword] = useState('');
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    let [confirmPassword, setConfirmPassword] = useState('');
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name: name,
            email: email,
            password: password,
            password2: confirmPassword
        }

        dispatch(registerUser(userData, props.history))
    }

    if (isAuthenticated) {
        window.location.href = "/";
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input className='form-control mt-1'
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleNameChange}
                    />
                    <span>{nameError} </span>
                    <input className='form-control mt-1'
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={handleEmailChange}
                        aria-describedby='emailHelp'
                    />
                    <span>{emailError} </span>
                    <input
                        className='form-control mt-1'
                        type='password' name='password'
                        placeholder='password'
                        onChange={handlePasswordChange}
                    />
                    <span className='error'>{passwordLength}</span>
                    <span className='error'>{passwordCapitalLetter}</span>
                    <span className='error'>{passwordNumber}</span>
                    <span className='error'>{passwordSmallLetter}</span>
                    <input
                        className='form-control mt-1'
                        type='password' name='password2'
                        placeholder='Confirm password'
                        onChange={handleConfirmPasswordChange}
                    />
                    <span className='error'>{password2}</span>
                    <div className=' flex justify-center'>
                        <input type='submit' className='btn btn-info mt-1r  align-center' />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register