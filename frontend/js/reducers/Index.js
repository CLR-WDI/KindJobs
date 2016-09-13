import {combineReducers} from "redux"

import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import filters from "./filtersReducer"

export default combineReducers({
  kindjobs,
  applications,
  filters
})
