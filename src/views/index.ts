import Loadable from 'react-loadable'

import { Loading } from '../components'

const SignIn = Loadable({
  loader: () => import('./SignIn'),
  loading: Loading,
})

const SignUp = Loadable({
  loader: () => import('./SignUp'),
  loading: Loading,
})

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
})

const Notification = Loadable({
  loader: () => import('./Notification'),
  loading: Loading,
})

const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
})

const NotFound = Loadable({
  loader: () => import('./Exception/404'),
  loading: Loading,
})

const Forbidden = Loadable({
  loader: () => import('./Exception/403'),
  loading: Loading,
})

const ServerException = Loadable({
  loader: () => import('./Exception/500'),
  loading: Loading,
})

export { SignIn, Notification, Settings, Home, SignUp, NotFound, Forbidden, ServerException }
