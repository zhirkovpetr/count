import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";

import './Count.css';

type CountPropsType = {
  maxValue: number
  count: number
  editMode: boolean
  error: boolean
  increase: () => void
  reset: () => void
}

export const Count: React.FC<CountPropsType> = (props) => {
  const {maxValue, count, editMode, error, increase, reset} = props

  return (
    <div className={'count-block'}>
      <Screen count={count} editMode={editMode} maxValue={maxValue} error={error}/>
      <CountButtons count={count} maxValue={maxValue} error={error} increase={increase} reset={reset}/>
    </div>
  )
}
