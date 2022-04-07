import type { NotificationAction } from '@/actions/notification'
import type { NotificationState } from '@/types/notification'

const initialState: NotificationState = {
  list: [],
  isLoading: false,
}

export default function notification(state = initialState, action: NotificationAction) {
  switch (action.type) {
    default:
      return state
  }
}

// export function notification (state = initialState, action: Action)  {
//   switch (action.type) {
//     default:
//       return state
//   }
// }
