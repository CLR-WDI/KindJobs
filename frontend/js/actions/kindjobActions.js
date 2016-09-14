import axios from 'axios';

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

export function fetchKindJob() {
  return {
    type:"FETCH_STORED_KINDJOB"
  }
}

export function deleteKindJob(id, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.delete('./api/kindjobs/' + id,
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"DELETE_KINDJOB_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_KINDJOB_REJECTED", payload: err})
        })
  }
}


export function editKindJob(id, kindjob, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.put('./api/kindjobs/' + id, kindjob,
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"EDIT_KINDJOB_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_KINDJOB_REJECTED", payload: err})
        })
  }
}

export function createKindJob(kindjob, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.post('./api/kindjobs', kindjob,
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"CREATE_KINDJOB_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_KINDJOB_REJECTED", payload: err})
        })
  }
}
