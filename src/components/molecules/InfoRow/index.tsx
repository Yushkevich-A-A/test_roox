import React from 'react';
import './style.scss';

type TInfoRow = {
  nameRow: string,
  data?: string,
  isComment?: boolean,
}

export const InfoRow:React.FC<TInfoRow> = ({nameRow, data, isComment}) => {
  return (
    <div className='info-row'>
      <div className='info-row-label'>{nameRow}</div>
      {
        isComment && <div className='info-row-information-comment'></div>
      }
      {
        !isComment && <div className='info-row-information'>{data}</div>
      }
    </div>
  )
}
