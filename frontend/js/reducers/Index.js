import {combineReducers} from "redux"

import employmentTerms from "./employmentTermsReducer"
import locations from "./locationsReducer"
import scopes from "./scopesReducer"
import sectors from "./sectorsReducer"
import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import sgos from "./sgosReducer"

export default combineReducers({
  employmentTerms,
  locations,
  scopes,
  sectors,
  sgos,
  kindjobs,
  applications,
})
