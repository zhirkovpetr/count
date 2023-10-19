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
  let {count, minValue, maxValue, error} = props.counter

  const increase = () => {
    updateCount(count + 1);
  }

  const reset = () => {
    updateCount(minValue)
  }

  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={increase} disabledButton={count === maxValue || error}/>
      <Button title={'reset'} onClick={reset} disabledButton={count !== maxValue || error}/>
    </div>
  )
}
