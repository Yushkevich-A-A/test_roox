import { IUserStateReduser, TUserDataListAction, UserStateActionTypes } from "interfaces/IUserStateReduser";

const initUserState: IUserStateReduser = {
  loading: false,
  userData: null,
  error: null
}

function serviceLoadUserInformation (state = initUserState, action: TUserDataListAction) {
  switch (action.type) {
    case UserStateActionTypes.FETCH_USER_DATA:
      return {...state, loading: true, error: null};
    case UserStateActionTypes.FETCH_USERS_DATA_SUCCESS:
      const { userData } = action.payload;
      return {...state, loading: false, error: null, userData};
    case UserStateActionTypes.FETCH_USERS_DATA_ERROR:
      const { message } = action.payload;
      return {...state, loading: false, error: message};
    case UserStateActionTypes.EDIT_USER_DATA:
      return {...state};
    default:
      return {...state};
  }
}

export default serviceLoadUserInformation;