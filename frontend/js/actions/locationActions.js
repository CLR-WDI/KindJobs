import axios from 'axios';

export function fetchLocations() {
  return function (dispatch) {
    axios.get('./api/locations')
        .then((response)=>{
          dispatch({type:"FETCH_LOCATIONS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_LOCATIONS_REJECTED", payload: err})
        })
  }
}

export function deleteLocation(id) {
  return function (dispatch) {
    axios.delete('./api/locations/' + id )
        .then((response)=>{
          dispatch({type:"DELETE_LOCATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_LOCATION_REJECTED", payload: err})
        })
  }
}

export function editLocation(id, location) {
  return function (dispatch) {
    axios.put('./api/locations/' + id, location)
        .then((response)=>{
          dispatch({type:"EDIT_LOCATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_LOCATION_REJECTED", payload: err})
        })
  }
}

export function createLocation(location) {
  return function (dispatch) {
    axios.post('./api/locations', location )
        .then((response)=>{
          dispatch({type:"CREATE_LOCATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_LOCATION_REJECTED", payload: err})
        })
  }
}
