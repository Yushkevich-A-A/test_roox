import Button from 'components/atoms/Button'
import { InfoRow } from 'components/molecules/InfoRow'
import IFullUserInformation from 'interfaces/IFullUserInformation'
import React from 'react';
import './style.scss';

export const VisiableUserCart:React.FC<{userData: IFullUserInformation | null}> = ({userData}) => {
  return (
    <div className='full-user-cart-block'>
    { userData !== null && <div className="full-user-cart">
      <InfoRow nameRow='Name' data={`${userData.name}`}/>
      <InfoRow nameRow='User name' data={`${userData.username}`}/>
      <InfoRow nameRow='E-mail' data={`${userData.email}`}/>
      <InfoRow nameRow='Street' data={`${userData.address.street}`}/>
      <InfoRow nameRow='City' data={`${userData.address.city}`}/>
      <InfoRow nameRow='Zip code' data={`${userData.address.zipcode}`}/>
      <InfoRow nameRow='Phone' data={`${userData.phone}`}/>
      <InfoRow nameRow='Website' data={`${userData.website}`}/>
      <InfoRow nameRow='Comment' isComment={true}/>
    </div>}
    <div className="full-user-cart-button-block">
      <Button name='Отправить' type='button__disable' />
    </div>
  </div>
  )
}
