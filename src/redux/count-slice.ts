import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {
  TCountSliceState,
  TSetCount,
  TSetEditMode,
  TSetError,
  TSetMaxValue,
  TSetMinValue
} from "../interfaces/interfaces";


export const initialState: TCountSliceState = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    error: false,
    editMode: true,
};

export const saveLS = createAsyncThunk(
  'countSlice/saveLS',
  async (store: TCountSliceState, {dispatch}) => {
    localStorage.setItem('counter', JSON.stringify(store));
    dispatch(setStateLS(store));
  }
);

export const loadLS = createAsyncThunk(
  'countSlice/loadLS',
  async (_, {dispatch}) => {
    const count = localStorage.getItem('counter')
    count && dispatch(getStateLS(JSON.parse(count)))
  }
);

const countSlice = createSlice({
  name: 'countSlice',
  initialState: initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<TSetMinValue>) => ({
      ...state, minValue: action.payload.minValue
    }),
    setMaxValue: (state, action: PayloadAction<TSetMaxValue>) => ({
      ...state, maxValue: action.payload.maxValue
    }),
    setCount: (state, action: PayloadAction<TSetCount>) => ({
      ...state, count: action.payload.count
    }),
    setEditMode: (state, action: PayloadAction<TSetEditMode>) => ({
      ...state, editMode: action.payload.editMode
    }),
    setError: (state, action: PayloadAction<TSetError>) => ({
      ...state, error: action.payload.error
    }),
    setStateLS: (state, action: PayloadAction<TCountSliceState>) => {
      return {
        ...state,
          minValue: action.payload.minValue,
          maxValue: action.payload.maxValue,
          count: action.payload.minValue,
          editMode: false,
          error: action.payload.error
      }
    },
    getStateLS: (state, action: PayloadAction<TCountSliceState>) => {
      return {
        ...state,
          minValue: action.payload.minValue,
          maxValue: action.payload.maxValue,
          count: action.payload.count,
          editMode: false,
          error: action.payload.error
      }
    }
  },
});

export const {setMinValue, setMaxValue, setCount, setEditMode, setError, setStateLS, getStateLS} = countSlice.actions;
export default countSlice.reducer;
