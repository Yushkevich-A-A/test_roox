import RowUserInfo from 'components/atoms/RowUserInfo';
import IShortUserName from 'interfaces/IShortUserName';
import React from 'react';
import './style.scss';

const ShortUserData = (props: IShortUserName) => {
  return (
    <div className='short-user-data'>
      <RowUserInfo title='ФИО:' data={props.name}/>
      <RowUserInfo title='город:' data={props.city}/>
      <RowUserInfo title='компания:' data={props.company}/>
    </div>
  )
}

export default ShortUserData;
