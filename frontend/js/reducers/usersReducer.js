export default function reducer(state = {
    users: [],
    me: {},
    // jwtToken: "",
    // admin: false,
    fetching: false,
    fetched: false,
    error: null,
  },
  action)
  {
    switch (action.type) {
      case "LOGIN_USER_FULFILLED":{
        // console.log(action.payload.message);
        return {
          ...state,
          fetching: false,
          fetched: true,
          // admin: action.payload.admin,
          // jwtToken: action.payload.jwtToken
        };
      }
      case "LOGIN_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "LOGOUT_USER_FULFILLED":{
        return{
          ...state,
          users: [],
          me: null
          // jwtToken: "",
          // admin: false
        };
      }
      case "LOGOUT_USER_REJECTED":{
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
          // admin: action.payload.admin,
          // jwtToken: action.payload.jwtToken
        };
      }
      case "SIGNUP_USER_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      case "GET_ME_FULFILLED":{
        return{
          ...state,
          fetching: false,
          fetched: true,
          me: action.payload
        }
      }
      case "GET_ME_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        }
      }
      case "EDIT_ME_FULFILLED":{
        return{
          ...state,
          fetching: false,
          fetched: true,
          me: action.payload
        }
      }
      case "EDIT_ME_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        }
      }
      case "DESTROY_ME_FULFILLED":{
        return{
          ...state,
          fetching: false,
          fetched: true,
          me: null
        }
      }
      case "DESTROY_ME_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        }
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
