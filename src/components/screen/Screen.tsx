import React from "react";

import {TSetCounter} from "../../interfaces/interfaces";

import './Screen.css';

type ScreenPropsType = {
  counter: TSetCounter
}

export const Screen: React.FC<ScreenPropsType> = (props) => {
  const {editMode, error, maxValue, count} = props.counter

  return (
    <div className={'count-screen'}>
      <div className={'value'}>
        {error ? <span>error</span> : editMode ?  <span className={count === maxValue ? 'active' : ''}>{count}</span> : <span className={count === maxValue ? 'active' : ''}>{count}</span>}
      </div>
    </div>
  )
}
