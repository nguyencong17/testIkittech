import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:'token',
    initialState: '',
    reducers: {
        getToken(state,action){
            return state;
        }
    }
})
const {actions,reducer} = tokenSlice;
export const {getToken} = actions;
export default reducer;