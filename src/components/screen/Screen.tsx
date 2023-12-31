import React from "react";

import './Screen.css';

type ScreenPropsType = {
  maxValue: number
  count: number
  editMode: boolean
  error: boolean
}

export const Screen: React.FC<ScreenPropsType> = (props) => {
  const {editMode, error, maxValue, count} = props

  return (
    <div className={'count-screen'}>
      <div className={'value'}>
        {error ? <span>error</span> : editMode ?  <span className={count === maxValue ? 'active' : ''}>{count}</span> : <span className={count === maxValue ? 'active' : ''}>{count}</span>}
      </div>
    </div>
  )
}
