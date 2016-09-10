import React from "react";
import {connect} from 'react-redux'
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
// import{fetchTodos, addTodo, deleteTodo} from "../actions/todoActions"

@connect((store) => {
  // return{
  //   // todos: store.todos.todos
  // }
})
export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>This is home trolliie</h1>
        <SearchBar />
        <JobList jobListName="Recent Jobs" />
      </div>
    )
  }
}
