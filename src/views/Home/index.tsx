import { FC, ReactElement, useEffect } from 'react'
import { Button, message } from 'antd'

import type { TableListItem } from './data'

import { getUsers } from '@/services/user'

export type HomeProps = {}

const Home: FC<HomeProps> = (props): ReactElement => {
  useEffect(() => {
    // getUsers({}).then(res => {
    //   console.log('res', res)
    // })
  }, [])

  const clickHandler = () => {
    console.log('**********click**********')

    const vars = {
      '@primary-color': '#397dcc',
      '@secondary-color': '#0000ff',
      '@text-color': '#000000',
      '@text-color-secondary': '#eb2f96',
      '@heading-color': '#fa8c16',
      '@layout-header-background': '#b36e94',
      '@btn-primary-bg': '#ff4400',
    }

    window.less
      .modifyVars(vars)
      .then(() => {})
      .catch((error: any) => {
        message.error(`Failed to update theme`, error)
      })
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#000', fontWeight: 'bold' }}>Wecome!</h1>
        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff4400' }}>litecase</p>

        <Button type="primary" onClick={clickHandler}>
          切换主题
        </Button>
      </div>
      <div style={{ height: '400px', backgroundColor: '#f0f5ff' }}></div>
      <div style={{ height: '400px', backgroundColor: '#fff' }}></div>
      <div style={{ height: '400px', backgroundColor: '#f6ffed' }}></div>
      <div style={{ height: '400px', backgroundColor: '#fff' }}></div>
    </>
  )
}

export default Home
