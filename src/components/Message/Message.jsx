import PropTypes from 'prop-types'

export const Message = ({ id, actionFlag }) => {
  return (
    <>
      {actionFlag === null && id === null && <div> Выберите задачу для обновления</div>}
      {actionFlag === false && <div> Выберите задачу для удаления</div>}
    </>
  )
}

Message.propTypes = {
  actionFlag: PropTypes.any,
  id: PropTypes.any,
}
