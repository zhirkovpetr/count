import React from 'react';

import {SetCount} from "./components/set-count/SetCount";
import {Count} from "./components/count/Count";

import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <SetCount/>
      <Count/>
    </div>
  );
}
