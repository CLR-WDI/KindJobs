export default function reducer(state = {
    users: [],
    jwtToken: "",
    admin: false,
    loggedIn: false,
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
          loggedIn: true,
          admin: action.payload.admin,
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
      case "LOGOUT_USER":{
        return{
          ...state,
          users: [],
          jwtToken: "",
          admin: false,
          loggedIn: false
        };
      }

      case "SIGNUP_USER_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          loggedIn: true,
          admin: action.payload.admin,
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
