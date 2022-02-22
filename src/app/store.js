import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/userSlice';
import tokenReducer from '../components/tokenSlice';
const rootReducer = {
    user: userReducer,
    token: tokenReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;