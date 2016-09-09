import {combineReducers} from "redux"

import todos from "./todosReducer"
import selection from "./selectorReducer"

export default combineReducers({
  todos,
  selection
})
