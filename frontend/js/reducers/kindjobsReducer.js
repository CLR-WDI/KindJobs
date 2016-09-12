export default function reducer(state = {
    kindjobs: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "FETCH_KINDJOBS":{
        return {...state, fetching: true};
      }
      case "FETCH_KINDJOBS_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          kindjobs: action.payload
        };
      }
      case "FETCH_KINDJOBS_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
      case "FETCH_STORED_KINDJOB":{
        return{
          ...state
        };
      }

      case "DELETE_KINDJOB":{
        return {
          ...state,
          kindjobs: state.kindjobs.filter(kindjob => kindjob._id !== action.payload),
          fetching: true};
      }
      case "DELETE_KINDJOB_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          kindjobs: action.payload
        };
      }
      case "DELETE_KINDJOB_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "EDIT_KINDJOB":{
      //   return {
      //     ...state,
      //     kindjobs: state.kindjobs.filter(kindjob => kindjob._id !== action.payload),
      //     fetching: true};
      // }
      case "EDIT_KINDJOB_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          kindjobs: action.payload
        };
      }
      case "EDIT_KINDJOB_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }

      // case "CREATE_KINDJOB":{
      //   return {
      //     ...state,
      //     kindjobs: state.kindjobs.filter(kindjob => kindjob._id !== action.payload),
      //     fetching: true};
      // }
      case "CREATE_KINDJOB_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          kindjobs: action.payload
        };
      }
      case "CREATE_KINDJOB_REJECTED":{
        return{
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    }
  return state;
}
