export default function reducer(state = {
    employment_terms: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_EMPLOYMENT_TERMS":{
        return {...state, fetching: true};
      }
      case "FETCH_EMPLOYMENT_TERMS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          employment_terms: action.payload
        };
      }
      case "FETCH_EMPLOYMENT_TERMS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_EMPLOYMENT_TERM":{
        return{
          ...state
        };
      }

      case "DELETE_EMPLOYMENT_TERM":{
        return {
          ...state,
          employment_terms: state.employment_terms.filter(employment_term => employment_term._id !== action.payload),
          fetching: true};
      }
      case "DELETE_EMPLOYMENT_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          employment_terms: action.payload
        };
      }
      case "DELETE_EMPLOYMENT_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_EMPLOYMENT_TERM":{
      //   return {
      //     ...state,
      //     employment_terms: state.employment_terms.filter(employment_term => employment_term._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_EMPLOYMENT_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          employment_terms: action.payload
        };
      }
      case "EDIT_EMPLOYMENT_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_EMPLOYMENT_TERM":{
      //   return {
      //     ...state,
      //     employment_terms: state.employment_terms.filter(employment_term => employment_term._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_EMPLOYMENT_TERM_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          employment_terms: action.payload
        };
      }
      case "CREATE_EMPLOYMENT_TERM_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
