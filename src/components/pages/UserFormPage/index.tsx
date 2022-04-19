import TitlePage from 'components/atoms/TitlePage';
import React, { useEffect } from 'react';
import Button from 'components/atoms/Button';
import './style.scss';
import Loader from 'components/atoms/Loader';
import { FullUserCart } from 'components/organisms/FormUserCart';
import useTypedSelector from 'hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { editUserData, sendRequestToServerOfUserData } from 'store/userInformation/action';
import { VisiableUserCart } from 'components/organisms/VisiableUserCart';

type TMatch = {
  params: {
    id: string,
  }
}
 
const UserFormPage:React.FC<{match: TMatch}> = ({ match }) => {
  const { loading, userData, edit } = useTypedSelector( state => state.loadUserInformation );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendRequestToServerOfUserData(match.params.id));
    // eslint-disable-next-line
  }, [])

  const toggleClick = ():void => {
    dispatch(editUserData());
  }

  return (
    <div className='user-form-page'>
      <div className="section-header">
        <TitlePage title="Профиль пользователя"/>
        <Button name='Редактировать' action={toggleClick}/>
      </div>
      {
        loading && <Loader />
      }
      {
        !loading && edit && userData !== null && <FullUserCart userData={userData}/>
      }
      {
        !loading && !edit && <VisiableUserCart userData={userData}/>
      }
    </div>
  )
}

export default UserFormPage;