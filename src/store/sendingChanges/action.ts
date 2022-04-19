import { fetchFormAction, fetchFormErrorAction, fetchFormSuccessAction, removeErrorAction, resetStateAction, SendFormActionTypes, setErrorFieldAction, TSendFormActions } from "interfaces/ISendForm";
import TFullUserCart from "interfaces/TFullUserCart";
import { Dispatch } from "redux";


export const fetchForm = (): fetchFormAction => {
  return { type: SendFormActionTypes.FETCH_FORM };
}

export const fetchFormSuccess = (): fetchFormSuccessAction => {
  return { type: SendFormActionTypes.FETCH_FORM_SUCCESS };
}

export const fetchFormError = (message:string): fetchFormErrorAction => {
  return { type: SendFormActionTypes.FETCH_FORM_ERROR, payload: { message } };
}

export const setErrorField = (addError: string): setErrorFieldAction => {
  return { type: SendFormActionTypes.SET_ERROR_FIELD, payload: { addError }};
}

export const removeErrorField = (removeError: string): removeErrorAction => {
  return { type: SendFormActionTypes.REMOVE_ERROR_FIELD, payload: { removeError }};
}

export const resetState = (): resetStateAction => {
  return { type: SendFormActionTypes.RESET_STATE };
}

export const sendFormToServer = (dataForm: TFullUserCart, callback: () => void) =>  async (dispatch: Dispatch<TSendFormActions>, getState: any) => {
  dispatch(fetchForm());
  try {
    setTimeout(() => {
      console.log(JSON.stringify(dataForm));
      callback();
      dispatch(resetState());
    }, 1000 * 5)
  } catch(e: any) {
    dispatch(fetchFormError(e.message));
  }
}