import {combineReducers} from "redux"

import employmentTerms from "./employmentTermsReducer"
import locations from "./locationsReducer"
import scopes from "./scopesReducer"
import sectors from "./sectorsReducer"
import kindjobs from "./kindjobsReducer"
import applications from "./applicationsReducer"
import terms from "./termsReducer"
import sgos from "./sgosReducer"
import filters from "./filtersReducer"
import users from "./usersReducer"
import uploader from "./uploaderReducer"

export default combineReducers({
  employmentTerms,
  locations,
  scopes,
  sectors,
  sgos,
  kindjobs,
  applications,
  filters,
  terms,
  users,
  uploader,
})
