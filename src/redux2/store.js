import { configureStore } from "@reduxjs/toolkit";
import countreducer from "./slices/countslice";
let store=configureStore({
    reducer:{
counter:countreducer
    }
})
export default store;