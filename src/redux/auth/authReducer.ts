import { createSlice } from '@reduxjs/toolkit';
import { logout, signIn, signUp, userRefresh } from './authOperations';

interface IAuthSlice {
  isLoading: boolean;
  isLoggedin: boolean;
  isRefreshing: boolean;
  token: string | null;
  user: {
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
}

const initialState: IAuthSlice = {
  isLoading: false,
  isLoggedin: false,
  isRefreshing: false,
  token: '',
  user: {
    name: '',
    email: '',
    phone: '+380',
    avatar: '',
  },
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;

        state.token = action.payload.token;
        state.isLoggedin = true;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(userRefresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userRefresh.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.isRefreshing = false;
        state.isLoggedin = true;
      })
      .addCase(userRefresh.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user.name = '';
        state.user.email = '';
        state.isLoggedin = false;
        state.token = null;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = AuthSlice.reducer;
