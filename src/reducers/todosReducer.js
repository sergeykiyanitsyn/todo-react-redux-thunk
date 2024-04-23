const initialState = {
  todos: [],
  error: null,
}

export const todosReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_INITIAL_TODO':
      return {
        ...state,
        todos: payload,
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: payload,
      }
    case 'UPDATE_TODO': {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, ...payload.updatedData }
        }
        return todo
      })
      return {
        ...state,
        todos: updatedTodos,
      }
    }
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      }
    case 'DELETE_TODO_FAILURE':
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
