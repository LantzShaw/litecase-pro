import { FC, ReactElement } from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { Link } from 'react-router-dom'

import styles from './index.less'

const { Text } = Typography

interface IProps {}

const SignIn: FC<IProps> = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>Litecase</div>
        </div>
        <Form layout="vertical" size="middle">
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Name</span>}>
            <Input
              placeholder="Type your name"
              size="large"
              style={{ border: '1px solid #f4f4f4' }}
            />
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Email</span>}>
            <Input
              placeholder="Type your email"
              size="large"
              style={{ border: '1px solid #f4f4f4' }}
            />
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Password</span>}>
            <Input.Password
              placeholder="Type your password"
              size="large"
              style={{ border: '1px solid #f4f4f4' }}
            />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Confirm Password</span>}
          >
            <Input.Password
              placeholder="Confirm your password"
              size="large"
              style={{ border: '1px solid #f4f4f4' }}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={true}>
              Creating an account means you’re okay with our <Link to="/">Terms of Service</Link>,{' '}
              <Link to="/">Privacy Policy</Link>, and our default{' '}
              <Link to="/">Notification Settings</Link>.
            </Checkbox>
          </Form.Item>
          <Form.Item style={{ marginTop: '30px' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={false}
              disabled={false}
            >
              Sign up...
            </Button>
          </Form.Item>
        </Form>
        <Text>Already have an account? </Text>
        <Link to="/orgz/member/login">Sign in</Link>
      </div>
    </div>
  )
}

export default SignIn
