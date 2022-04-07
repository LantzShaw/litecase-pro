import type { NotificationAction } from '@/actions/notification'
import type { NotificationState } from '@/types/notification'

import { actionTypes } from '@/constants'

const initialState = {
  list: [],
  isLoading: false,
} as NotificationState

/**
 *
 * @param state NotificationState
 * @param action NotificationAction
 * @returns
 *
 * You can use reducer to handle state.
 *
 * You can name the function as you like.
 * Like notificationReducer or notification, etc.
 *
 */
export default function notification(state = initialState, action: NotificationAction) {
  switch (action.type) {
    case actionTypes.START_NOTIFICATION_POST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FINISH_NOTIFICATION_POST:
      return {
        ...state,
        isLoading: false,
        list: action.payload.list,
      }
    default:
      return state
  }
}
