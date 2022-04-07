import { combineReducers } from 'redux'

import notification from './notification'
import enthusiasm from './enthusiasm'

export default combineReducers({
  notification,
  enthusiasm,
})
