import { combineReducers } from 'redux'
import {
  todosReducer,
  visibilityFilterReducer,
  crudOperationModeReducer,
  searcherReducer,
} from './index'

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  crudOperationMode: crudOperationModeReducer,
  searcher: searcherReducer,
})

export default rootReducer
