export default function reducer(state = {
    terms: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_TERMS":{
        return {...state, fetching: true};
      }
      case "FETCH_TERMS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          terms: action.payload
        };
      }
      case "FETCH_TERMS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_TERM":{
        return{
          ...state
        };
      }

      case "DELETE_TERM":{
        return {
          ...state,
          terms: state.terms.filter(term => term._id !== action.payload),
          fetching: true};
      }
      case "DELETE_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          terms: action.payload
        };
      }
      case "DELETE_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_TERM":{
      //   return {
      //     ...state,
      //     terms: state.terms.filter(term => term._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          terms: action.payload
        };
      }
      case "EDIT_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_TERM":{
      //   return {
      //     ...state,
      //     terms: state.terms.filter(term => term._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          terms: action.payload
        };
      }
      case "CREATE_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
