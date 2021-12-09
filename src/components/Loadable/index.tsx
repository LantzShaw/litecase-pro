/**
 * 以下是loadable简单实现原理，可以无缝切换
 */

// **************************** Class Component **************************** //

//  import React, { Component } from 'react'

//  const Loadable = ({ loader, loading: Loading }) => {
//      return class LoadableWrapper extends Component {
//          state = {
//              LoadedComponent: null,
//          }

//          componentDidMount() {
//              loader().then((res) => {
//                  this.setState({ LoadedComponent: res.default })
//              })
//          }

//          render() {
//              const { LoadedComponent } = this.state

//              return LoadedComponent ? <LoadedComponent /> : <Loading />
//          }
//      }
//  }

//  export default Loadable

// **************************** Function Component **************************** //

// import { FC, ReactElement, useEffect, useState } from 'react'

// interface IProps {
//   loader: () => void
//   loading: ReactElement
// }

// const Loadable: FC<IProps> = ({ loader, loading: Loading }): ReactElement => {
//   const LoadableWrapper: FC = (): ReactElement => {
//     const [LoadedComponent, setLoadedComponent] = useState(null)

//     useEffect(() => {
//       loader().then(res => {
//         setLoadedComponent(res.default)
//       })
//     }, [])

//     return LoadedComponent ? <LoadedComponent /> : <Loading />
//   }

//   return <LoadableWrapper />
// }

// export default Loadable

export default function Loadable() {}
