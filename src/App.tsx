import React, {useEffect} from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";
import {useAppDispatch} from "./hooks/ReduxHooks";
import {loadLS} from "./redux/count-slice";

import './App.css';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(loadLS())
    }
    , [dispatch])

  return (
    <div className="App">
      <SetCount/>
      <Count/>
    </div>
  );
}
