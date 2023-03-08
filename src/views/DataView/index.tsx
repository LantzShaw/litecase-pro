import { FC, ReactElement } from 'react'
import { Frame } from '@/components'

export type DataViewProps = {}

const DataView: FC<DataViewProps> = (): ReactElement => {
  return (
    <Frame width={1920} height={1080}>
      <div
        style={{
          width: '200px',
          height: '400px',
          backgroundColor: '#f40',
        }}
      ></div>
    </Frame>
  )
}

export default DataView
