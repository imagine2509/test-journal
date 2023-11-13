import SearchField from './SearchField'
import Tabs from './Tabs'

import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Tabs />
      <SearchField />
    </header>
  )
}

export default Header
