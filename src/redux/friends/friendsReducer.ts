import { createSlice } from '@reduxjs/toolkit';
import { getFriends } from './friendsOperation';

interface IFriendsSlice {
  friends: Array<object>;
  isLoading: boolean;
}

const initialState: IFriendsSlice = {
  friends: [],
  isLoading: false,
};

const FriendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
    })
  },
});

export const friendsReducer = FriendsSlice.reducer;
