import React from "react";

import './Button.css';

type ButtonPropsType = {
  title: string
  disaebledButton: boolean
  onClick: () => void
  maxValue: number
  minValue: number
  editMode: boolean
  error: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {title, disaebledButton, onClick} = props
  return (
    <button onClick={onClick} disabled={disaebledButton} className={disaebledButton ? 'button button-disabled' : 'button'}>{title}</button>
  )
}
