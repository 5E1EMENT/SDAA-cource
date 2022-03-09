import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import styles from './Sort.module.scss'
import { Row } from '../Table'

interface SortProps {
  store?: Row[]
  updateStore?: (val) => void
}

// OR

//interface SortProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Sort(props: SortProps) {
  const { store, updateStore } = props

  const handleChange = (order): void => {
    switch (order) {
      case 'asc':
        return updateStore(
          store.sort((a: Row, b: Row) => a.lastPayments - b.lastPayments)
        )

      case 'desc':
        return updateStore(
          store.sort((a, b) => b.lastPayments - a.lastPayments)
        )
    }
  }

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={e => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  )
}
