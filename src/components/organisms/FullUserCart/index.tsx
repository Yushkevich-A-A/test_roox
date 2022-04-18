import Button from 'components/atoms/Button';
import { FormRow } from 'components/molecules/FormRow';
import FormRowComment from 'components/molecules/FormRowComment';
import IFullUserInformation from 'interfaces/IFullUserInformation';
import React from 'react';
import './style.scss';

export const FullUserCart:React.FC<{userData: IFullUserInformation | null}> = ({userData}) => {
  

  return (
    <div className='full-user-cart-block'>
      { userData !== null && <div className="full-user-cart">
        <FormRow nameRow='Name' data={`${userData.name}`}/>
        <FormRow nameRow='User name' data={`${userData.username}`}/>
        <FormRow nameRow='E-mail' data={`${userData.email}`}/>
        <FormRow nameRow='Street' data={`${userData.address.street}`}/>
        <FormRow nameRow='City' data={`${userData.address.city}`}/>
        <FormRow nameRow='Zip code' data={`${userData.address.zipcode}`}/>
        <FormRow nameRow='Phone' data={`${userData.phone}`}/>
        <FormRow nameRow='Website' data={`${userData.website}`}/>
        <FormRowComment nameRow='Comment'/>
      </div>}
      <div className="full-user-cart-button">
        {/* <Button name='Отправить' type='button__disable' /> */}
        <Button name='Отправить' type='button__ready' />
      </div>
    </div>
  )
}
