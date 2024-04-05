import styles from './Button.module.css'
import PropTypes from 'prop-types'

export const ButtonAdd = ({ actionFlag, setActionFlag }) => {
  const handleClick = () => {
    if (actionFlag !== true) {
      setActionFlag(true)
    } else {
      setActionFlag('')
    }
  }
  return (
    <>
      {actionFlag === true ? (
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
