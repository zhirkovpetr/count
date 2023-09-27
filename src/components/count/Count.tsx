import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";

import './Count.css';

type CountPropsType = {
  minValue: number
  maxValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  editMode: boolean
  error: boolean
}

export const Count: React.FC<CountPropsType> = (props) => {
  const {minValue, maxValue, count, setCount, editMode, error} = props

  return (
    <div className={'count-block'}>
      <Screen count={count} editMode={editMode} maxValue={maxValue} error={error}/>
      <CountButtons count={count} setCount={setCount} maxValue={maxValue} minValue={minValue} error={error}/>
    </div>
  )
}
