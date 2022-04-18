import React from 'react';
import './style.scss';

const TitlePage:React.FC<{title: string}> = ({ title }) => {  
  return (
    <h1 className='title-page'>{title}</h1>
  )
}

export default TitlePage;
