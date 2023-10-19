import React, {useEffect} from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";
import {useAppDispatch, useAppSelector} from "./hooks/ReduxHooks";
import {setStateLS} from "./redux/count-slice";

import './App.css';

export const App: React.FC = () => {
  const {counter} = useAppSelector(state => state.countSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
      const favorites = JSON.parse(
        localStorage.getItem("counter") as string
      );
      dispatch(setStateLS(favorites ? favorites : counter));
    }
    , [dispatch])

  return (
    <div className="App">
      <SetCount/>
      <Count/>
    </div>
  );
}
