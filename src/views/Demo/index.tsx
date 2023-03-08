import { Component, ReactNode } from 'react'

export default class Demo extends Component {
  //   state = {}
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {}

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {}

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return true
  }

  componentWillUnmount(): void {}

  render(): ReactNode {
    return <div></div>
  }
}
