import React from "react";

import './SetCount.css';

export const SetCount: React.FC = () => {
  return (
    <div className={'set-count-block'}>
      <div className={'set-count-screen'}>
        <div className={'max-value'}>
          <span>max value: </span>
          <input type={'number'}/>
        </div>
        <div className={'start-value'}>
          <span>start value: </span>
          <input/>
        </div>
      </div>
      <div className={'set-count-button'}>
        <button>set</button>
      </div>
    </div>
  )
}
