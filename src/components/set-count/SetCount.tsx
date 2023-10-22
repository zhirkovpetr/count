import React from "react";

import {Button} from "../button/Button";
import {InputsBlock} from "../inputs-block/InputsBlock";
import {saveLS} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './SetCount.css';

export const SetCount: React.FC = () => {
  const {counter} = useAppSelector(state => state.countSlice);
  const dispatch = useAppDispatch();

  const onSetValue = () => {
    dispatch(saveLS({counter}))
  }

  return (
    <div className={'set-count-block'}>
      <InputsBlock minValue={counter.minValue} maxValue={counter.maxValue} error={counter.error}/>
      <div className={'set-count-button'}>
        <Button
          title={'set'} onClick={onSetValue}
          disabledButton={counter.error || counter.minValue === counter.maxValue || counter.minValue < 0 || counter.maxValue < 0 || counter.minValue > counter.maxValue}/>
      </div>
    </div>
  )
}
