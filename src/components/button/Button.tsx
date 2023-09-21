import React from "react";

type ButtonPropsType = {
  title: string
  disabled: boolean
  onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  let {title, disabled, onClick} = props
  const ButtonStyle = {backgroundColor: disabled ? 'grey' : '', boxShadow: disabled ? 'none' : ''}

  return <button onClick={onClick} disabled={disabled} style={ButtonStyle}>{title}</button>
}
