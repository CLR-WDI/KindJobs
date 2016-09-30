import axios from 'axios';

export function loginUser(user) {
  return function (dispatch) {
    axios.post('./api/users/loginAuth', user)
        .then((response)=>{
          dispatch({type:"LOGIN_USER_FULFILLED", payload: response.data})
          axios.get('./api/users/me')
            .then((res)=>{
              dispatch({type:"GET_ME_FULFILLED", payload: res.data})
            })
            .catch((err)=>{
              dispatch({type:"GET_ME_REJECTED", payload: err})
            })
        })
        .catch((err)=>{
          dispatch({type:"LOGIN_USER_REJECTED", payload: err})
        })
  }
}

export function logoutUser() {
  return function (dispatch) {
    axios.get('./api/users/logoutAuth')
      .then((response)=>{
        dispatch({type:"LOGOUT_USER_FULFILLED"})
      })
      .catch((err)=>{
        dispatch({type:"LOGOUT_USER_REJECTED"})
      })
  }
}


export function signupUser(user) {
  return function (dispatch) {
    axios.post('./api/users/signupAuth', user)
        .then((response)=>{
          dispatch({type:"SIGNUP_USER_FULFILLED", payload: response.data})
          axios.get('./api/users/me')
            .then((res)=>{
              dispatch({type:"GET_ME_FULFILLED", payload: res.data})
            })
            .catch((err)=>{
              dispatch({type:"GET_ME_REJECTED", payload: err})
            })
        })
        .catch((err)=>{
          dispatch({type:"SIGNUP_USER_REJECTED", payload: err})
    })
  }
}

export function getMe() {
  return function (dispatch) {
    axios.get('./api/users/me')
        .then((response)=>{
          dispatch({type:"GET_ME_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"GET_ME_REJECTED", payload: err})
    })
  }
}

export function editMe(userDetails) {
  return function (dispatch) {
    axios.post('./api/users/me', userDetails)
        .then((response)=>{
          dispatch({type:"EDIT_ME_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_ME_REJECTED", payload: err})
    })
  }
}

export function destroyMe() {
  return function (dispatch) {
    axios.delete('./api/users/me')
        .then((response)=>{
          dispatch({type:"DESTROY_ME_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DESTROY_ME_REJECTED", payload: err})
    })
  }
}

export function fetchUsers() {
  return function (dispatch) {
    axios.get('./api/users')
        .then((response)=>{
          dispatch({type:"FETCH_USERS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_USERS_REJECTED", payload: err})
    })
  }
}

export function editUser( id, userDetails) {
  return function (dispatch) {
    axios.put( './api/users/' + id, userDetails )
        .then((response)=>{
          dispatch({type:"EDIT_USER_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"EDIT_USER_REJECTED", payload: err})
    })
  }
}

export function deleteUser(id) {
  return function (dispatch) {
    axios.delete('./api/users/'+ id )
        .then((response)=>{
          dispatch({type:"DELETE_USER_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_USER_REJECTED", payload: err})
    })
  }
}
