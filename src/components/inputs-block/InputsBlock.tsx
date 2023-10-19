import React, {useEffect} from "react";

import {Input} from "../input/Input";
import {setError} from "../../redux/count-slice";
import {useAppDispatch} from "../../hooks/ReduxHooks";

import './InputsBlock.css';

type InputsBlockPropsType = {
  error: boolean
  maxValue: number
  minValue: number
  setMinValue: (minValue: number) => void
  setMaxValue: (maxValue: number) => void
}

export const InputsBlock: React.FC<InputsBlockPropsType> = (props) => {
  const {error, maxValue, minValue, setMaxValue, setMinValue} = props
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
      updateError(true)

    } else {
      updateError(false)
    }
  }, [minValue, maxValue]);

  const updateError = (error: boolean) => {
    dispatch(setError({error}))
  }

  return (
    <div className={'set-count-screen'}>
      <Input className={'max-value'} title={'max value: '} error={error} value={maxValue} setValue={setMaxValue}/>
      <Input className={'start-value'} title={'start value: '} error={error} value={minValue} setValue={setMinValue}/>
    </div>
  )
}
