import React from "react";

import {Button} from "../button/Button";
import {TSetCounter} from "../../interfaces/interfaces";

import './CountButtons.css';

type CountButtonsPropsType = {
  counter: TSetCounter
  updateCount: (count: number) => void
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  let {updateCount} = props
  let {count, minValue, maxValue, error, editMode} = props.counter

  const increase = () => {
    updateCount(count + 1);
    localStorage.setItem('counter', JSON.stringify({ minValue, maxValue, count: count+1, editMode, error }))
  }

  const reset = () => {
    updateCount(minValue)
    localStorage.setItem('counter', JSON.stringify({ minValue, maxValue, count: minValue, editMode: false, error }))
  }

  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={increase} disabledButton={count === maxValue || error || editMode}/>
      <Button title={'reset'} onClick={reset} disabledButton={count !== maxValue || error || editMode}/>
    </div>
  )
}
