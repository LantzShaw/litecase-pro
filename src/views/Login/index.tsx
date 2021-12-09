import { FC, ReactElement, useEffect } from 'react'
import { Button } from 'antd'

interface IProps {}

const Login: FC<IProps> = (): ReactElement => {
  const clickHandler = (): void => {
    console.log('clicked!')
  }

  useEffect(() => {}, [])

  return (
    <div>
      <Button type="primary" onClick={clickHandler}>
        Button
      </Button>
    </div>
  )
}

export default Login
