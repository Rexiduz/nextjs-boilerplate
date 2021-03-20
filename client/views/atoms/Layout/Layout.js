import Image from 'next/image'
import Meta from '@View/atoms/Meta'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
