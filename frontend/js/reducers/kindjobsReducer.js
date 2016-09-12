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
    }
  return state;
}
