import axios from 'axios';

export function fetchEmploymentTerms() {
  return function (dispatch) {
    axios.get('./api/employment_terms')
        .then((response)=>{
          dispatch({type:"FETCH_EMPLOYMENT_TERMS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_EMPLOYMENT_TERMS_REJECTED", payload: err})
        })
  }
}

export function deleteEmploymentTerm(id) {
  return function (dispatch) {
    axios.delete('./api/employment_terms/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_EMPLOYMENT_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_EMPLOYMENT_TERM_REJECTED", payload: err})
        })
  }
}

export function editEmploymentTerm(id, employment_term) {
  return function (dispatch) {
    axios.put('./api/employment_terms/' + id, employment_term)
        .then((response)=>{
          dispatch({type:"EDIT_EMPLOYMENT_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_EMPLOYMENT_TERM_REJECTED", payload: err})
        })
  }
}

export function createEmploymentTerm(employment_term) {
  return function (dispatch) {
    axios.post('./api/employment_terms', employment_term)
        .then((response)=>{
          dispatch({type:"CREATE_EMPLOYMENT_TERM_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_EMPLOYMENT_TERM_REJECTED", payload: err})
        })
  }
}
