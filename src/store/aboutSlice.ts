import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@store/model';

interface AboutState {
  currentText: string | null;
}

const initialState: AboutState = {
  currentText: null,
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setAboutText: (state, action: PayloadAction<string | null>) => {
      state.currentText = action.payload;
    },
    clearAboutText: (state) => {
      state.currentText = null;
    },
  },
});

export const { setAboutText, clearAboutText } = aboutSlice.actions;

export const selectCurrentAboutText = (state: IRootState): string | null => state.about.currentText;

export default aboutSlice.reducer;
