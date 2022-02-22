import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from '../api/userApi';
import StorageKeys from "../constants/storage-keys";
// //register
export const register = createAsyncThunk('user/register',async (payload) => {
        console.log(payload);
        //call API to register
        const data = await userAPI.register(payload);
        //save data to local storage
        localStorage.setItem(StorageKeys.USER,JSON.stringify(data.data.data));
        console.log(data.data.data);
        //return user data
        return data.data.data;
    }
)
// //login
export const login = createAsyncThunk('user/login',async (payload) => {
    console.log(payload);
    //call API to register
    const data = await userAPI.login(payload);
    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN,data.data.data.token);
    localStorage.setItem(StorageKeys.USER,JSON.stringify(data.data));
    //return user data
    return data.data.data;
}
)
// //Profile
export const profile = createAsyncThunk('user/profile',async (payload) => {

    //call API to register
    const data = await userAPI.profile(payload);
    console.log(data);
    //return user data
    return data.data;
}
)

//
const userSlice = createSlice({
    name:'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) ||  {},
    },
    reducers:{

    },
    extraReducers:{
        //register
        [register.fulfilled]: (state,action) => {
            state.current = action.payload
        },
        //login
        [login.fulfilled]: (state,action) => {
            state.current = action.payload
        },
    }
});

//const { actions, reducer } = userSlice;
const {reducer} = userSlice;
//export const {logout} = actions;
export default reducer;
