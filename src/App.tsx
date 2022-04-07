import { FC, ReactElement } from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import BaseLayout from '@/layouts/BaseLayout'
import UserLayout from '@/layouts/UserLayout'
import { Home, Settings, Notification, SignIn, SignUp, NotFound } from '@/views'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/notification',
        element: <Notification />,
      },
    ],
  },
  {
    path: 'orgz/member',
    element: <UserLayout />,
    children: [
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'reg',
        element: <SignUp />,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]

const App: FC = (): ReactElement => {
  const element = useRoutes(routes)

  return <>{element}</>
}

export default App
