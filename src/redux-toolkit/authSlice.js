import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  auth: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    dispatchAuth: (state, action) => {
      state = {
        ...state, auth: action.payload
      }
    },
    dispatchLoggedIn: (state, action) => {
      state = {
        ...state, isLoggedIn: action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { dispatchAuth, dispatchLoggedIn } = authSlice.actions

export default authSlice.reducer