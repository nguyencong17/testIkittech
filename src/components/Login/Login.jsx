import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StorageKeys from "../../constants/storage-keys";
import { getToken } from '../tokenSlice';
import { login, profile } from '../userSlice';
Login.propTypes = {

};

function Login() {
    //const [tokenUser,setTokenUser] = useState("");
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const initState = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initState)
    const { email, password } = user

    const dispatch = useDispatch()

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        try {
            // if(StorageKeys.TOKEN){
            //     const token = localStorage.getItem(StorageKeys.TOKEN);
            //     const actionToken = profile(token);
            //     const resultActionToken = await dispatch(actionToken);
            //     const profileLogin = unwrapResult(resultActionToken);
            //     console.log("User Logged In : ", profileLogin);
            // }
            const action = login(user);
            const resultAction = await dispatch(action);
            setUser({ ...user, err: '', success: resultAction.msg });
            const userLogin = unwrapResult(resultAction);
            console.log("User Login : ", userLogin);

                        // set token to Redux
            // const action2 = getToken(userLogin.token);
            // dispatch(action2);
            // console.log(action2)

        } catch (err) {
            console.log(err);
        }
    }
    const handleshowName = async () => {
        const token = localStorage.getItem(StorageKeys.TOKEN);
        const actionToken = profile(token);
        const resultActionToken = await dispatch(actionToken);

        const profileLogin = unwrapResult(resultActionToken);
        console.log("Profile User Login", profileLogin)
    }
    return (
        <div className="login_page">
            <h2>Login</h2>
            {/* {err && showError(err)}
            {success && showSuccess(success)} */}
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' id='email2' placeholder='Enter email address' value={email} onChange={handleOnChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' id='password2' placeholder='Enter password' value={password} onChange={handleOnChange} />
                </div>
                <div>
                    <button type='submit' >Đăng nhập</button>
                </div>
            </form>
            <button onClick={handleshowName}>Hiển thị tên </button>
            {!isLoggedIn && (
                <h2>Bạn Hãy Đăng Nhập</h2>
            )}
            {isLoggedIn && (
                <h2>Xin Chào </h2>
            )}
        </div>
    );
}

export default Login;