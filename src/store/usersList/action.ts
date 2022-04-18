import { FetchUsersAction, FetchUsersErrorAction, FetchUsersSuccessAction, TUserListAction, UserListActionTypes, UsersSortAction } from "interfaces/IUserListReduser"
import { Dispatch } from "redux";

export const fetchUserList = (): FetchUsersAction => {
  return { type: UserListActionTypes.FETCH_USERS }
}

export const fetchUserListSuccess = (data: any[]): FetchUsersSuccessAction => {
  return { type: UserListActionTypes.FETCH_USERS_SUCCESS, payload: { data } }
}

export const fetchUserListError = (message: string): FetchUsersErrorAction => {
  return { type: UserListActionTypes.FETCH_USERS_ERROR, payload: { message } }
}

export const UserSort = (sortedArr: any[]): UsersSortAction => {
  return { type: UserListActionTypes.SORTING_USERS, payload: { sortedArr } }
}

export const sendRequestToServer = () =>  async (dispatch: Dispatch<TUserListAction>, getState: any) => {
  dispatch(fetchUserList());
  try {
    const  req = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await req.json();
    dispatch(fetchUserListSuccess(data));
  } catch(e: any) {
    dispatch(fetchUserListError(e.message));
  }
}