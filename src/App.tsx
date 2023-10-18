import React from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";
import {useAppDispatch, useAppSelector} from "./hooks/ReduxHooks";
import {setCount, setEditMode, setError, setMaxValue, setMinValue} from "./redux/count-slice";

import './App.css';

export const App: React.FC = () => {
  const { minValue, maxValue, count, error, editMode } = useAppSelector(state => state.countSlice);
  const dispatch = useAppDispatch();

/*  useEffect(() => {
      const minValueAsString = localStorage.getItem('minValue')
      const maxValueAsString = localStorage.getItem('maxValue')
      const countAsString = localStorage.getItem("count")
      const editModeAsString = localStorage.getItem("editMode")

      if (minValueAsString) {
        setMinValue(JSON.parse(minValueAsString))
      }
      if (maxValueAsString) {
        setMaxValue(JSON.parse(maxValueAsString))
      }
      if (countAsString) {
        setCount(JSON.parse(countAsString))
      }
      if (editModeAsString) {
        setEditMode(JSON.parse(editModeAsString))
      }
    }
    , [])*/

/*  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
  }, [minValue])

  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
  }, [maxValue])

  useEffect(() => {
    localStorage.setItem("editMode", JSON.stringify(editMode));
  }, [editMode])

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(minValue));
  }, [minValue])*/


  const updateMinValue = (minValue: number) => {
    dispatch(setMinValue({minValue}))
  }

  const updateMaxValue = (maxValue: number) => {
    dispatch(setMaxValue({maxValue}))
  }

  const updateCount = (count: number) => {
    dispatch(setCount({count}))
  }

  const updateEditMode = (editMode: boolean) => {
    dispatch(setEditMode({editMode}))
  }

  const updateError = (error: boolean) => {
    dispatch(setError({error}))
  }

  const onSetValue = () => {
    updateEditMode(false)
    updateMinValue(minValue)
    updateMaxValue(maxValue)
    updateCount(minValue)
  }

  const increase = () => {
    updateCount(count + 1);
  }

  const reset = () => {
    updateCount(minValue)
  }

  return (
    <div className="App">
      <SetCount
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={updateMinValue}
        setMaxValue={updateMaxValue}
        error={error}
        setError={updateError}
        onSetValue={onSetValue}
      />
      <Count
        maxValue={maxValue}
        count={count}
        editMode={editMode}
        increase={increase}
        reset={reset}
        error={error}
      />
    </div>
  );
}
