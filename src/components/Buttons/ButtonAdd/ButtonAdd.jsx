import styles from './Button.module.css'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

export const ButtonAdd = () => {
  const { crudMode } = useSelector((state) => state.crudOperationMode)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (crudMode !== 'ADD') {
      dispatch({ type: 'ADD_MODE' })
    } else {
      dispatch({ type: 'CHILL_MODE' })
    }
  }
  return (
    <>
      {crudMode === 'ADD' ? (
        <button className={styles.button} onClick={handleClick}>
          Отменить
        </button>
      ) : (
        <button className={styles.button} onClick={handleClick}>
          Добавить
        </button>
      )}
    </>
  )
}

ButtonAdd.propTypes = {
  actionFlag: PropTypes.any,
  setActionFlag: PropTypes.any,
}
