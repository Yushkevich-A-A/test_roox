import React from 'react';
import './style.scss';

type TButton = {
  name: string,
  type?: string,
  action?: any
}


function Button({ name, type, action }: TButton ) {
  const handleClick = () => {
    if(!action) {
      return;
    }
    action();
  }
  return (
    <button className={`button ${!type ? 'button__default' : type}`} onClick={handleClick} >{name}</button>
  )
}

export default Button;
