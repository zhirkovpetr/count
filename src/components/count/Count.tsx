import React from "react";

import './Count.css';

export const Count: React.FC = () => {
  return (
    <div className={'count-block'}>
      <div className={'count-screen'}>
        <div className={'value'}>
          <span>0</span>
        </div>
      </div>
      <div className={'count-button'}>
        <button>inc</button>
        <button>reset</button>
      </div>
    </div>
  )
}
