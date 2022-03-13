import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'

import styles from './Filters.module.scss'
import { Row } from '../Table'

interface FiltersProps {
  store?: Row[]
  updateStore?: (val) => void
  setDefaultStore?: () => void
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: 'Without posts',
  },
  {
    title: 'More than 100 posts',
  },
]

export function Filters(props: FiltersProps) {
  const { store, updateStore, setDefaultStore } = props
  const [selectedFilter, setSelectedFilter] = useState<string[]>([])

  const onChange = ({ title }) => {
    let updatedFilters: string[]

    if (selectedFilter.find(filter => filter === title)) {
      updatedFilters = selectedFilter.filter(filter => filter !== title)
    } else {
      updatedFilters = [...selectedFilter, title]
    }

    setSelectedFilter(updatedFilters)
    filterDataByPosts(updatedFilters)
  }

  const filterDataByPosts = (updatedFilters: string[]) => {
    const withoutPosts = updatedFilters.find(item => item === 'Without posts')
    const withMoreThan100Posts = updatedFilters.find(
      item => item === 'More than 100 posts'
    )
    setDefaultStore()

    if (withoutPosts) {
      updateStore(store.filter(item => item.posts === 0))
    }
    if (withMoreThan100Posts) {
      updateStore(store.filter(item => item.posts >= 100))
    }

    if (withoutPosts && withMoreThan100Posts) {
      updateStore([
        ...store.filter(item => item.posts === 0),
        ...store.filter(item => item.posts >= 100),
      ])
    }
  }

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map(option => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!selectedFilter.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
