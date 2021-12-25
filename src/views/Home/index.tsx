import { FC, ReactElement } from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

export type HomeProps = {}

const Home: FC<HomeProps> = (props): ReactElement => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(to bottom right, rgb(240, 245, 255, 0.5), rgba(249, 240, 255, 0.5))',
      }}
    >
      <Header style={{ backgroundColor: '#fff' }}>Header</Header>
      <Content>Content</Content>
    </Layout>
  )
}

export default Home
