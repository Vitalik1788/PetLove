import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect } from 'next/navigation';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

interface Isignup {
  name: string;
  email: string;
  password: string;
};

interface Isignin {
  email: string;
  password: string;
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (data: Isignup, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', data);
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
