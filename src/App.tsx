import React from 'react';

import './App.css';
import {SetCount} from "./components/set-count/SetCount";

export const App: React.FC = () => {
  return (
    <div className="App">
      <SetCount/>
    </div>
  );
}
