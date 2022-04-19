import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';


const CustomLink:React.FC<{id: number}> = ({id}) => {
  const history = useHistory();

  const handleClick = (e:React.MouseEvent<HTMLDivElement> ) => {
    history.push(`/user/${id}`);
  }

  return (
    <div className='user-cart-link' onClick={handleClick}>Подробнее</div>
  )
}

export default CustomLink;
