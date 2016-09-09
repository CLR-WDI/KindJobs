export default function reducer(state = {
  todos:[],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_TODOS": {
      return{...state, fetching: true}
    }
    case "FETCH_TODOS_REJECTED": {
      return{...state, fetching: false, error: action.payload}
    }
    case "FETCH_TODOS_FULFILLED": {
      return{
        ...state,
        fetching: false,
        fetched: true,
        todos: action.payload}
    }
    case "ADD_TODO":{
      return{
        ...state,
        todos: [...state.todos, action.payload]
      }
    }
    case "UPDATE_TODO":{
      const {id, text, isComplete} = action.payload
      const newTweets = [...state.todos]
      const todoToUpdate = newTweets.findIndex(todo => todo.id ===id)
      newTweets[todoToUpdate] = action.payload;
      return{
        ...state,
        todos: newTweets
      }
    }
    case "DELETE_TODO":{
      return{
        ...state,
        todos: state.todos.filter(todo => todo.id !==action.payload)
      }
    }
    case "DELETE_DONE":{
      console.log("clicked from reducer");
      return{
        ...state,
        todos: state.todos.filter(todo=> todo.isComplete !==true)
      }
    }

  }
  return state;
}
