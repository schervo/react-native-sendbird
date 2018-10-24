import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

import rootReducer from './modules'


const reduxNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)

const middleware = [
  thunk,
  promiseMiddleware(),
  reduxNavigationMiddleware,
]

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)
