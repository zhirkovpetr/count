import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";
import {setCount} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './Count.css';

export const Count: React.FC = () => {
  const {count, maxValue, minValue, error, editMode} = useAppSelector(state => state.count);
  const dispatch = useAppDispatch();

  const updateCount = (count: number) => {
    dispatch(setCount({count}))
  }

  return (
    <div className={'count-block'}>
      <Screen count={count} maxValue={maxValue} editMode={editMode} error={error}/>
      <CountButtons count={count} minValue={minValue} maxValue={maxValue} editMode={editMode} error={error} updateCount={updateCount}/>
    </div>
  )
}
