import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { forbiddenWordsMiddleware } from './redux/middleware'

import { rootReducer } from './redux/rootReducer'
import { sagaWatcher } from './redux/sagas'

const saga = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, saga, forbiddenWordsMiddleware)),
)

saga.run(sagaWatcher)
