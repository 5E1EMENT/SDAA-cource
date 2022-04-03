import { useState, useEffect, useCallback } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'

import { Table, Filters, Sort, Search } from './components'
import { getImages, getUsers, getAccounts } from './mocks/api'

import styles from './App.module.scss'

import type { Row } from './components'
import type { Image, User, Account, UserInfo } from '../types'

import _ from 'lodash'
import { convert, filter, sort } from './utils/data'

function App() {
  const [defaultData, setDefaultData] = useState<UserInfo[]>([])
  const [data, setData] = useState<UserInfo[]>([])

  const [filters, setFilters] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleFiltersChange = useCallback(
    (value: string[]) => {
      setFilters(value)
      setData(
        filter(defaultData, {
          filters: value,
          searchTerm,
          sortBy,
        })
      )
    },
    [defaultData, searchTerm, sortBy]
  )

  const handleSearchTermChange = useCallback(
    (value: string) => {
      console.log(value)
      setSearchTerm(value)
      
      setData(
        filter(defaultData, {
          filters,
          searchTerm: value,
          sortBy,
        })
      )
    },
    [defaultData, filters, sortBy]
  )

  const handleSortChange = useCallback(
    (value: string) => {
      setSortBy(value)
      setData(sort(data, value))
    },
    [data]
  )

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const data = convert({ accounts, images, users })
        setDefaultData(data)
        setData(data)
      }
    )
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters value={filters} onChange={handleFiltersChange} />
            <Sort value={sortBy} onChange={handleSortChange} />
          </div>
          <Search value={searchTerm} onChange={handleSearchTermChange} />
        </div>
        <Table rows={data} />
      </div>
    </StyledEngineProvider>
  )
}

export default App
