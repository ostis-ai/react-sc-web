import { configureStore } from '@reduxjs/toolkit';

import { argsFixingSlice } from './argsFixingSlice';
import { commonSlice } from './commonSlice';
import { requestHistorySlice } from './requestHistorySlice';
import { requestActiveLink } from './activeLinkSlice';
import { authSlice } from './authSlice';
import { requestDevMode } from './devModeSlice';

export const store = configureStore({
  reducer: {
    [commonSlice.name]: commonSlice.reducer,
    [requestHistorySlice.name]: requestHistorySlice.reducer,
    [argsFixingSlice.name]: argsFixingSlice.reducer,
    [requestActiveLink.name]: requestActiveLink.reducer,
    [authSlice.name]: authSlice.reducer,
    [requestDevMode.name]: requestDevMode.reducer,
  },
});
