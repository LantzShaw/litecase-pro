import { FC, ReactElement } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Content } = Layout

const BaseLayout: FC = (): ReactElement => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background: '#fff',
      }}
    >
      <Header style={{ backgroundColor: '#fff', borderBottom: '1px solid #f3f3f3' }}></Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default BaseLayout
