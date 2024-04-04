import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.css'

export const UpdForm = ({ idTask, setActionFlag, refreshTasks }) => {
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
      fetch(`http://localhost:3005/tasks/${idTask}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
        }),
      })
        .then(() => refreshTasks())
        .finally(() => {
          setActionFlag('')
        })
    } else {
      setActionFlag('')
    }

    setValueTitle('')
    setValueDescription('')
  }

  return (
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
}

UpdForm.propTypes = {
  idTask: PropTypes.any,
  setActionFlag: PropTypes.any,
  refreshTasks: PropTypes.any,
}
