import React from "react";

import {Screen} from "../screen/Screen";
import {CountButtons} from "../count-buttons/CountButtons";
import {setCount} from "../../redux/count-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/ReduxHooks";

import './Count.css';

export const Count: React.FC = () => {
  const {counter} = useAppSelector(state => state.countSlice);
  const dispatch = useAppDispatch();

  const updateCount = (count: number) => {
    dispatch(setCount({count}))
  }

  return (
    <div className={'count-block'}>
      <Screen counter={counter}/>
      <CountButtons counter={counter} updateCount={updateCount}/>
    </div>
  )
}
