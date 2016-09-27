import axios from 'axios';

export function fetchTerms() {
  return function (dispatch) {
    axios.get('./api/employment_terms')
        .then((response)=>{
          dispatch({type:"FETCH_TERMS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_TERMS_REJECTED", payload: err})
        })
  }
}

export function deleteTerm(id) {
  return function (dispatch) {
    axios.delete('./api/employment_terms/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_TERM_REJECTED", payload: err})
        })
  }
}

export function editTerm(id, term) {
  return function (dispatch) {
    axios.put('./api/employment_terms/' + id, term )
        .then((response)=>{
          dispatch({type:"EDIT_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_TERM_REJECTED", payload: err})
        })
  }
}

export function createTerm(term) {
  return function (dispatch) {
    axios.post('./api/employment_terms', term )
        .then((response)=>{
          dispatch({type:"CREATE_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_TERM_REJECTED", payload: err})
        })
  }
}
