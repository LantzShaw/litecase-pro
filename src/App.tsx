import { FC, ReactElement } from 'react'

import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import UserLayout from './layouts/UserLayout'
import { Home, NotFound, SignIn, SignUp } from './views'

import './App.less'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
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
