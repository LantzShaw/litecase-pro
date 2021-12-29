import { FC, ReactElement } from 'react'

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
  return <div>Notification</div>
}

export default Notification
