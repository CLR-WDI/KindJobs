import axios from 'axios';

// export function onSubmitSearch(search) {
//   return{
//     type: "SUBMIT_SEARCH",
//     payload: search
//   }
// }
//
// export function onTypeSearch(text) {
//   return{
//     type: "TYPE_SEARCH",
//     payload: text
//   }
// }

export function fetchKindJobs(query) {
  return function (dispatch) {
    axios.get('./api/kindjobs?' + query)
        .then((response)=>{
          dispatch({type:"FETCH_KINDJOBS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_KINDJOBS_REJECTED", payload: err})
        })
  }
}
