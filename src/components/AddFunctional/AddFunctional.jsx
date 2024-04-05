import { Searcher } from './Seracher'
import { Sorting } from './Sorting'
import PropTypes from 'prop-types'

import styles from './AddFunctional.module.css'

export const AddFunctional = ({
  initialInputValue,
  setInitialInputValue,
  sortOn,
  setSortOn,
}) => (
  <div className={styles.addFunctional}>
    <Searcher
      initialInputValue={initialInputValue}
      setInitialInputValue={setInitialInputValue}
    />
    <Sorting sortOn={sortOn} setSortOn={setSortOn} />
  </div>
)

AddFunctional.propTypes = {
  initialInputValue: PropTypes.any,
  setInitialInputValue: PropTypes.any,
  sortOn: PropTypes.bool,
  setSortOn: PropTypes.any,
}
