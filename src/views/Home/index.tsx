import { FC, ReactElement, useEffect } from 'react'

import type { TableListItem } from './data.d'

import { getUsers } from '@/services/api'

export type HomeProps = {}

const Home: FC<HomeProps> = (props): ReactElement => {
  useEffect(() => {
    // getUsers({}).then(res => {
    //   console.log('res', res)
    // })
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#000', fontWeight: 'bold' }}>Wecome!</h1>
        <p>litecase</p>
      </div>
      <div style={{ height: '400px', backgroundColor: '#f0f5ff' }}></div>
      <div style={{ height: '400px', backgroundColor: '#fff' }}></div>
      <div style={{ height: '400px', backgroundColor: '#f6ffed' }}></div>
      <div style={{ height: '400px', backgroundColor: '#fff' }}></div>
    </>
  )
}

export default Home
