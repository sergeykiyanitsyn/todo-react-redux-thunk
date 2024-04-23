import styles from './Button.module.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

export const ButtonDelete = () => {
  const { crudMode } = useSelector((state) => state.crudOperationMode)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (crudMode !== 'DEL') {
      dispatch({ type: 'DEL_MODE' })
    } else {
      dispatch({ type: 'CHILL_MODE' })
    }
  }

  return (
    <>
      {crudMode === 'DEL' ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button onClick={handleClick} className={styles.button}>
          Удалить
        </button>
      )}
    </>
  )
}

ButtonDelete.propTypes = {
  actionFlag: PropTypes.any,
  setActionFlag: PropTypes.any,
}
