import IFullUserInformation from "./IFullUserInformation";

export interface IUserStateReduser {
  loading: boolean,
  userData: IFullUserInformation | null,
  error: null | string,
  edit: boolean,
}

export enum UserStateActionTypes {
  FETCH_USER_DATA = 'FETCH_USER_DATA',
  FETCH_USERS_DATA_SUCCESS = 'FETCH_USERS_DATA_SUCCESS',
  FETCH_USERS_DATA_ERROR = 'FETCH_USERS_DATA_ERROR',
  EDIT_USER_DATA = 'EDIT_USER_DATA',
  RESET_USER_STATE = 'RESET_USER_STATE',
}

export interface fetchUserDataAction {
  type: UserStateActionTypes.FETCH_USER_DATA,
}

export interface fetchUserDataSuccessAction {
  type: UserStateActionTypes.FETCH_USERS_DATA_SUCCESS,
  payload: {
    userData: IFullUserInformation,
  }
}

export interface fetchUserDataErrorAction {
  type: UserStateActionTypes.FETCH_USERS_DATA_ERROR,
  payload: {
    message: string
  }
}

export interface editUserDataAction {
  type: UserStateActionTypes.EDIT_USER_DATA,
}

export interface resetUserDataAction {
  type: UserStateActionTypes.RESET_USER_STATE,
}

export type TUserDataListAction = fetchUserDataAction | fetchUserDataSuccessAction | fetchUserDataErrorAction | editUserDataAction |resetUserDataAction