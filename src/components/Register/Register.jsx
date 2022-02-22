import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';

function Register(props) {
    const initState = {
        name: '',
        email: '',
        phone_number: '',
        password: '',
    }
    const [user, setUser] = useState(initState)
    const { name, email, phone_number, password} = user
    //const history = useHistory();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {

        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const action = register(user);
            const resultAction = await dispatch(action);
            const user1 = unwrapResult(resultAction);
            console.log("New User: ", user1);
        } catch (error) {
            console.log("Failed register", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Name</label>
                    <input type='text' name='name' id='name' placeholder='Enter Full Name' value={name} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' id='email1' placeholder='Enter email address' value={email} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type='text' name='phone_number' id='phone' placeholder='Enter phone number' value={phone_number} onChange={handleOnChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' id='password1' placeholder='Enter password' value={password} onChange={handleOnChange}/>
                </div>
                <div>
                    <button type='submit'>Đăng kí</button>
                </div>
            </form>
        </div>
    );
}

export default Register;