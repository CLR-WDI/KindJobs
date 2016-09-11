import React from "react";
import {connect} from 'react-redux'
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";
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
          <h1>Come find your kind of job!</h1>
          <SearchBar />
          <Link to={'/advsearch'}>Advanced Search</Link>
        </div>
        <div class="container-fluid">
          <JobList jobListName="Recent Jobs" />
        </div>
      </div>
    )
  }
}
