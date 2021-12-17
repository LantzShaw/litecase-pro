import { FC, ReactElement, useEffect } from 'react'
import classNames from 'classnames'
import { Form, Input, Button, Space, Divider, Checkbox, Row, Col, Typography } from 'antd'

import {
  GithubOutlined,
  GoogleCircleFilled,
  WechatOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons'

// TODO: How to fix this problem?
// import styles from './index.less'
// console.log('styles', styles) // => {}

import './index.less'

const { Link, Text } = Typography

interface IProps {}

const SignIn: FC<IProps> = (): ReactElement => {
  const clickHandler = (): void => {
    console.log('clicked!')
  }

  useEffect(() => {}, [])

  return (
    <div className="login_wrapper">
      <div className="login_box">
        <div className="logo_wrapper">
          <div className="logo">Logo</div>
        </div>
        <Form layout="vertical" size="middle">
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Email</span>}>
            <Input
              placeholder="name@example.com"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Password</span>}>
            <Input.Password
              placeholder="Type Your Password"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item>
            <Row justify="space-between">
              <Col>
                <Checkbox checked={true}>Remember me</Checkbox>
              </Col>
              <Col>
                <Link href="https://ant.design" target="_blank">
                  Forgot password?
                </Link>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item style={{ marginTop: '30px' }}>
            <Button type="primary" htmlType="submit" size="large" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Text>Dont't have an account? </Text>
        <Link href="https://ant.design" target="_blank">
          Sign up
        </Link>
        <Divider plain>or</Divider>
        {/* <Button
          style={{ marginTop: '10px' }}
          icon={<GoogleCircleFilled style={{ fontSize: '18px' }} />}
          size="large"
          block
        >
          Login with Google
        </Button> */}
        <Button
          icon={<GithubOutlined style={{ fontSize: '18px' }} />}
          style={{
            marginTop: '6px',
            color: 'rgba(104, 119, 255, 0.8)',
            border: '1px solid rgba(104, 119, 255, 0.8)',
          }}
          size="large"
          block
        >
          Login with Github
        </Button>
        <div style={{ marginTop: '28px' }}>
          <Space>
            <Text>Login with :</Text>
            <Link>
              <WechatOutlined style={{ fontSize: '24px', color: '#389e0d' }} />
            </Link>
            <Link>
              <WeiboCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />
            </Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default SignIn
