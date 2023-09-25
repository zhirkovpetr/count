import React, {ChangeEvent} from "react";

import './SetCount.css';

type SetCountPropsType = {
  minValue: number
  maxValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
  setCount: (count: number) => void
}

export const SetCount: React.FC<SetCountPropsType> = (props) => {
  let{ minValue, maxValue, setMinValue, setMaxValue, setCount } = props

  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value))
  }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value))
  }

  const onSetValue = () => {
    setMinValue(minValue)
    setMaxValue(maxValue)
    setCount(minValue)
  }

  return (
    <div className={'set-count-block'}>
      <div className={'set-count-screen'}>
        <div className={'max-value'}>
          <span>max value: </span>
          <input type={'number'} value={maxValue} onChange={onChangeMaxValue}/>
        </div>
        <div className={'start-value'}>
          <span>start value: </span>
          <input type={'number'} value={minValue} onChange={onChangeMinValue}/>
        </div>
      </div>
      <div className={'set-count-button'}>
        <button onClick={onSetValue}>set</button>
      </div>
    </div>
  )
}
