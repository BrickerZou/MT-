import foodsReducer from './modules/takeaway'
import userReducer from './modules/userStore'
import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
    reducer:{
        foods:foodsReducer,
        users:userReducer
    }
})
export default store;