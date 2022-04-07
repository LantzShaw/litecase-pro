import { actionTypes } from '@/constants'

// import { getNotifications } from '../services'

export type StartNotificationPost = {
  type: actionTypes.START_NOTIFICATION_POST
}

export type FinishNotificationPost = {
  type: actionTypes.FINISH_NOTIFICATION_POST
}

export type StartFetchNotification = {
  type: actionTypes.START_FETCH_NOTIFICATION
  payload: any
}

export type NotificationAction =
  | StartNotificationPost
  | FinishNotificationPost
  | StartFetchNotification

const startNotificationPost = (): NotificationAction => {
  return {
    type: actionTypes.START_NOTIFICATION_POST,
  }
}

const finishNotificationPost = (): NotificationAction => {
  return {
    type: actionTypes.FINISH_NOTIFICATION_POST,
  }
}

export const increase = (): NotificationAction => {
  return {
    type: actionTypes.START_FETCH_NOTIFICATION,
    payload: {},
  }
}

// export const decrease = (): Action => {
//   return {
//     type: ActionTypes.FINISH_FETCH_NOTIFICATION,
//     payload: {},
// }

// export const fetchNotifications = id => {
// return dispatch => {
//     dispatch(startNotificationPost())

//     getNotifications().then(res => {
//         dispatch({
//             type: ActionTypes.FETCH_NOTIFICATIONS,
//             payload: {
//                 list: res.list
//             }
//         })
//     })
// }
// }
