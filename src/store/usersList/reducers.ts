import { TUserListAction, IUserListReduser, UserListActionTypes } from "interfaces/IUserListReduser";

const initState: IUserListReduser = {
  loading: false,
  data: [],
  error: null
}

function serviceLoadUsersList (state = initState, action: TUserListAction ) {
  switch (action.type) {
    case UserListActionTypes.FETCH_USERS:
      return {...state, loading: true, error: null};
    case UserListActionTypes.FETCH_USERS_SUCCESS:
      const { data } = action.payload;
      return {...state, loading: false, error: null, data};
    case UserListActionTypes.FETCH_USERS_ERROR:
      const { message } = action.payload;
      return {...state, loading: false, error: message};
    case UserListActionTypes.SORTING_USERS:
      const { sortedArr } = action.payload;
      return {...state, loading: false, error: null, data: [...sortedArr]};
    default: 
      return {...state};
  }
}

export default serviceLoadUsersList;