import styles from './Button.module.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

export const ButtonUpdate = () => {
  const { crudMode } = useSelector((state) => state.crudOperationMode)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (crudMode !== 'UPD') {
      dispatch({ type: 'UPD_MODE' })
    } else {
      dispatch({ type: 'CHILL_MODE' })
      dispatch({ type: 'SAVE_CURRENT_TASK_ID', payload: '' })
    }
  }

  return (
    <>
      {crudMode === 'UPD' ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button onClick={handleClick} className={styles.button}>
          Изменить
        </button>
      )}
    </>
  )
}

ButtonUpdate.propTypes = {
  actionFlag: PropTypes.any,
  setActionFlag: PropTypes.any,
  setIdTask: PropTypes.any,
}
