import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (data: number, thunkAPI) => {
    try {
      const response = await axios.get(`/news?page=${data}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
