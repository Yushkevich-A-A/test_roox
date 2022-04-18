import TitlePage from 'components/atoms/TitlePage';
import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import './style.scss';
import Loader from 'components/atoms/Loader';
import { FullUserCart } from 'components/organisms/FullUserCart';
import IFullUserInformation from 'interfaces/IFullUserInformation';
import useTypedSelector from 'hooks.ts/useTypedSelector';
import { useDispatch } from 'react-redux';
import { sendRequestToServerOfUserData } from 'store/userInformation/action';

type TMatch = {
  params: {
    id: string,
  }
}
 
const UserFormPage:React.FC<{match: TMatch}> = ({ match }) => {
  const { loading, userData } = useTypedSelector( state => state.loadUserInformation );
const [ data, setData ] = useState<IFullUserInformation | null>(null);

  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(sendRequestToServerOfUserData(match.params.id))
  }, [])

  return (
    <div className='user-form-page'>
      <div className="section-header">
        <TitlePage title="Профиль пользователя"/>
        <Button name='Редактировать'/>
      </div>
      {
        loading && <Loader />
      }
      {
        !loading && <FullUserCart userData={userData}/>
      }
    </div>
  )
}

export default UserFormPage;