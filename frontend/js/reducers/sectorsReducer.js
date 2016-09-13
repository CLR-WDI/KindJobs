export default function reducer(state = {
    sectors: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_SECTORS":{
        return {...state, fetching: true};
      }
      case "FETCH_SECTORS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sectors: action.payload
        };
      }
      case "FETCH_SECTORS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_SECTOR":{
        return{
          ...state
        };
      }

      case "DELETE_SECTOR":{
        return {
          ...state,
          sectors: state.sectors.filter(sector => sector._id !== action.payload),
          fetching: true};
      }
      case "DELETE_SECTOR_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sectors: action.payload
        };
      }
      case "DELETE_SECTOR_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_SECTOR":{
      //   return {
      //     ...state,
      //     sectors: state.sectors.filter(sector => sector._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_SECTOR_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sectors: action.payload
        };
      }
      case "EDIT_SECTOR_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_SECTOR":{
      //   return {
      //     ...state,
      //     sectors: state.sectors.filter(sector => sector._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_SECTOR_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sectors: action.payload
        };
      }
      case "CREATE_SECTOR_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
