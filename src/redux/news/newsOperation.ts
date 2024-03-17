import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (data: number, thunkAPI) => {
    try {
      const response = await axios.get(`/news?limit=${data === 0 ? 1 : data}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface IgetNews {
  filter: string | undefined;
  page: number;
}

export const getNews = createAsyncThunk(
  'news/getNews',
  async (data: IgetNews, thunkAPI) => {
    try {
      const response = await axios.get(`/news?keyword=${data.filter? data.filter : ""}&page=${data.page}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const setFilterValue = createAsyncThunk(
  'news/searchFilter',
  async (value: string, thunkAPI) => {
    try {
      if (value) {
        return value;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
