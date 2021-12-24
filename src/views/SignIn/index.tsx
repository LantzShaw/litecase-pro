import { FC, ReactElement, useEffect } from 'react'
import classNames from 'classnames'
import { Form, Input, Button, Space, Divider, Checkbox, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'

import {
  GithubOutlined,
  GoogleCircleFilled,
  WechatOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons'

import styles from './index.less'

const { Text } = Typography

interface IProps {}

const SignIn: FC<IProps> = (): ReactElement => {
  const clickHandler = (): void => {
    console.log('clicked!')
  }

  useEffect(() => {}, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logo}>Litecase</div>
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
                <Link to="/" target="_blank">
                  Forgot password?
                </Link>
              </Col>
            </Row>
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
              Sign in...
            </Button>
          </Form.Item>
        </Form>
        <Text>Don't have an account? </Text>
        <Link to="/orgz/member/reg">Sign up</Link>
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
            <Link to="/">
              <WechatOutlined style={{ fontSize: '24px', color: '#389e0d' }} />
            </Link>
            <Link to="/">
              <WeiboCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />
            </Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default SignIn
