import React from "react";

import {Button} from "../button/Button";
import {InputsBlock} from "../inputs-block/InputsBlock";
import {setCount, setEditMode, setMaxValue, setMinValue} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './SetCount.css';

export const SetCount: React.FC = () => {
  const { minValue, maxValue, error } = useAppSelector(state => state.countSlice.counter);
  const dispatch = useAppDispatch();

  const updateMinValue = (minValue: number) => {
    dispatch(setMinValue({minValue}))
  }

  const updateMaxValue = (maxValue: number) => {
    dispatch(setMaxValue({maxValue}))
  }

  const onClickSetValue = () => {
    onSetValue()
  }

  const updateEditMode = (editMode: boolean) => {
    dispatch(setEditMode({editMode}))
  }

  const updateCount = (count: number) => {
    dispatch(setCount({count}))
  }

  const onSetValue = () => {
    updateEditMode(false)
    updateMinValue(minValue)
    updateMaxValue(maxValue)
    updateCount(minValue)
    localStorage.setItem('counter', JSON.stringify({ minValue, maxValue, count: minValue, editMode: false, error }))
  }

  return (
    <div className={'set-count-block'}>
      <InputsBlock
        minValue={minValue} maxValue={maxValue} setMinValue={updateMinValue} setMaxValue={updateMaxValue} error={error}/>
      <div className={'set-count-button'}>
        <Button
          title={'set'} onClick={onClickSetValue}
          disabledButton={error || minValue === maxValue || minValue < 0 || maxValue < 0 || minValue > maxValue}/>
      </div>
    </div>
  )
}
