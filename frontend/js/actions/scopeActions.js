import axios from 'axios';

export function fetchScopes() {
  return function (dispatch) {
    axios.get('./api/scopes')
        .then((response)=>{
          dispatch({type:"FETCH_SCOPES_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_SCOPES_REJECTED", payload: err})
        })
  }
}

export function deleteScope(id) {
  return function (dispatch) {
    axios.delete('./api/scopes/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_SCOPE_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_SCOPE_REJECTED", payload: err})
        })
  }
}

export function editScope(id, scope) {
  return function (dispatch) {
    axios.put('./api/scopes/' + id, scope)
        .then((response)=>{
          dispatch({type:"EDIT_SCOPE_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_SCOPE_REJECTED", payload: err})
        })
  }
}

export function createScope(scope) {
  return function (dispatch) {
    axios.post('./api/scopes', scope)
        .then((response)=>{
          dispatch({type:"CREATE_SCOPE_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_SCOPE_REJECTED", payload: err})
        })
  }
}
