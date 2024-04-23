export const searcherReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCHER_WORD':
      return action.payload
    default:
      return state
  }
}
