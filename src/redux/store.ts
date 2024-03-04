import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/newsReducer';
import { friendsReducer } from './friends/friendsReducer';


export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
  } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

