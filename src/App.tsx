import React, {useState} from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";

import './App.css';

export const App: React.FC = () => {

  let [minValue, setMinValue] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(5)
  let [count, setCount] = useState<number>(0)
  //let [errorValue, setErrorValue] = useState<boolean>(false)

  return (
    <div className="App">
      <SetCount minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setCount={setCount}
      />
      <Count minValue={minValue}
             maxValue={maxValue}
             count={count}
             setCount={setCount}
             //errorValue={errorValue}
             //setErrorValue={setErrorValue}
      />
    </div>
  );
}
