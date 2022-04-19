import useTypedSelector from 'hooks/useTypedSelector';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeErrorField, setErrorField } from 'store/sendingChanges/action';
import './style.scss';

type TFormRow = {
  nameRow: string, 
  value: string,
  name: string,
  require?: boolean,
  handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  isComment?: boolean;
}


export const FormRow:React.FC<TFormRow> = ({nameRow, value, name, require, handleChange, isComment}) => {
    const [ isValid, setIsValid ] = useState<boolean>(true) 
    const dispatch = useDispatch();
   const handleBlur = (e:any) => {
    if (!require) {
      return;
    }
    const name = e.target.name;
    const value = e.target.value;
    if (value === '') {
      dispatch(setErrorField(name));
      return setIsValid(false);
    }
    dispatch(removeErrorField(name));
    setIsValid(true);
  }

  const handleFocus = (e:any) => {
    if (!require) {
      return;
    }
    setIsValid(true);
  }
  

  return (
    <div className='form-row'>
      <label className='form-row-label' >{nameRow}</label>
      {
        isComment && <textarea name={name} id={name} onBlur={handleBlur} onChange={handleChange} className='form-row-input-comment'/>
      }
      {
        !isComment && <input name={name} id={name} onBlur={handleBlur} onChange={handleChange} className={`form-row-input ${!isValid ? 'input-invalid': ''}`} value={value}/>
      }
    </div>
  )
}
