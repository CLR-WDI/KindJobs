import axios from 'axios';

export function fetchSGOs() {
  return function (dispatch) {
    axios.get('./api/sgos')
        .then((response)=>{
          dispatch({type:"FETCH_SGOS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_SGOS_REJECTED", payload: err})
        })
  }
}

export function deleteSGO(id) {
  return function (dispatch) {
    axios.delete('./api/sgos/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_SGO_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_SGO_REJECTED", payload: err})
        })
  }
}


export function editSGO(id, sgo) {
  return function (dispatch) {
    axios.put('./api/sgos/' + id, sgo)
        .then((response)=>{
          dispatch({type:"EDIT_SGO_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_SGO_REJECTED", payload: err})
        })
  }
}

export function createSGO(sgo) {
  return function (dispatch) {
    axios.post('./api/sgos', sgo)
        .then((response)=>{
          dispatch({type:"CREATE_SGO_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_SGO_REJECTED", payload: err})
        })
  }
}
