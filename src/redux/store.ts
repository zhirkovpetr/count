import {configureStore} from '@reduxjs/toolkit';

import countSlice from './count-slice';

export const store = configureStore({
  reducer: {
    count: countSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
