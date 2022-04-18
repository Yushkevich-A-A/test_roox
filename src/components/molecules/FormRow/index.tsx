import React, { useState } from 'react';
import './style.scss';



export const FormRow:React.FC<{ nameRow: string, data: string }> = ({nameRow, data}) => {
  const [ editable, SetEditable ] = useState<boolean>(true);

  return (
    <div className='form-row'>
      <label className='form-row-label' htmlFor="">{nameRow}</label>
      {
        editable && <input className='form-row-input input-invalid'value={data}/>
      }
      {
        !editable && <div className='form-row-information'>{data}</div>
      }
    </div>
  )
}
