
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

export interface IRequest {
  enabled: boolean;
}

interface IInitialState {
  enabled: boolean;
}

const initialState: IInitialState = {
  enabled: localStorage.getItem('devMode') === 'true',
};

export const requestDevMode = createSlice({
  name: 'devMode',
  initialState,
  reducers: {
    setDevMode(state, action: PayloadAction<boolean>) {
      state.enabled = action.payload;
    },
  },
});

export const selectDevMode = (state: IRootState) => state.devMode.enabled;

export const { setDevMode } = requestDevMode.actions;