import React, {useEffect, useState} from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";

import './App.css';

export const App: React.FC = () => {
  let [minValue, setMinValue] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(5)
  let [count, setCount] = useState<number>(0)
  let [error, setError] = useState<boolean>(false)
  let [editMode, setEditMode] = useState<boolean>(true)

  useEffect(() => {
      let valueAsString = localStorage.getItem('minValue')
      if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setMinValue(newValue)
      }
    }
    , [])

  useEffect(() => {
      let valueAsString = localStorage.getItem('maxValue')
      if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setMaxValue(newValue)
      }
    }
    , [])

  useEffect(() => {
    let countString = localStorage.getItem("count")
    if (countString) {
      let countNumber = JSON.parse(countString)
      setCount(countNumber)
    }
  }, [])

  useEffect(() => {
    let editMode = localStorage.getItem("editMode")
    if (editMode) {
      let editModeLS = JSON.parse(editMode)
      setEditMode(editModeLS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('minValue', JSON.stringify(minValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem("editMode", JSON.stringify(editMode));
    localStorage.setItem("count", JSON.stringify(minValue));
  }, [minValue, maxValue, editMode])

  return (
    <div className="App">
      <SetCount minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setCount={setCount}
                editMode={editMode}
                setEditMode={setEditMode}
                error={error}
                setError={setError}
      />
      <Count minValue={minValue}
             maxValue={maxValue}
             count={count}
             setCount={setCount}
             editMode={editMode}
             error={error}
      />
    </div>
  );
}
