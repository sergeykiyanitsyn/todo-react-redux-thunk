import { Searcher } from './Seracher'
import { Sorting } from './Sorting'
import styles from './AddFunctional.module.css'

export const AddFunctional = () => (
  <div className={styles.addFunctional}>
    <Searcher />
    <Sorting />
  </div>
)
