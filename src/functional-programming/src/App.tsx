import { useState, useEffect } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'

import { Table, Filters, Sort, Search } from './components'
import { getImages, getUsers, getAccounts } from './mocks/api'

import styles from './App.module.scss'

import type { Row } from './components'
import type { Image, User, Account } from '../types'

import rows from './mocks/rows.json'

import _ from 'lodash'

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data

function App() {
  const [data, setData] = useState<Row[]>(undefined)
  const [defaultData, setDefaultData] = useState<Row[]>(undefined)

  const dataConverter = (
    users: User[],
    accounts: Account[],
    images: Image[]
  ): Row[] => {
    const newUsers: User[] = [...users]
    const newAccounts: Account[] = [...accounts]
    const newImages: Image[] = [...images]

    const ids: Array<string> = newUsers.map((user: User) => user.userID)

    const rows: Row[] = ids.map(id => {
      return {
        avatar: newImages.find(image => image.userID === id)?.url,
        username: newUsers.find(user => user.userID === id)?.username,
        country: newUsers.find(user => user.userID === id)?.country,
        name: newUsers.find(user => user.userID === id)?.name,
        lastPayments: newAccounts.find(account => account.userID === id)
          ?.payments.length,
        posts: newAccounts.find(account => account.userID === id)?.posts,
      }
    })

    return rows
  }

  const setStore = (store): void => {
    setData([...store])
  }
  const setDefaultStore = (): void => {
    setData(defaultData)
  }

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const data = dataConverter(users, accounts, images)
        setStore(data)
        setDefaultData(data)
      }
    )
  }, [])

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters
              store={defaultData}
              updateStore={setStore}
              setDefaultStore={setDefaultStore}
            />
            <Sort store={data} updateStore={setStore} />
          </div>
          <Search
            defaultStore={defaultData}
            updateStore={setStore}
            setDefaultStore={setDefaultStore}
          />
        </div>
        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  )
}

export default App
