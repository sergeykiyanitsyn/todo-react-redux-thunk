import { UpdForm } from './UpdForm/UpdForm'
import { AddForm } from './AddForm/AddForm'
import PropTypes from 'prop-types'

export const Form = ({ actionFlag, setActionFlag, refreshTasks, idTask }) => (
  <>
    {actionFlag === true && (
      <AddForm setActionFlag={setActionFlag} refreshTasks={refreshTasks} />
    )}
    {actionFlag === null && idTask !== null && (
      <UpdForm
        idTask={idTask}
        setActionFlag={setActionFlag}
        refreshTasks={refreshTasks}
      />
    )}
  </>
)

Form.propTypes = {
  actionFlag: PropTypes.any,
  idTask: PropTypes.any,
  setActionFlag: PropTypes.any,
  refreshTasks: PropTypes.any,
}
