import React from "react";

import './Screen.css';

type ScreenPropsType = {
  editMode: boolean
  error: boolean
  count: number
  maxValue: number
}

export const Screen: React.FC<ScreenPropsType> = (props) => {
  let{editMode, error, maxValue, count} = props
  return (
    <div className={'count-screen'}>
      <div className={'value'}>
        {error ? <span>error</span> : editMode ? <span>enter values and press 'set'</span> : <span className={count === maxValue ? 'active' : ''}>{count}</span>}
      </div>
    </div>
  )
}
