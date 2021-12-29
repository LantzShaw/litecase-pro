import { FC, ReactElement } from 'react'
import { Button, Result } from 'antd'

export type IProps = {}

const NotFound: FC<IProps> = (props): ReactElement => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}

export default NotFound
