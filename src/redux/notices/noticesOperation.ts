import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const getCategory = createAsyncThunk(
  'notices/getCategory',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/categories');
      return response.data;
    } catch (error) {}
  }
);

export const getGender = createAsyncThunk(
  'notices/getGender',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/notices/sex');
      return response.data;
    } catch (error) {}
  }
);
