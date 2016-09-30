import axios from 'axios';

export function fetchApplications() {
  return function (dispatch) {
    axios.get('./api/applications')
        .then((response)=>{
          dispatch({type:"FETCH_APPLICATIONS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_APPLICATIONS_REJECTED", payload: err})
        })
  }
}

export function fetchApplication() {
  return {
    type:"FETCH_STORED_APPLICATION"
  }
}

export function deleteApplication(id) {
  return function (dispatch) {
    axios.delete('./api/applications/' + id)
        .then((response)=>{
          dispatch({type:"DELETE_APPLICATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_APPLICATION_REJECTED", payload: err})
        })
  }
}


export function editApplication(id, application) {
  return function (dispatch) {
    axios.put('./api/applications/' + id, application )
        .then((response)=>{
          dispatch({type:"EDIT_APPLICATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_APPLICATION_REJECTED", payload: err})
        })
  }
}

export function createApplication(application) {
  return function (dispatch) {
    axios.post('./api/applications', application)
        .then((response)=>{
          dispatch({type:"CREATE_APPLICATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"CREATE_APPLICATION_REJECTED", payload: err})
        })
  }
}

export function uploadCV(file) {
  return function (dispatch) {
    axios.get(`./api/applications/fileupload?filename=${file.name}&filetype=${file.type}`)
    .then((result) => {
      let signedUrl = result.data.signedRequest;

      let options = {
        headers: {
          'Content-Type': file.type
        }
      };

      axios.put(signedUrl, file, options)
        .then((response) => {
          dispatch({type:"UPLOAD_CV_FULFILLED", payload: result.data.url})
        })
        .catch((err)=>{
          dispatch({type:"UPLOAD_CV_REJECTED", payload: err})
        })
    })
    .catch((err)=>{
      dispatch({type:"UPLOAD_CV_REJECTED", payload: err})
    })
  }
}

export function clearCV() {
  return {
    type: "CLEAR_CV_FULFILLED"
  }
}
