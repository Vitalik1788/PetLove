import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/newsReducer';
import { friendsReducer } from './friends/friendsReducer';
import { authReducer } from './auth/authReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { noticesReducer } from './notices/noticesReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const reducers = combineReducers({
  news: newsReducer,
  friends: friendsReducer,
  notices: noticesReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
