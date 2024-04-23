export const visibilityFilterReducer = (state = { filter: 'SHOW_ALL' }, action) => {
  switch (action.type) {
    case 'SET_ALPHABET_SORT':
      return { ...state, filter: 'SORT_ON' }
    case 'SHOW_ALL':
      return { ...state, filter: 'SHOW_ALL' }
    default:
      return state
  }
}
