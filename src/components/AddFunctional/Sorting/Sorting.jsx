import styles from './Sorting.module.css'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

export const Sorting = () => {
  const { filter } = useSelector((state) => state.visibilityFilter)
  const dispatch = useDispatch()
  const onClickSort = () => {
    filter === 'SHOW_ALL'
      ? dispatch({ type: 'SET_ALPHABET_SORT' })
      : dispatch({ type: 'SHOW_ALL' })
  }

  return (
    <div className={styles.sorting}>
      <label htmlFor="sort">
        {' '}
        Сортировка по алфавиту{' '}
        <button
          className={styles.sortingButton}
          id="sort"
          type="click"
          onClick={onClickSort}
        >
          {filter === 'SORT_ON' ? 'On' : 'Off'}
        </button>
      </label>{' '}
    </div>
  )
}

Sorting.propTypes = {
  sortOn: PropTypes.bool,
  setSortOn: PropTypes.any,
}
