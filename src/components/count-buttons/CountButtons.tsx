import React from "react";

import {Button} from "../button/Button";

import './CountButtons.css';

type CountButtonsPropsType = {
  minValue: number
  maxValue: number
  count: number
  editMode: boolean
  error: boolean
  updateCount: (count: number) => void
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  const {count, minValue, maxValue, error, editMode, updateCount} = props

  const increase = () => {
    updateCount(count + 1);
  }

  const reset = () => {
    updateCount(minValue)
  }

  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={increase} disabledButton={count === maxValue || error || editMode}/>
      <Button title={'reset'} onClick={reset} disabledButton={count !== maxValue || error || editMode}/>
    </div>
  )
}
