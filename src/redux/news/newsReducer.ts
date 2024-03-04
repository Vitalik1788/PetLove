import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './newsOperation';

interface INewsSlice {
  news: Array<object>;  
  isLoading: boolean;
}

const initialState: INewsSlice = {
  news: [],
  isLoading: false,
};

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.news = action.payload;
    })
  }
});

export const newsReducer = NewsSlice.reducer;