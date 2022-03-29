import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

import styles from './Search.module.scss'

interface SearchProps {
  value: string
  onChange(value: string): void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={value}
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
