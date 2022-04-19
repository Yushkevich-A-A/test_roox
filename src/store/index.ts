import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import serviceSendingDataToServer from './sendingChanges/reducers';
import serviceLoadUserInformation from './userInformation/reducers';
import serviceLoadUsersList from './usersList/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers = combineReducers({
  loadUsersList: serviceLoadUsersList,
  loadUserInformation: serviceLoadUserInformation,
  sendingFormToServer: serviceSendingDataToServer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export default store;