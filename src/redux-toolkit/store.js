import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux-toolkit/authSlice'

export const store = configureStore({
    devTools: true,
    reducer: authReducer
})