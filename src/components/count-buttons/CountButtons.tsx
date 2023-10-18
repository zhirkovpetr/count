import React from "react";

import {Button} from "../button/Button";

import './CountButtons.css';

type CountButtonsPropsType = {
  maxValue: number
  count: number
  error: boolean
  increase: () => void
  reset: () => void
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  let {count, maxValue, error, increase, reset} = props

  const onClickIncrease = () => {
    increase();
  }

  const onClickReset = () => {
    reset()
  }
  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={onClickIncrease} disabledButton={count === maxValue || error}/>
      <Button title={'reset'} onClick={onClickReset} disabledButton={count !== maxValue || error}/>
    </div>
  )
}
