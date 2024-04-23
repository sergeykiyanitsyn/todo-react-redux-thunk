import styles from './Task.module.css'
import { useDispatch } from 'react-redux'
import { delTaskAsync, getTasksAsync } from '../../actions/actions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { searchTasks } from './utils/utils'

const isEmpty = ''

export const Tasks = () => {
  const { todos, error } = useSelector((state) => state.todos)
  const { crudMode } = useSelector((state) => state.crudOperationMode)
  const { filter } = useSelector((state) => state.visibilityFilter)
  const searchWorld = useSelector((state) => state.searcher)
  console.log(searchWorld)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasksAsync())
  }, [])

  let newTasks = [...todos]

  if (filter === 'SORT_ON') {
    newTasks.sort((a, b) => a.title.localeCompare(b.title))
  }

  if (searchWorld !== isEmpty) {
    newTasks = searchTasks(newTasks, searchWorld)
  }

  const handleClick = (id) => {
    switch (crudMode) {
      case 'DEL':
        dispatch(delTaskAsync(id))
        dispatch({ type: 'CHILL_MODE' })
        break
      case 'UPD':
        dispatch({ type: 'SAVE_CURRENT_TASK_ID', payload: id })
        break
      default:
        return
    }
  }

  return (
    <>
      <div className={styles.flexDiv}>
        {error && <p>Error: {error}</p>}
        {newTasks.length > 0 ? (
          newTasks.map(({ id, title, description }) => {
            return (
              <div key={id} className={styles.note} onClick={() => handleClick(id)}>
                <div> {title} </div>
                <div> {description} </div>
              </div>
            )
          })
        ) : (
          <div> Похоже, что таких задач еще нет. Самое время добавить их</div>
        )}
      </div>
    </>
  )
}
