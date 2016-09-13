import {combineReducers} from "redux"

import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import sgos from "./sgosReducer"

export default combineReducers({
  sgos,
  kindjobs,
  applications,
})
