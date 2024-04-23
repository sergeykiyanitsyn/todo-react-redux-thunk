export const initialState = {
  crudMode: 'CHILL',
  taskID: '',
}

export const crudOperationModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MODE':
      return {
        ...state,
        crudMode: 'ADD',
      }
    case 'UPD_MODE':
      return {
        ...state,
        crudMode: 'UPD',
      }
    case 'DEL_MODE':
      return {
        ...state,
        crudMode: 'DEL',
      }
    case 'CHILL_MODE':
      return {
        ...state,
        crudMode: 'CHILL',
      }
    case 'SAVE_CURRENT_TASK_ID':
      return {
        ...state,
        taskID: action.payload,
      }

    default:
      return state
  }
}
