import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice.js"

const store = configureStore(
    {
        reducer:{
            auth: authSlice,
            // todo : add more 
        }
    }
)

export default store;