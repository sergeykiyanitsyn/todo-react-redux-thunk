import { AddFunctional, Tasks, Buttons } from './components'
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.taskHeaders}> Лист задач </div>
        <Buttons />
        <AddFunctional />
        <Tasks />
      </div>
    </>
  )
}

export default App
