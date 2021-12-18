import { FC, ReactElement, useEffect } from 'react'
import classNames from 'classnames'
import { Form, Input, Button, Space, Divider, Checkbox, Row, Col, Typography } from 'antd'

import {
  GithubOutlined,
  GoogleCircleFilled,
  WechatOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons'

import './index.less'

const { Link, Text } = Typography

interface IProps {}

const SignIn: FC<IProps> = (): ReactElement => {
  return (
    <div className="register_wrapper">
      <div className="register_box">
        <div className="logo_wrapper">
          <div className="logo">Litecase</div>
        </div>
        <Form layout="vertical" size="middle">
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Name</span>}>
            <Input
              placeholder="Type your name"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Email</span>}>
            <Input
              placeholder="Type your email"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Password</span>}>
            <Input.Password
              placeholder="Type your password"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item
            label={<span style={{ fontWeight: 'bold', fontSize: '16px' }}>Confirm Password</span>}
          >
            <Input.Password
              placeholder="Confirm your password"
              size="large"
              style={{ border: '1px solid #ededed' }}
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={true}>
              Creating an account means you’re okay with our <Link>Terms of Service</Link>,{' '}
              <Link>Privacy Policy</Link>, and our default <Link>Notification Settings</Link>.
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
        <Text
          style={{
            fontFamily:
              '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,apple color emoji,segoe ui emoji,Segoe UI Symbol,noto color emoji',
          }}
        >
          Already have an account?{' '}
        </Text>
        <Link href="https://ant.design" target="_blank">
          Sign in
        </Link>
        {/* <Divider plain>or</Divider> */}
        {/* <Button
          style={{ marginTop: '10px' }}
          icon={<GoogleCircleFilled style={{ fontSize: '18px' }} />}
          size="large"
          block
        >
          Login with Google
        </Button> */}
        {/* <Button
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
        </div> */}
      </div>
    </div>
  )
}

export default SignIn
