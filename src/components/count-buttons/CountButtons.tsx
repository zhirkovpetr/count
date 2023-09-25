import React from "react";

import {Button} from "../button/Button";

import './CountButtons.css';

type CountButtonsPropsType = {
  editMode: boolean
  maxValue: number
  minValue: number
  count: number
  setCount: (count: number) => void
  error: boolean
}

export const CountButtons: React.FC<CountButtonsPropsType> = (props) => {
  let{ editMode, count, maxValue, minValue, setCount, error} = props

  const onClickIncrease = () => {
    if(count < maxValue) {
      setCount(count + 1)
    }
  }

  const onClickReset = () => {
    setCount(minValue)
  }
  return (
    <div className={'count-button'}>
      <Button title={'inc'} editMode={editMode} maxValue={maxValue} minValue={minValue} onClick={onClickIncrease} disaebledButton={count === maxValue || error} error={error}/>
      <Button title={'reset'} editMode={editMode} maxValue={maxValue} minValue={minValue} onClick={onClickReset} disaebledButton={count !== maxValue || error} error={error}/>
    </div>
  )
}
