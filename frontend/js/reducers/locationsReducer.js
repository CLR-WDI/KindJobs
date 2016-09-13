export default function reducer(state = {
    locations: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_LOCATIONS":{
        return {...state, fetching: true};
      }
      case "FETCH_LOCATIONS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          locations: action.payload
        };
      }
      case "FETCH_LOCATIONS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_LOCATION":{
        return{
          ...state
        };
      }

      case "DELETE_LOCATION":{
        return {
          ...state,
          locations: state.locations.filter(location => location._id !== action.payload),
          fetching: true};
      }
      case "DELETE_LOCATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          locations: action.payload
        };
      }
      case "DELETE_LOCATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_LOCATION":{
      //   return {
      //     ...state,
      //     locations: state.locations.filter(location => location._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_LOCATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          locations: action.payload
        };
      }
      case "EDIT_LOCATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_LOCATION":{
      //   return {
      //     ...state,
      //     locations: state.locations.filter(location => location._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_LOCATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          locations: action.payload
        };
      }
      case "CREATE_LOCATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
