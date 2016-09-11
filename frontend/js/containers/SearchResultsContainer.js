import React from "react";
import {connect} from 'react-redux';
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
// import{fetchTodos, addTodo, deleteTodo} from "../actions/todoActions"

@connect((store) => {
  // return{
  //   // todos: store.todos.todos
  // }
})
export default class SearchResults extends React.Component {
  render() {
    return(
      <div>
        <h1>Search Results</h1>
        <SearchBar />
        <JobList />
      </div>
    )
  }
}
