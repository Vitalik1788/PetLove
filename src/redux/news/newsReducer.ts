import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './newsOperation';

interface INewsSlice {
  news: Array<object>;
  isLoading: boolean;
  perPage: number;
  totalPages: number;
}

const initialState: INewsSlice = {
  news: [],
  isLoading: false,
  perPage: 0,
  totalPages: 0,
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.news = action.payload.results;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const newsReducer = NewsSlice.reducer;
