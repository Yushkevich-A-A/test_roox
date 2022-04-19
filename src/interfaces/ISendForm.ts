export interface ISendFormStateReducer {
  loading: boolean,
  success: boolean,
  errorsFields: string[],
  sendError: string | null,
}

export enum SendFormActionTypes {
  FETCH_FORM = 'FETCH_FORM',
  FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS',
  FETCH_FORM_ERROR = 'FETCH_FORM_ERROR',
  SET_ERROR_FIELD = 'SET_ERROR_FIELD',
  REMOVE_ERROR_FIELD = 'REMOVE_ERROR_FIELD',
  RESET_STATE = 'RESET_STATE',
}

export interface fetchFormAction {
  type: SendFormActionTypes.FETCH_FORM
}

export interface fetchFormSuccessAction {
  type: SendFormActionTypes.FETCH_FORM_SUCCESS
}

export interface fetchFormErrorAction {
  type: SendFormActionTypes.FETCH_FORM_ERROR,
  payload: {
    message: string,
  }
}

export interface setErrorFieldAction {
  type: SendFormActionTypes.SET_ERROR_FIELD,
  payload: {
    addError: string,
  }
}

export interface removeErrorAction {
  type: SendFormActionTypes.REMOVE_ERROR_FIELD,
  payload: {
    removeError: string,
  }
}

export interface resetStateAction {
  type: SendFormActionTypes.RESET_STATE
}


export type TSendFormActions = fetchFormAction | fetchFormSuccessAction | fetchFormErrorAction | setErrorFieldAction | removeErrorAction | resetStateAction;