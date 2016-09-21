import axios from 'axios';

export function fetchApplications(jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.get('./api/applications',
              { headers: {Authorization: key} })
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

export function deleteApplication(id, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.delete('./api/applications/' + id,
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"DELETE_APPLICATION_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_APPLICATION_REJECTED", payload: err})
        })
  }
}


export function editApplication(id, application, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.put('./api/applications/' + id, application,
              { headers: {Authorization: key} } )
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
  console.log("the file is ", file);
  console.log("filename is ", file.name);
  console.log("filetype is ", file.type);
  // let fileData = {
  //   filename: file.name,
  //   filetype: file.type
  // }

  return function (dispatch) {
    axios.get(`./api/applications/fileupload?filename=${file.name}&filetype=${file.type}`)
    .then((result) => {
      let signedUrl = result.data;

      let options = {
        headers: {
          'Content-Type': file.type
        }
      };
      console.log("the signed url is ", signedUrl);
      console.log("the options are ", options);
      axios.put(file, signedUrl, options)
        .then((response) => {
          dispatch({type:"UPLOAD_CV_FULFILLED", payload: response.data})
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
