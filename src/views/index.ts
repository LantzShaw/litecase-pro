import Loadable from 'react-loadable'

import { Loading } from '../components'

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
})

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
})

const Notification = Loadable({
  loader: () => import('./Notification'),
  loading: Loading,
})

const Settings = Loadable({ loader: () => import('./Settings'), loading: Loading })

export { Dashboard, Login, Notification, Settings }
