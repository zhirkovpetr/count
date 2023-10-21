import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {
  TAppDispatch,
  TCountSliceState,
  TGetCounter,
  TSetCount,
  TSetCounter,
  TSetEditMode,
  TSetError,
  TSetMaxValue,
  TSetMinValue
} from "../interfaces/interfaces";


export const initialState: TCountSliceState = {
  counter: {
    minValue: 0,
    maxValue: 5,
    count: 0,
    error: false,
    editMode: true,
  }
};

const countSlice = createSlice({
  name: 'countSlice',
  initialState,
  reducers: {
    setMinValue: (state, action: PayloadAction<TSetMinValue>) => ({
      ...state, counter: {
        ...state.counter, minValue: action.payload.minValue,
      }
    }),
    setMaxValue: (state, action: PayloadAction<TSetMaxValue>) => ({
      ...state, counter: {
        ...state.counter, maxValue: action.payload.maxValue,
      }
    }),
    setCount: (state, action: PayloadAction<TSetCount>) => ({
      ...state, counter: {
        ...state.counter, count: action.payload.count,
      }
    }),
    setEditMode: (state, action: PayloadAction<TSetEditMode>) => ({
      ...state, counter: {
        ...state.counter, editMode: action.payload.editMode,
      }
    }),
    setError: (state, action: PayloadAction<TSetError>) => ({
      ...state, counter: {
        ...state.counter, error: action.payload.error,
      }
    }),
    setStateLS: (state, action: PayloadAction<TSetCounter>) => {
      return {...state, counter: {
       ...state.counter,
         minValue: action.payload.minValue,
         maxValue: action.payload.maxValue,
         count: action.payload.minValue,
         editMode: false,
         error: action.payload.error
       }}
    },
    getStateLS: (state, action: PayloadAction<TGetCounter>) =>{
      return {...state, counter: {
        ...state.counter,
          minValue: action.payload.minValue,
          maxValue: action.payload.maxValue,
          count: action.payload.minValue,
          editMode: true,
          error: action.payload.error
        }}
    }
  }
});

export const saveLS = (store: TCountSliceState): any => (dispatch: TAppDispatch) => {
  localStorage.setItem('counter', JSON.stringify(store))
  dispatch(setStateLS(store.counter))
}

export const loadLS = (): any => (dispatch: TAppDispatch) => {
  const count = localStorage.getItem('counter')
  count && console.log(JSON.parse(count))
  count && dispatch(getStateLS(JSON.parse(count).counter))
}

export const {setMinValue, setMaxValue, setCount, setEditMode, setError, setStateLS, getStateLS} = countSlice.actions;
export default countSlice.reducer;
