export default function reducer(state = {
    scopes: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_SCOPES":{
        return {...state, fetching: true};
      }
      case "FETCH_SCOPES_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          scopes: action.payload
        };
      }
      case "FETCH_SCOPES_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_SCOPE":{
        return{
          ...state
        };
      }

      case "DELETE_SCOPE":{
        return {
          ...state,
          scopes: state.scopes.filter(scope => scope._id !== action.payload),
          fetching: true};
      }
      case "DELETE_SCOPE_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          scopes: action.payload
        };
      }
      case "DELETE_SCOPE_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_SCOPE":{
      //   return {
      //     ...state,
      //     scopes: state.scopes.filter(scope => scope._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_SCOPE_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          scopes: action.payload
        };
      }
      case "EDIT_SCOPE_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_SCOPE":{
      //   return {
      //     ...state,
      //     scopes: state.scopes.filter(scope => scope._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_SCOPE_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          scopes: action.payload
        };
      }
      case "CREATE_SCOPE_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
