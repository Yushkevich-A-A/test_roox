import IShortUserName from 'interfaces/IShortUserName';
import React from 'react';
import CustomLink from 'components/atoms/CustomLink';
import ShortUserData from '../ShortUserData';
import './style.scss';

const UserCard = (props: IShortUserName) => {
  return (
    <div className='user-cart'>
      <ShortUserData {...props} />
      <CustomLink id={props.id}/>
    </div>
  )
}

export default UserCard;
