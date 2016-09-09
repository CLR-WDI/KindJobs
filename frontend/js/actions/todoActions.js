import axios from "axios";

export function fetchTodos() {
  return{
    type: "FETCH_TODOS_FULFILLED",
    payload: [
      {id: 123450987654,
       text: "Something or other",
       isComplete: false},
      {id: 123450987123,
       text: "Something or other",
       isComplete: false}
    ]
  }
  // return function (dispatch) {
  //   axios.get("http://rest.learncode.academy/api/test123/tweets")
  //   .then((response)=>{
  //     dispatch({type:"FETCH_TODOS_FULFILLED", payload: response.data})
  //   })
  //   .catch((err)=>{
  //     dispatch({type:"FETCH_TODOS_REJECTED", payload: err})
  //   })
  // }
}

export function addTodo(id, text, isComplete) {
  return{
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      isComplete
    }
  }
}

export function updateTodo(id, text, isComplete) {
  return{
    type: 'UPDATE_TODO',
    payload: {
      id,
      text,
      isComplete
    }
  }
}

export function deleteTodo(id) {
  return{
    type: 'DELETE_TODO',
    payload: id
  }
}

export function deleteDone() {
  return{
    type: 'DELETE_DONE'
  }
}
