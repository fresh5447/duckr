import React from 'react';
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import {routerReducer, syncHistoryWithStore} from 'react-router-redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { checkIfAuthed } from './helpers/auth'
import * as reducers from './redux/modules'
import {browserHistory} from 'react-router'


// const store = createStore(users, applyMiddleware(thunk), );
const store = createStore(
  combineReducers({...reducers, routing: routerReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)


function checkAuth (nextState, replace) {
  if (store.getState().users.isFetching === true) {
    return
  }

  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/' || nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/feed')
    }
  } else {
    if (isAuthed !== true) {
      replace('/auth')
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth, history)}
  </Provider>
  , document.getElementById('root'))
