import axios from 'axios';

export function fetchSectors() {
  return function (dispatch) {
    axios.get('./api/sectors')
        .then((response)=>{
          dispatch({type:"FETCH_SECTORS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_SECTORS_REJECTED", payload: err})
        })
  }
}

export function deleteSector(id) {
  return function (dispatch) {
    axios.delete('./api/sectors/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_SECTOR_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_SECTOR_REJECTED", payload: err})
        })
  }
}

export function editSector(id, sector) {
  return function (dispatch) {
    axios.put('./api/sectors/' + id, sector)
        .then((response)=>{
          dispatch({type:"EDIT_SECTOR_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_SECTOR_REJECTED", payload: err})
        })
  }
}

export function createSector(sector) {
  return function (dispatch) {
    axios.post('./api/sectors', sector)
        .then((response)=>{
          dispatch({type:"CREATE_SECTOR_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_SECTOR_REJECTED", payload: err})
        })
  }
}
