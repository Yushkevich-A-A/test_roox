import React from 'react';
import './style.scss';

type TButton = {
  name: string,
}


function Button({ name }: TButton ) {
  const handleClick = () => {
    console.log('нажата кнопка');
  }
  return (
    <button className={`button button__default`} onClick={handleClick} >{name}</button>
  )
}

export default Button;
