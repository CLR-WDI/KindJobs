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
          // state.kindjobs.filter( job => job._id === action.payload )[0]
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
      // case "DELETE_KINDJOB_REJECTED":{
      //   return{
      //     ...state,
      //     fetching: false,
      //     error: action.payload
      //   };
      // }
    }
  return state;
}
