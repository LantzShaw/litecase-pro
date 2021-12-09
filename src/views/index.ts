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

export { Dashboard, Login }
