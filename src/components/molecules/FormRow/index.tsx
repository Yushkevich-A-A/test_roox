import React, { useState } from 'react';
import './style.scss';

type TFormRow = {
  nameRow: string, 
  value: string,
  name: string,
  isComment?: boolean,
  handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  handleBlur: (val:any) => void,
  errors: string[],
}


export const FormRow:React.FC<TFormRow> = ({nameRow, value, name, isComment, handleChange, handleBlur, errors}) => {

  

  return (
    <div className='form-row'>
      <label className='form-row-label' >{nameRow}</label>
      {
        isComment && <textarea name={name} id={name} onBlur={handleBlur} onChange={handleChange} className='form-row-input-comment'/>
      }
      {
        !isComment && <input name={name} id={name} onBlur={handleBlur} onChange={handleChange} className={`form-row-input ${!!errors.find( item => item === name) ? 'input-invalid': ''}`} value={value}/>
      }
    </div>
  )
}
