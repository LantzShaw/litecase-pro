import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './UserLayout.less'

const UserLayout: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  )
}

export default UserLayout
