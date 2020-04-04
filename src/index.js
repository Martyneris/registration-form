import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { loadState, saveState } from './utils/localStorage';
import { Provider } from 'react-redux';
import usersReducer from './state/reducers/UsersReducer';

// setting up loading/saving to/from local storage with redux

const persistedState = loadState();
const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  persistedState
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const dispatch = store.dispatch;

store.subscribe(() => {

  const state = store.getState();

  const { users } = store.getState();

  saveState({
    users,
  });
});

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
