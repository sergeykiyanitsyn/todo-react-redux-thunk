import styles from './Button.module.css'
import PropTypes from 'prop-types'

export const ButtonUpdate = ({ actionFlag, setActionFlag, setIdTask }) => {
  const handleClick = () => {
    if (actionFlag !== null) {
      setActionFlag(null)
    } else {
      setActionFlag('')
      setIdTask(null)
    }
  }

  return (
    <>
      {actionFlag === null ? (
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
