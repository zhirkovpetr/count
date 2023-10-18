import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<TSetMinValue>) => ({
      ...state,
      minValue: action.payload.minValue,
    }),
    setMaxValue: (state, action: PayloadAction<TSetMaxValue>) => ({
      ...state,
      maxValue: action.payload.maxValue,
    }),
    setCount: (state, action: PayloadAction<TSetCount>) => ({
      ...state,
      count: action.payload.count,
    }),
    setEditMode: (state, action: PayloadAction<TSetEditMode>) => ({
      ...state,
      editMode: action.payload.editMode,
    }),
    setError: (state, action: PayloadAction<TSetError>) => ({
      ...state,
      error: action.payload.error,
    }),
  },
});

export const { setMinValue, setMaxValue, setCount, setEditMode, setError } = countSlice.actions;
export default countSlice.reducer;
