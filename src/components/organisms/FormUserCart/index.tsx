import Button from 'components/atoms/Button';
import { FormRow } from 'components/molecules/FormRow';
import IFullUserInformation from 'interfaces/IFullUserInformation';
import React, { useEffect, useState } from 'react';
import './style.scss';

type TFullUserCart = {
  name: string,
  username: string,
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  comment: string,
}

export const FullUserCart:React.FC<{userData: IFullUserInformation}> = ({userData}) => {
  const [ formdData, setFormData ] = useState<TFullUserCart | null>(null);
  const [ errorsValudate, setErrorsValidate ] = useState<string[]>([]);

  useEffect(() => {
    const dataForm = {
      name: userData.name,
      username: userData.username,
      email:userData.email,
      street:userData.address.street,
      city:userData.address.city,
      zipcode:userData.address.zipcode,
      phone:userData.phone,
      website:userData.website,
      comment: '',
    }
    setFormData(dataForm);
  }, [])

  const handleChangeValue = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nameField = e.target.name;
    const value = e.target.value;
    if (formdData === null) {
      return;
    }
    setFormData({...formdData, [nameField]: value});
  }

  const handleBlur = (e:any) => {
    const name = e.target.name;
    if (name === 'comment') {
      return;
    };

    const value = e.target.value;
    if (value !== '') {
       setErrorsValidate(errorsValudate.filter(item => item !== name));
       return;
    }
    if (!errorsValudate.find( item => item === name)) {
      setErrorsValidate(prevState => [...prevState, name]);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (errorsValudate.length !== 0) {
      return;
    }
    console.log('отправляем форму')
  }

  return (
    <form className='full-user-cart-block' onSubmit={handleSubmit}>
      { formdData !== null && <div className="full-user-cart">
        <FormRow nameRow='Name' name='name'  value={formdData.name} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='User name' name='username' value={formdData.username} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='E-mail' name='email' value={formdData.email} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='Street' name='street' value={formdData.street} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='City' name='city' value={formdData.city} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='Zip code' name='zipcode' value={formdData.zipcode} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='Phone' name='phone' value={formdData.phone} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='Website' name='website' value={formdData.website} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
        <FormRow nameRow='Comment' isComment={true} name='comment' value={formdData.comment} errors={errorsValudate}
                                  handleChange={handleChangeValue} handleBlur={handleBlur}/>
      </div>}
      <div className="form-user-cart-button-block">
        <Button name='Отправить' type='button__ready' />
      </div>
    </form>
  )
}
