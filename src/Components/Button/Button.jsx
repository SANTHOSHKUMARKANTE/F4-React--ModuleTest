import React from 'react'
import './Button.css'

const Button = (props) => {
  
  return (
    <button onClick={() => props.onClick(props.genre)}>{props.genre}</button>
  )
};

export default Button
