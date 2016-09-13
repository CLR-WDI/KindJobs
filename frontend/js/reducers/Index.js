import {combineReducers} from "redux"

import scopes from "./scopesReducer"
import sectors from "./sectorsReducer"
import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import sgos from "./sgosReducer"

export default combineReducers({
  scopes,
  sectors,
  sgos,
  kindjobs,
  applications,
})
