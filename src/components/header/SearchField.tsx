import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import { useState } from 'react'

import styles from './header.module.css'

const SearchField = () => {
  const [value, setValue] = useState('')
  return (
    <div className={styles.container}>
      <span className='p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search'
        />
      </span>
      <Button label='Найти' aria-label='Submit' />
    </div>
  )
}

export default SearchField
