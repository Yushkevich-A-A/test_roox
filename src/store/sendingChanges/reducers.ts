import { ISendFormStateReducer, SendFormActionTypes, TSendFormActions } from "interfaces/ISendForm";

const initStateSendingReady: ISendFormStateReducer = {
  loading: false,
  success: false,
  errorsFields: [],
  sendError: null,
}

function serviceSendingDataToServer(state = initStateSendingReady, action: TSendFormActions) {
  switch (action.type) {
    case SendFormActionTypes.FETCH_FORM:
      return {...state, loading: true, suuccess: false};
    case SendFormActionTypes.FETCH_FORM_SUCCESS:
      return {...state, loading: false, suuccess: true};
    case SendFormActionTypes.FETCH_FORM_ERROR:
      const { message } = action.payload;
      return {...state, loading: false, success: false, sendError: message };
    case SendFormActionTypes.SET_ERROR_FIELD:
      const { addError } = action.payload;
      if (state.errorsFields.find((item: string) => item === addError)) {
        return {...state };
      }
      return {...state, errorsFields: [...state.errorsFields, addError] };
    case SendFormActionTypes.REMOVE_ERROR_FIELD:
      const { removeError } = action.payload;
      if (!state.errorsFields.find((item: string) => item === removeError)) {
        return {...state};
      }
      return {...state, errorsFields: state.errorsFields.filter( (item: string) => item !== removeError )};
    case SendFormActionTypes.RESET_STATE:
      return {...initStateSendingReady};
    default:
      return {...state};
  }
}

export default serviceSendingDataToServer;