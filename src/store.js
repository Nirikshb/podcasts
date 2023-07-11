//import export the store
import {configureStore} from "@reduxjs/toolkit";

import userReducer from './slices/userSlice';
//reducer has actions as well as states to set and state data  

export default configureStore({
    reducer : {
        user : userReducer,
        
    },
});