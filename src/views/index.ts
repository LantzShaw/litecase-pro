import Loadable from 'react-loadable'

import { Loading } from '../components'

const Dashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
})

const SignIn = Loadable({
  loader: () => import('./SignIn'),
  loading: Loading,
})

const SignUp = Loadable({
  loader: () => import('./SignUp'),
  loading: Loading,
})

const Notification = Loadable({
  loader: () => import('./Notification'),
  loading: Loading,
})

const Settings = Loadable({ loader: () => import('./Settings'), loading: Loading })

const Home = Loadable({ loader: () => import('./Home'), loading: Loading })

const NotFound = Loadable({ loader: () => import('./NotFound'), loading: Loading })

export { Dashboard, SignIn, Notification, Settings, Home, SignUp, NotFound }
