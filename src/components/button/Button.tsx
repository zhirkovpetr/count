import React from "react";

import './Button.css';

type ButtonPropsType = {
  title: string
  disabled: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {title, disabled, onClick} = props

  return <button onClick={onClick} disabled={disabled} className={disabled ? 'button button-disabled' : 'button'}>{title}</button>
}
