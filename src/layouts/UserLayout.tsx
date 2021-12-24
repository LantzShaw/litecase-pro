import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout: FC = (): ReactElement => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default UserLayout
