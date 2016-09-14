export default function reducer(state = {
    user: null,
    users: [],
    jwtToken: "",
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "LOGIN_USER_FULFILLED":{
        console.log(action.payload.message);
        return {
          ...state,
          fetching: false,
          fetched: true,
          jwtToken: action.payload.jwtToken
        };
      }
      case "LOGIN_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      case "SIGNUP_USER_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          jwtToken: action.payload.jwtToken
        };
      }
      case "SIGNUP_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      case "FETCH_USERS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload
        };
      }
      case "FETCH_USERS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      case "EDIT_USER_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload
        };
      }
      case "EDIT_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      case "DELETE_USER_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload
        };
      }
      case "DELETE_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
