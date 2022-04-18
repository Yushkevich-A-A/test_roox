import TitlePage from 'components/atoms/TitlePage';
import React, { useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import './style.scss';
import Loader from 'components/atoms/Loader';

type TMatch = {
  params: {
    id: string,
  }
}

const UserFormPage:React.FC<{match: TMatch}> = ({ match }) => {
  console.log('заходим в функцию')
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ data, setData ] = useState<any[]>([]);



  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then( res => res.json() )
      .then( data => {
        setLoading(false);
        setData(data);
      } );
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
    </div>
  )
}

export default UserFormPage;