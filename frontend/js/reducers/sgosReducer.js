export default function reducer(state = {
    sgos: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_SGOS":{
        return {...state, fetching: true};
      }
      case "FETCH_SGOS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sgos: action.payload
        };
      }
      case "FETCH_SGOS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_SGO":{
        return{
          ...state
        };
      }

      case "DELETE_SGO":{
        return {
          ...state,
          sgos: state.sgos.filter(sgo => sgo._id !== action.payload),
          fetching: true};
      }
      case "DELETE_SGO_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sgos: action.payload
        };
      }
      case "DELETE_SGO_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_SGO":{
      //   return {
      //     ...state,
      //     sgos: state.sgos.filter(sgo => sgo._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_SGO_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sgos: action.payload
        };
      }
      case "EDIT_SGO_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_SGO":{
      //   return {
      //     ...state,
      //     sgos: state.sgos.filter(sgo => sgo._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_SGO_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          sgos: action.payload
        };
      }
      case "CREATE_SGO_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
