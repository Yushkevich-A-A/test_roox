import Button from 'components/atoms/Button';
import Loader from 'components/atoms/Loader';
import { FormRow } from 'components/molecules/FormRow';
import useTypedSelector from 'hooks/useTypedSelector';
import IFullUserInformation from 'interfaces/IFullUserInformation';
import TFullUserCart from 'interfaces/TFullUserCart';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendFormToServer } from 'store/sendingChanges/action';
import { resetUserData } from 'store/userInformation/action';
import './style.scss';

export const FullUserCart:React.FC<{userData: IFullUserInformation}> = ({userData}) => {
  const { errorsFields, loading } = useTypedSelector( state => state.sendingFormToServer );
  const [ formdData, setFormData ] = useState<TFullUserCart | null>(null);
  const history = useHistory()
  const dispatch = useDispatch();

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

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (formdData === null) {
      return;
    }
    if (errorsFields.length !== 0) {
      return;
    }
    dispatch(sendFormToServer(formdData, () => {
      dispatch(resetUserData());
      history.push('/user')
    } ));
  }

  return (
    <>
    {
      !loading && <form className='full-user-cart-block' onSubmit={handleSubmit}>
        { formdData !== null && <div className="full-user-cart">
          <FormRow nameRow='Name' name='name'  value={formdData.name} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='User name' name='username' value={formdData.username} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='E-mail' name='email' value={formdData.email} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='Street' name='street' value={formdData.street} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='City' name='city' value={formdData.city} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='Zip code' name='zipcode' value={formdData.zipcode} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='Phone' name='phone' value={formdData.phone} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='Website' name='website' value={formdData.website} handleChange={handleChangeValue} require={true}/>
          <FormRow nameRow='Comment' name='comment' value={formdData.comment} handleChange={handleChangeValue} isComment={true}/>
        </div>}
        <div className="form-user-cart-button-block">
          <Button name='Отправить' type='button__ready' />
        </div>
      </form>
    }
    {
      loading && <Loader />
    }
    </>
  )
}
