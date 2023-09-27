import React from "react";

import {Button} from "../button/Button";

import './CountButtons.css';

type CountButtonsPropsType = {
  maxValue: number
  minValue: number
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  error: boolean
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  let {count, maxValue, minValue, setCount, error} = props

  const onClickIncrease = () => {
    setCount((prevCount: number) => prevCount + 1);
  }

  const onClickReset = () => {
    setCount(minValue)
  }
  return (
    <div className={'count-button'}>
      <Button title={'inc'} onClick={onClickIncrease} disabledButton={count === maxValue || error}/>
      <Button title={'reset'} onClick={onClickReset} disabledButton={count !== maxValue || error}/>
    </div>
  )
}
