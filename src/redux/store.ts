import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/newsReducer';
import additionalMiddleware from 'additional-middleware';
import logger from 'redux-logger';
// @ts-ignore
import untypedMiddleware from 'untyped-middleware';


export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        additionalMiddleware,
        // you can also type middlewares manually
        untypedMiddleware as Middleware<
          (action: Action<'specialAction'>) => number,
          RootState
        >
      )
      // prepend and concat calls can be chained
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

