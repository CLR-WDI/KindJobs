export default function reducer(state = {
    applications: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "LOGOUT_USER":{
        return{
          ...state,
          applications: []
        };
      }
      case "FETCH_APPLICATIONS":{
        return {...state, fetching: true};
      }
      case "FETCH_APPLICATIONS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          applications: action.payload
        };
      }
      case "FETCH_APPLICATIONS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_APPLICATION":{
        return{
          ...state
        };
      }

      case "DELETE_APPLICATION":{
        return {
          ...state,
          applications: state.applications.filter(application => application._id !== action.payload),
          fetching: true};
      }
      case "DELETE_APPLICATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          applications: action.payload
        };
      }
      case "DELETE_APPLICATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_APPLICATION":{
      //   return {
      //     ...state,
      //     applications: state.applications.filter(application => application._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_APPLICATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          applications: action.payload
        };
      }
      case "EDIT_APPLICATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_APPLICATION":{
      //   return {
      //     ...state,
      //     applications: state.applications.filter(application => application._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_APPLICATION_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          applications: action.payload
        };
      }
      case "CREATE_APPLICATION_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
