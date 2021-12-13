import actionTypes from './actionTypes'

// import { getNotifications } from '../services'

const startNotificationPost = () => {
  return {
    type: actionTypes.START_NOTIFICATION_POST,
  }
}

const finishNotificationPost = () => {
  return {
    type: actionTypes.FINISH_NOTIFICATION_POST,
  }
}

export const increase = () => {
  return {
    type: actionTypes.START_FETCH_NOTIFICATION,
    payload: {},
  }
}

// export const fetchNotifications = id => {
// return dispatch => {
//     dispatch(startNotificationPost())

//     getNotifications().then(res => {
//         dispatch({
//             type: actionTypes.FETCH_NOTIFICATIONS,
//             payload: {
//                 list: res.list
//             }
//         })
//     })
// }
// }
