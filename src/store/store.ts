import { configureStore } from '@reduxjs/toolkit';

import { aboutSlice } from './aboutSlice';
import { requestActiveLink } from './activeLinkSlice';
import { argsFixingSlice } from './argsFixingSlice';
import { commonSlice } from './commonSlice';
import { requestHistorySlice } from './requestHistorySlice';

export const store = configureStore({
  reducer: {
    [aboutSlice.name]: aboutSlice.reducer,
    [commonSlice.name]: commonSlice.reducer,
    [requestHistorySlice.name]: requestHistorySlice.reducer,
    [argsFixingSlice.name]: argsFixingSlice.reducer,
    [requestActiveLink.name]: requestActiveLink.reducer,
  },
});
