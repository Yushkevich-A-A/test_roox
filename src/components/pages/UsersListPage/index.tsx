import Loader from 'components/atoms/Loader';
import TitlePage from 'components/atoms/TitlePage';
import UserList from 'components/organisms/UserList';
import useTypedSelector from 'hooks/useTypedSelector';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendRequestToServer } from 'store/usersList/action';
import './style.scss';

const UsersListPage = () => {
  const { loading, data } = useTypedSelector( state => state.loadUsersList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendRequestToServer());
  }, []);

  return (
    <div className='users-list-page'>
      <TitlePage title="Список пользователей"/>
      { loading && <Loader />}
      { !loading && <UserList list={data} />}
    </div>
  )
}

export default UsersListPage;
