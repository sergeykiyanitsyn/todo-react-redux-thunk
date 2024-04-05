import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { AddFunctional, Form, Tasks, Loader, Buttons, Message } from './components'

//actionFlags: add - true, delete - false, update - null

const App = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [actionFlag, setActionFlag] = useState('')
  const [initialInputValue, setInitialInputValue] = useState('')
  const [sortOn, setSortOn] = useState(false)
  const [idTask, setIdTask] = useState(null)

  const refreshTasks = () => {
    setIsLoading(true)

    fetch('http://localhost:3005/tasks')
      .then((loadedData) => loadedData.json())
      .then((serverTasks) => {
        setTasks(serverTasks)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)

    fetch('http://localhost:3005/tasks')
      .then((loadedData) => loadedData.json())
      .then((serverTasks) => setTasks(serverTasks))
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.taskHeaders}> Лист задач </div>
        <Buttons
          actionFlag={actionFlag}
          setActionFlag={setActionFlag}
          setIdTask={setIdTask}
        />
        <Form
          actionFlag={actionFlag}
          setActionFlag={setActionFlag}
          refreshTasks={refreshTasks}
          idTask={idTask}
        />
        <Message id={idTask} actionFlag={actionFlag}></Message>
        <AddFunctional
          initialInputValue={initialInputValue}
          setInitialInputValue={setInitialInputValue}
          sortOn={sortOn}
          setSortOn={setSortOn}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <Tasks
            tasks={tasks}
            initialInputValue={initialInputValue}
            sortOn={sortOn}
            actionFlag={actionFlag}
            setActionFlag={setActionFlag}
            refreshTasks={refreshTasks}
            setIdTask={setIdTask}
          />
        )}
      </div>
    </>
  )
}

export default App
