import { combineReducers } from 'redux'

import { appReducer } from './appReducer'
import { postsReducer } from './postReducer'

export const rootReducer = combineReducers({
  postsAll: postsReducer,
  app: appReducer,
})
