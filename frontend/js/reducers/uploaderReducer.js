export default function reducer(state = {
    cv: {
      url: "",
      name: "",
      status: "No File Selected"
    },
    fetching: false,
    fetched: false,
    error: null
  },
  action)
  {
    switch (action.type) {
      case "UPLOAD_CV_BEGAN":{
        return{
          ...state,
          cv: {
            url: "",
            name: "",
            status: "File Uploading"
          }
        }
      }
      case "UPLOAD_CV_FULFILLED":{
        return{
          ...state,
          cv: {
            url: action.payload.url,
            name: action.payload.name,
            status: "File Uploaded"
          }
        }
      }
      case "UPLOAD_CV_REJECTED":{
        return{
          ...state,
          error: action.payload
        }
      }
      case "CLEAR_CV_FULFILLED":{
        return{
          ...state,
          cv: {
            url: "",
            name: "",
            status: "No File Selected"
          }
        }
      }
    }
  return state;
}
