import Loader from 'components/atoms/Loader';
import TitlePage from 'components/atoms/TitlePage';
import UserList from 'components/organisms/UserList';
import React, { useEffect, useState } from 'react';
import './style.scss';

const UsersListPage = () => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ data, setData ] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json() )
      .then( data => {
        setLoading(false);
        setData(data);
      } );
  }, [])

  return (
    <div className='users-list-page'>
      <TitlePage title="Список пользователей"/>
      { loading && <Loader />}
      { !loading && <UserList list={data} />}
    </div>
  )
}

export default UsersListPage;
