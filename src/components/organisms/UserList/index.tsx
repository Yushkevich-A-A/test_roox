import UserCard from 'components/molecules/UserCart';
import IFullUserInformation from 'interfaces/IFullUserInformation';
import React from 'react';
import './style.scss';

const UserList:React.FC<{list: IFullUserInformation[]}> = ({list}) => {
  return (
    <div className='users-list'>
      {
        list.map( (item: IFullUserInformation) => <UserCard key={item.id} 
                                    id={item.id} 
                                    name={`${item.name} ${item.username}`} 
                                    city={item.address.city}
                                    company={item.company.name}/>)
      }
      <div className="users-list-counter">Найдено {list.length} пользователей</div>
    </div>
  )
}

export default UserList;
