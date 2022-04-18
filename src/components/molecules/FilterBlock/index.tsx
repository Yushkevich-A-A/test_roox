import React from 'react';
import Button from 'components/atoms/Button';
import './style.scss';

export default function FilterBlock() {
  return (
    <div className='filter-block'>
      <h2 className='title-filter-block'>
        Сортировка
      </h2>
      <div className="filter-list">
        <Button name='По городу'/>
        <Button name='По компании'/>
      </div>
    </div>
  )
}
