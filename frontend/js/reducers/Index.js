import {combineReducers} from "redux"

import sectors from "./sectorsReducer"
import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import sgos from "./sgosReducer"

export default combineReducers({
  sectors,
  sgos,
  kindjobs,
  applications,
})
