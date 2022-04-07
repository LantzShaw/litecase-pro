// import { FC, ReactElement } from 'react'
// import { connect } from 'react-redux'

// import { startFetchNotification } from '@/actions/notification'
// import type { NotificationState } from '@/types/notification'

// export type NoticeIconData = {
//   avatar?: string | React.ReactNode
//   title?: React.ReactNode
//   description?: React.ReactNode
//   datetime?: React.ReactNode
//   extra?: React.ReactNode
//   style?: React.CSSProperties
//   key?: string | number
//   read?: boolean
// }

// export function mapStateToProps(state: NotificationState) {
//   const { list, isLoading } = state

//   return {
//     list,
//     isLoading,
//   }
// }

// export const mapDispatchToProps = {
//   onStartFetchNotification: startFetchNotification,
// }

// const Notification: FC = (): ReactElement => {
//   return <div>Notification</div>
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Notification)

/** ----------------------------- About using hooks ---------------------------------- */

import { FC, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState, AppDispatch } from '@/store'
import type { NotificationAction } from '@/actions/notification'

export type NoticeIconData = {
  avatar?: string | React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  datetime?: React.ReactNode
  extra?: React.ReactNode
  style?: React.CSSProperties
  key?: string | number
  read?: boolean
}

const Notification: FC = (): ReactElement => {
  const selectNotification = useSelector((state: RootState) => state.notification.list)
  // const dispatch = useDispatch<AppDispatch>()
  const dispatch = useDispatch()

  console.log(selectNotification)

  const clickHandler = () => {
    // dispatch(startFetchNotification())
  }

  return <div>Notification</div>
}

export default Notification

// const connector = connect(mapState, mapDispatch)

// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//   backgroundColor: string
// }

// const MyComponent = (props: Props) => (
//   <div style={{ backgroundColor: props.backgroundColor }}>
//     <button onClick={props.toggleOn}>
//       Toggle is {props.isOn ? 'ON' : 'OFF'}
//     </button>
//   </div>
// )

// export default connector(MyComponent)
