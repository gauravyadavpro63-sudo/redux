import {configureStore} from "@reduxjs/toolkit"
import slice1reducer from "./slice1"

const stores=configureStore({
    reducer:{
        slice1:slice1reducer
    }
})

export default stores; 