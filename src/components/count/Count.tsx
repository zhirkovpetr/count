import React from "react";

import {Button} from "../button/Button";

import './Count.css';

type CountPropsType = {
  minValue: number
  maxValue: number
  count: number
  setCount: (count: number) => void
  //errorValue: boolean
  //setErrorValue: (errorValue: boolean) => void
}

export const Count: React.FC<CountPropsType> = (props) => {
  let {minValue, maxValue, count, setCount} = props


  const onClickIncrease = () => {
    if(count < maxValue) {
      setCount(count + 1)
    }
  }

  const onClickReset = () => {
    setCount(minValue)
  }

  return (
    <div className={'count-block'}>
      <div className={'count-screen'}>
        <div className={'value'}>
          <span className={count === maxValue ? 'active' : ''}>{count}</span>
        </div>
      </div>
      <div className={'count-button'}>
        <Button title={'inc'} onClick={onClickIncrease} disabled={count === maxValue}/>
        <Button title={'reset'} onClick={onClickReset} disabled={count === minValue}/>
      </div>
    </div>
  )
}
