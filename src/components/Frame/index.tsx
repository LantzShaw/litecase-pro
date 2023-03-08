import { FC, PropsWithChildren, ReactElement, useEffect, useState, useRef } from 'react'

import styles from './index.less'

export type FrameProps = PropsWithChildren<{
  width: number
  height: number
}>

const Frame: FC<FrameProps> = ({ width, height, children }): ReactElement => {
  const [frameWidth, setFrameWidth] = useState<number>(width || window.screen.width)
  const [frameHeight, setFrameHeight] = useState<number>(height || window.screen.height)
  const frameRef = useRef<HTMLDivElement>(null)

  const setSize = () => {
    // NOTE: !. 的意思是断言，告诉 ts 该对象里一定有某个值
    frameRef.current!.style.width = frameWidth + 'px'
    frameRef.current!.style.height = frameHeight + 'px'
  }

  const resizeHandler = (): void => {
    const bodyWidth = document.body.clientWidth
    const bodyHeight = document.body.clientHeight

    const scaleX = bodyWidth / frameWidth
    const scaleY = bodyHeight / frameHeight

    frameRef.current!.style.transform = `scale(${scaleX}, ${scaleY})`
  }

  useEffect(() => {
    setSize()
    resizeHandler()

    window.addEventListener('resize', resizeHandler)

    // NOTE: also you can use like this:
    // window.onresize = resizeHandler

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div className={styles.container} ref={frameRef}>
      {children}
    </div>
  )
}

export default Frame

// 数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。
