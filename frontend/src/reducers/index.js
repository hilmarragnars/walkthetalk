import { combineReducers } from 'redux'
import todos from './todos'
import auth from './auth'
import users from './users'

export default combineReducers({
  todos,
  users,
  auth,
})
