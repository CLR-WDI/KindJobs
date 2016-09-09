import React from 'react'
import {connect} from 'react-redux'

import{fetchTodos, addTodo, deleteTodo} from "../actions/todoActions"

@connect((store) => {
  return{
    todos: store.todos.todos
  }
})


export default class DummyContainer extends React.Component {
  render() {
    return (
     <div>
       <h1>Dummy Container Page</h1>
     </div>
    )
  }
}
