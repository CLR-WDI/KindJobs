export default function reducer(state = {
    users: [],
    userType: "none",
    fetching: false,
    fetched: false,
    error: null,
    defaultCV: "",
    me: {}
  },
  action)
  {
    switch (action.type) {
      case "LOGIN_USER_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          userType: "Jobseeker",
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
          userType: "none",
          me: null
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
          userType: action.payload.userType
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
          me: action.payload,
          userType: action.payload.userType
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
