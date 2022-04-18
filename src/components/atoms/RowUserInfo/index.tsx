import React from 'react';
import './style.scss'

const RowUserInfo:React.FC<{title: string, data: string}> = ({title, data}) => {
  return (
    <div className='row-user-information'>
      <div className="row-title">{ title }</div>
      <div className="row-info">{ data }</div>
    </div>
  )
}

export default RowUserInfo;
