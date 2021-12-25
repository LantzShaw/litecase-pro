import { FC, ReactElement } from 'react'

import styles from './index.less'

export type UserFormProps = {
  name: string
}

const UserForm: FC<UserFormProps> = (props): ReactElement => {
  const { name } = props

  let className

  if (name === 'loginForm') {
    className = `${styles.container} ${styles.login_container}`
  } else if (name === 'registerForm') {
    className = `${styles.container} ${styles.register_container}`
  }

  return (
    <div className={styles.wrapper}>
      <div className={className}>
        <div className={styles.box}>
          <div className={styles.logo}>Litecase</div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default UserForm
