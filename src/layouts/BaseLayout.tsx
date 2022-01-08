import { FC, ReactElement } from 'react'
import { Input, Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'

const BaseLayout: FC = (): ReactElement => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      <Layout.Header
        style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #f3f3f3',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          height: '68px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            width: '120px',
            height: '32px',
            margin: '14px 24px 14px 0',
            background: '#fff',
            lineHeight: '32px',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          Logo
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{ width: '60%', display: 'inline-block' }}
        >
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="hot">热门</Menu.Item>
          <Menu.Item key="place">圈子</Menu.Item>
        </Menu>
        <div
          style={{
            display: 'inline-block',
          }}
        >
          <Input />
        </div>
      </Layout.Header>
      <Layout.Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default BaseLayout
