import axios from 'axios';

export function loginUser(user) {
  return function (dispatch) {
    axios.post('./api/users/login', user)
        .then((response)=>{
          dispatch({type:"LOGIN_USER_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"LOGIN_USER_REJECTED", payload: err})
    })
  }
}

export function logoutUser() {
  return {type:"LOGOUT_USER"}
}


export function signupUser(user) {
  console.log(user);
  return function (dispatch) {
    axios.post('./api/users/signup', user)
        .then((response)=>{
          dispatch({type:"SIGNUP_USER_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"SIGNUP_USER_REJECTED", payload: err})
    })
  }
}


export function fetchUsers(jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.get('./api/users',
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"FETCH_USERS_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"FETCH_USERS_REJECTED", payload: err})
    })
  }
}

// export function editUser(user) {
//   return function (dispatch) {
//     axios.put('./api/users/:id')
//         .then((response)=>{
//           dispatch({type:"EDIT_USER_FULFILLED", payload: response.data})
//         })
//         .catch((err)=>{
//           dispatch({type:"EDIT_USER_REJECTED", payload: err})
//     })
//   }
// }

export function deleteUser(id, jwtToken) {
  let key = 'Bearer ' + jwtToken;
  return function (dispatch) {
    axios.delete('./api/users/'+ id,
              { headers: {Authorization: key} } )
        .then((response)=>{
          dispatch({type:"DELETE_USER_FULFILLED", payload: response.data})
        })
        .catch((err)=>{
          dispatch({type:"DELETE_USER_REJECTED", payload: err})
    })
  }
}
