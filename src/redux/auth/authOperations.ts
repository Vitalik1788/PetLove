import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

interface Isignup {
  name: string;
  email: string;
  password: string;
}

interface Isignin {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  'auth/signup',
  async (data: Isignup, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (data: Isignin, thunkAPI) => {
    try {
      const response = await axios.post('/users/signin', data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState() as RootState;

    if (!auth.token) {
      return thunkAPI.rejectWithValue('Error, no valid token');
    }
    setAuthHeader(auth.token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/signout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getFullCurrentUser = createAsyncThunk(
  'auth/getFullUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/current/full');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
