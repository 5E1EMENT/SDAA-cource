import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import styles from './Search.module.scss'
import { Row } from '../Table'
import _ from 'lodash'
interface SearchProps {
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
  const { defaultStore, updateStore, setDefaultStore } = props
  const [searchedValue, setSearchedValue] = useState<string>('')

  const onChange = value => {
    setSearchedValue(value)
    if (value !== '') {
      const filteredData = defaultStore.filter(item => {
        return Object.values({
          country: item.country,
          lastPayments: item.lastPayments,
          name: item.name,
          posts: item.posts,
          username: item.username,
        })
          .join('')
          .toLowerCase()
          .includes(value.toLowerCase())
      })
      updateStore([...filteredData])
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
