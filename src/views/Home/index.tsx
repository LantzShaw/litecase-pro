import { FC, ReactElement } from 'react'
import { Layout, DatePicker, Spin, Result, Button, Typography } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import type { TableListItem } from './data.d' // 这里不能.ts

const { Header, Content } = Layout
const { Title } = Typography
const { RangePicker } = DatePicker

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
      <Header style={{ backgroundColor: '#fff' }}>
        {/* <div className={styles.logo}>Litecase</div> */}
        <Title level={2}>Litecase</Title>
      </Header>
      <Content>
        <RangePicker />
        <Spin indicator={<EllipsisOutlined style={{ fontSize: 24 }} spin />} />

        <Result
          status="success"
          title="Successfully"
          subTitle="You sign up"
          extra={[
            <Button type="primary" key="console">
              Go Login
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      </Content>
    </Layout>
  )
}

export default Home
