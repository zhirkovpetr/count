import React, {useEffect, useState} from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";

import './App.css';

export const App: React.FC = () => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  const [editMode, setEditMode] = useState(true)

  useEffect(() => {
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
    , [])

  useEffect(() => {
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
  }, [minValue])

  return (
    <div className="App">
      <SetCount
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        setCount={setCount}
        setEditMode={setEditMode}
        error={error}
        setError={setError}
      />
      <Count
        minValue={minValue}
        maxValue={maxValue}
        count={count}
        setCount={setCount}
        editMode={editMode}
        error={error}
      />
    </div>
  );
}
