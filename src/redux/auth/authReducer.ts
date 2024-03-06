import { createSlice } from '@reduxjs/toolkit';

interface IAuthSlice {
  isLoading: boolean;
  isLoggedin: boolean;
  isRefreshing: boolean;
  token: string;
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
    builder;
  },
});

export const authReducer = AuthSlice.reducer;
