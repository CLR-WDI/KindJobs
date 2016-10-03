import axios from 'axios';

export function uploadCV(file) {
  return function (dispatch) {
    dispatch({type:"UPLOAD_CV_BEGAN"});
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
          dispatch({type:"UPLOAD_CV_FULFILLED", payload: {url: result.data.url, name: file.name}})
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
