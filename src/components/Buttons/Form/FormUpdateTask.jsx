import styles from './Form.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskAsync, updTaskAsync } from '../../../actions/actions'

export const FormUpdateTask = () => {
  const { crudMode, taskID } = useSelector((state) => state.crudOperationMode)
  const dispatch = useDispatch()
  const [title, setValueTitle] = useState('')
  const [description, setValueDescription] = useState('')

  const onChangeTitle = ({ target }) => {
    setValueTitle(target.value.trim())
  }

  const onChangeDescription = ({ target }) => {
    setValueDescription(target.value.trim())
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (title && description) {
      if (crudMode === 'ADD') {
        dispatch(addTaskAsync(title, description))
      }

      if (crudMode === 'UPD' && taskID) {
        dispatch(updTaskAsync(taskID, title, description))
        dispatch({ type: 'SAVE_CURRENT_TASK_ID', payload: '' })
      }
      dispatch({ type: 'CHILL_MODE' })
    } else {
      dispatch({ type: 'CHILL_MODE' })
    }

    setValueTitle('')
    setValueDescription('')
  }

  return (
    (crudMode === 'ADD' || (crudMode === 'UPD' && taskID)) && (
      <form className={styles.formNewTasks} onSubmit={onSubmit}>
        <input
          className={styles.formNewTasksName}
          type="text"
          placeholder="Введите название задачи"
          onChange={onChangeTitle}
        />
        <input
          className={styles.formNewTasksDesc}
          type="text"
          placeholder="Введите описание задачи"
          onChange={onChangeDescription}
        />
        <button className={styles.formNewTasksButton} type="submit">
          сохранить
        </button>
      </form>
    )
  )
}
