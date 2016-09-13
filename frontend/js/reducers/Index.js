import {combineReducers} from "redux"

import locations from "./locationsReducer"
import scopes from "./scopesReducer"
import sectors from "./sectorsReducer"
import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import sgos from "./sgosReducer"

export default combineReducers({
  locations,
  scopes,
  sectors,
  sgos,
  kindjobs,
  applications,
})
