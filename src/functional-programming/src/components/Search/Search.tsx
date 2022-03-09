import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import styles from './Search.module.scss'
import { Row } from '../Table'
import _ from 'lodash'
interface SearchProps {
  store?: Row[]
  defaultStore?: Row[]
  updateStore?: (val) => void
  setDefaultStore?: () => void
}

// OR

//interface SearchProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Search(props: SearchProps) {
  const { defaultStore, store, updateStore, setDefaultStore } = props
  const [searchedValue, setSearchedValue] = useState<string>('')

  const onChange = value => {
    setSearchedValue(value)
    if (value !== '') {
      const filteredData = defaultStore.filter(item => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(value.toLowerCase())
      })
      updateStore([..._.intersectionWith(filteredData, store, _.isEqual)])
    } else {
      setDefaultStore()
    }
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={e => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  )
}
