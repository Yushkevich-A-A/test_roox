import React, { useState } from 'react';
import './style.scss';

const FormRowComment:React.FC<{ nameRow: string }> = ({nameRow}) => {
  const [ editable, SetEdaitable ] = useState<boolean>(true);

  return (
    <div className='form-row-comment'>
      <label className='form-row-label-comment' htmlFor="">{nameRow}</label>
      {
        editable && <textarea className='form-row-input-comment'/>
      }
      {
        !editable && <div className='form-row-information-comment'></div>
      }
    </div>
  )
}

export default FormRowComment;