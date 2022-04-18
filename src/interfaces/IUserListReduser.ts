export interface IUserListReduser { 
  loading: boolean,
  data: any[],
  error: null | string
}

export enum UserListActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SORTING_USERS = 'SORTING_USERS'
}


export interface FetchUsersAction {
  type: UserListActionTypes.FETCH_USERS,
}

export interface FetchUsersSuccessAction {
  type: UserListActionTypes.FETCH_USERS_SUCCESS,
  payload: { data: any[] },
}

export interface FetchUsersErrorAction {
  type: UserListActionTypes.FETCH_USERS_ERROR,
  payload: { message : string },
}

export interface UsersSortAction {
  type: UserListActionTypes.SORTING_USERS,
  payload: { sortedArr : any[] },
}

export type TUserListAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction | UsersSortAction;