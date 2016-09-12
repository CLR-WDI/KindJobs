import {combineReducers} from "redux"

import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"

export default combineReducers({
  kindjobs,
  applications,
})
