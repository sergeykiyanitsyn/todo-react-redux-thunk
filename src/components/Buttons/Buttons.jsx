import { ButtonAdd } from './ButtonAdd/ButtonAdd'
import { ButtonUpdate } from './ButtonUpdate/ButtonUpdate'
import { ButtonDelete } from './ButtonDelete/ButtonDelete'
import { FormUpdateTask } from './Form'
import styles from './Button.module.css'
import { useSelector } from 'react-redux'

export const Buttons = () => {
  const { crudMode, taskID } = useSelector((state) => state.crudOperationMode)

  return (
    <>
      <div className={styles.flexButtons}>
        <ButtonAdd />
        <ButtonUpdate />
        <ButtonDelete />
      </div>
      <FormUpdateTask />
      {crudMode === 'DEL' && <div> Выберите задачу для удаления</div>}
      {crudMode === 'UPD' && !taskID && <div> Выберите задачу для обновления</div>}
    </>
  )
}
