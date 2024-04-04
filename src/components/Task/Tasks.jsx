import styles from './Task.module.css'
import PropTypes from 'prop-types'

const isEmpty = ''

const searchTasks = (tasks, searchWord) => {
  const foundTasks = []
  tasks.map((task) => {
    const foundTask = task.description.toUpperCase().search(searchWord.toUpperCase())
    if (foundTask !== -1) {
      foundTasks.push(task)
    }
  })
  return foundTasks
}

export const Tasks = ({
  tasks,
  initialInputValue,
  sortOn,
  actionFlag,
  setActionFlag,
  refreshTasks,
  setIdTask,
}) => {
  let newTasks = [...tasks]

  if (sortOn === true) {
    newTasks.sort((a, b) => a.title.localeCompare(b.title))
  }

  if (initialInputValue !== isEmpty) {
    newTasks = searchTasks(newTasks, initialInputValue)
  }

  const handleClick = (id) => {
    if (actionFlag === false) {
      fetch(`http://localhost:3005/tasks/${id}`, {
        method: 'DELETE',
      }).then(() => {
        refreshTasks()
        setActionFlag('')
      })
    }

    setIdTask(id)
  }

  return (
    <>
      <div className={styles.flexDiv}>
        {newTasks.length > 0 ? (
          newTasks.map(({ id, title, description }) => {
            return (
              <div key={id} className={styles.note} onClick={() => handleClick(id)}>
                {<div> {title} </div>}
                {<div> {description} </div>}
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

Tasks.propTypes = {
  tasks: PropTypes.array,
  initialInputValue: PropTypes.string,
  sortOn: PropTypes.bool,
  actionFlag: PropTypes.any,
  setActionFlag: PropTypes.any,
  refreshTasks: PropTypes.func,
  setIdTask: PropTypes.any,
}
