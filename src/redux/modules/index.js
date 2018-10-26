import { combineReducers } from 'redux'
// import {
//   createNavigationReducer,
// } from 'react-navigation-redux-helpers'
// import AppNavigator from '../../navigation/navigation'

// const navReducer = createNavigationReducer(AppNavigator)
import auth from './auth/reducer'
import channels from './channels/reducer'
import users from './users/reducer'
import chat from './chat/reducer'

const rootReducer = combineReducers({
  // nav: navReducer,
  auth,
  channels,
  users,
  chat,
})

export default rootReducer
