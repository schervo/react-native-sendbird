import { combineReducers } from 'redux'
import auth from './auth/reducer'
import channels from './channels/reducer'
import users from './users/reducer'

const rootReducer = combineReducers({
  auth,
  channels,
  users,
})

export default rootReducer
