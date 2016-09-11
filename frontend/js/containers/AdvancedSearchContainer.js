import React from "react";
import {connect} from 'react-redux'
import SearchBar from "../components/SearchBar";
import SearchFilters from "../components/SearchFilters";
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
        <div class="jumbotron text-center">
          <h2>Advanced Search</h2>
          <SearchBar />
        </div>
        <div class="container-fluid">
          <JobList jobListName="Search Results" />
        </div>
      </div>
    )
  }
}
