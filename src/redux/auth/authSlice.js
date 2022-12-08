import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  fetchCurrentUser,
  registerUser,
} from './authOperations';

const initialState = {
  contacts: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUser.pending, state => state)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => state)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.contacts = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSlice.reducer;
export const getAuth = state => state.auth;
