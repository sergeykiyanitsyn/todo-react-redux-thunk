import styles from './Button.module.css'
import PropTypes from 'prop-types'

export const ButtonDelete = ({ actionFlag, setActionFlag }) => {
  const handleClick = () => {
    if (actionFlag !== false) {
      setActionFlag(false)
    } else {
      setActionFlag('')
    }
  }

  return (
    <>
      {actionFlag === false ? (
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
