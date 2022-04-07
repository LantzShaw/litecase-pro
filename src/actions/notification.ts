import type { Dispatch } from 'redux'

import { actionTypes } from '@/constants'

import { getNotifications } from '@/services/user'

export type StartNotificationPost = {
  type: actionTypes.START_NOTIFICATION_POST
}

export type FinishNotificationPost = {
  type: actionTypes.FINISH_NOTIFICATION_POST
  payload: any
}

export type NotificationAction = StartNotificationPost | FinishNotificationPost

const startNotificationPost = (): NotificationAction => {
  return {
    type: actionTypes.START_NOTIFICATION_POST,
  }
}

const finishNotificationPost = (payload: any): NotificationAction => {
  return {
    type: actionTypes.FINISH_NOTIFICATION_POST,
    payload,
  }
}

/**
 * Aysnc action creator
 *
 * @returns {Promise<void>}
 *
 * You can use async action creator to fetch data from server.
 */

export const fetchNotification = () => {
  return (dispatch: Dispatch) => {
    dispatch(startNotificationPost())

    getNotifications({}).then(res => {
      dispatch(finishNotificationPost(res.data.list))
    })
  }
}
