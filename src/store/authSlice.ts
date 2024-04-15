import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

export interface IRequest {
  username: string;
}

interface IInitialState {
  username: string;
}

const initialState: IInitialState = {
  username: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<IRequest>) {
      state.username = action.payload.username;
    },
  },
});

export const selectAuth = (state: IRootState) => state.authSlice.username;

export const { setUsername } = authSlice.actions;
