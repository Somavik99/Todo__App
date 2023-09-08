import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "../features/Couunter/CounterSlice"

export const store = configureStore({
    reducer:{
        Counter: CounterReducer,
    }
})