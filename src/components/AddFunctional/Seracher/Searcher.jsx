import styles from './Searcher.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import debounce from 'lodash/debounce'

export const Searcher = () => {
  const searchWord = useSelector((state) => state.searcher)
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState(searchWord)

  const onChangeFinder = ({ target }) => {
    dispatch({ type: 'SET_SEARCHER_WORD', payload: target.value.trim() })
    setInputText(target.value.trim())
  }

  return (
    <form className={styles.search}>
      <input
        className={styles.searchString}
        type="text"
        value={inputText}
        placeholder="Поиск задачи по описанию"
        onChange={onChangeFinder}
      />
    </form>
  )
}
