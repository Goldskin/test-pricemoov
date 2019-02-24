import { createStore, compose, applyMiddleware, combineReducers } from "redux"
import * as reducers from "./ducks" // import all reducers from ducks/index.js

import mySaga from './sagas'
import createSagaMiddleware from "redux-saga"
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [promise, thunk, sagaMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
      collapsed: true
    }))
  }

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

  sagaMiddleware.run(mySaga)

  return store
}
