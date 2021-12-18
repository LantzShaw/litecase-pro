import { FC, ReactElement } from 'react'

import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

import './App.less'

const App: FC = (): ReactElement => {
  return (
    <>
      <SignIn />
    </>
  )
}

export default App
