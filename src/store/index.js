import foodsReucer from './modules/takeaway'
import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        foods:foodsReucer
    }
})
export default store;