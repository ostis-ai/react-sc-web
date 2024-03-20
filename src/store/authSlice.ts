import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

export interface IRequest {
  isAuthorised: boolean;
}

interface IInitialState {
  isAuthorised: boolean;
}

const initialState: IInitialState = {
  isAuthorised: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsAuthorised(state, action: PayloadAction<IRequest>) {
      state.isAuthorised = action.payload.isAuthorised;
    },
  },
});

export const selectIsAuthorised = (state: IRootState) => state.authSlice.isAuthorised;

export const { setIsAuthorised } = authSlice.actions;
