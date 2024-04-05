import PropTypes from 'prop-types'
import { ButtonAdd } from './ButtonAdd/ButtonAdd'
import { ButtonUpdate } from './ButtonUpdate/ButtonUpdate'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'
import styles from './Button.module.css'

export const Buttons = ({ actionFlag, setActionFlag, setIdTask }) => (
  <div className={styles.flexButtons}>
    <ButtonAdd actionFlag={actionFlag} setActionFlag={setActionFlag}></ButtonAdd>
    <ButtonUpdate
      actionFlag={actionFlag}
      setActionFlag={setActionFlag}
      setIdTask={setIdTask}
    ></ButtonUpdate>
    <ButtonDelete actionFlag={actionFlag} setActionFlag={setActionFlag}></ButtonDelete>
  </div>
)

Buttons.propTypes = {
  actionFlag: PropTypes.any,
  setActionFlag: PropTypes.any,
  setIdTask: PropTypes.any,
}
