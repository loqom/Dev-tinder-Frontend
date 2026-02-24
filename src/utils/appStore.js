import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feedSlice";
import  useReducer  from "./userSlice";
const appStore=configureStore({
    reducer:{
        user:useReducer,
        feed:feedReducer,
    },
});
export default appStore;