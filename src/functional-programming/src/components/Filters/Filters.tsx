import { useCallback } from 'react'
import Checkbox from '@mui/material/Checkbox'

import styles from './Filters.module.scss'

export interface FilterOption {
  title: string
}

const OPTIONS: FilterOption[] = [
  {
    title: 'Without posts',
  },
  {
    title: 'More than 100 posts',
  },
]

interface FiltersProps {
  value: string[]
  onChange(value: string[]): void
}

export function Filters({ value, onChange }: FiltersProps) {
  const handleChange = useCallback(
    ({ title }) => {
      let updatedFilters: string[]

      if (value.find(filter => filter === title)) {
        updatedFilters = value.filter(filter => filter !== title)
      } else {
        updatedFilters = [...value, title]
      }

      onChange(updatedFilters)
    },
    [value, onChange]
  )

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map(option => (
          <li
            value={option.title}
            onClick={() => handleChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!value.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => handleChange(option)}
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
