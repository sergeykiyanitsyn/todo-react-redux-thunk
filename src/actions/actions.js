import { URL, PATH } from '../consts/urlConsts'

export const getTasksAsync = () => {
  return (dispatch) => {
    fetch(`${URL}/${PATH}`)
      .then((loadedData) => loadedData.json())
      .then((serverTasks) => dispatch({ type: 'SET_INITIAL_TODO', payload: serverTasks }))
  }
}

export const addTaskAsync = (title, description) => (dispatch) => {
  fetch(`${URL}/${PATH}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: `${title}`,
      description: `${description}`,
    }),
  })
    .then((response) => {
      if (response.ok) {
        fetch(`${URL}/${PATH}`)
          .then((loadedData) => loadedData.json())
          .then((serverTasks) => dispatch({ type: 'ADD_TODO', payload: serverTasks }))
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.error)
        })
      }
    })
    .catch((error) => dispatch(deleteTodoFailure(error.message)))
}

export const updTaskAsync = (id, title, description) => (dispatch) => {
  fetch(`${URL}/${PATH}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title: `${title}`,
      description: `${description}`,
    }),
  })
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: 'UPDATE_TODO',
          payload: {
            id: id,
            updatedData: { title: `${title}`, description: `${description}` },
          },
        })
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.error)
        })
      }
    })
    .catch((error) => dispatch(deleteTodoFailure(error.message)))
}

export const deleteTodoSuccess = (id) => ({
  type: 'DELETE_TODO_SUCCESS',
  payload: id,
})

export const deleteTodoFailure = (error) => ({
  type: 'DELETE_TODO_FAILURE',
  payload: error,
})

export const delTaskAsync = (id) => (dispatch) => {
  fetch(`${URL}/${PATH}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        dispatch(deleteTodoSuccess(id))
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.error)
        })
      }
    })
    .catch((error) => dispatch(deleteTodoFailure(error.message)))
}
