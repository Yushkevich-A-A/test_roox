import React from 'react';
import Button from 'components/atoms/Button';
import './style.scss';
import { useDispatch } from 'react-redux';
import { UserSort } from 'store/usersList/action';
import useTypedSelector from 'hooks/useTypedSelector';
import compare from 'lib/functions/compare';

export default function FilterBlock() {
  const { data } =  useTypedSelector( state => state.loadUsersList )
  const dispatch = useDispatch();
  return (
    <div className='filter-block'>
      <h2 className='title-filter-block'>
        Сортировка
      </h2>
      <div className="filter-list">
        <Button name='по городу' action={() => {
            dispatch(UserSort(
              [...data].sort((a, b) => { return compare(a.address.city, b.address.city)} )
            ))
          }
        }/>
        <Button name='по компании' action={() => {
            dispatch(UserSort(
              [...data].sort( (a, b) => { return compare(a.company.name, b.company.name)} )
            ))
          }
        }/>
      </div>
    </div>
  )
}
