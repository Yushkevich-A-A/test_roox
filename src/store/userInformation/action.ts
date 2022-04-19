import IFullUserInformation from "interfaces/IFullUserInformation";
import { editUserDataAction, fetchUserDataAction, fetchUserDataErrorAction, fetchUserDataSuccessAction, resetUserDataAction, TUserDataListAction, UserStateActionTypes } from "interfaces/IUserStateReduser";
import { Dispatch } from "redux";

export const fetchUserData = (): fetchUserDataAction => {
  return { type: UserStateActionTypes.FETCH_USER_DATA}
}

export const fetchUserDataSuccess = (userData: IFullUserInformation): fetchUserDataSuccessAction => {
  return { type: UserStateActionTypes.FETCH_USERS_DATA_SUCCESS, payload: {userData}}
}

export const fetchUserDataError = (message: string): fetchUserDataErrorAction => {
  return { type: UserStateActionTypes.FETCH_USERS_DATA_ERROR, payload: { message }}
}

export const editUserData = (): editUserDataAction => {
  return { type: UserStateActionTypes.EDIT_USER_DATA }
}

export const resetUserData = (): resetUserDataAction => {
  return { type: UserStateActionTypes.RESET_USER_STATE }
}

export const sendRequestToServerOfUserData = (id: string) =>  async (dispatch: Dispatch<TUserDataListAction>, getState: any) => {
  dispatch(fetchUserData());
  try {
    const  req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await req.json();
    dispatch(fetchUserDataSuccess(data));
  } catch(e: any) {
    dispatch(fetchUserDataError(e.message));
  }
}
