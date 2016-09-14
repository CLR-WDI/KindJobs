import React from "react";
import {connect} from 'react-redux'
import SearchBar from "../components/SearchBar";
import SearchFilters from "../components/SearchFilters";
import FilterButton from "../components/FilterButton";
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
          <SearchFilters />
        </div>
        <div class="container-fluid">
          <FilterButton _name="fulltime" _title="Full Time"/>
          <FilterButton _name="parttime" _title="Part Time"/>
          <FilterButton _name="contract" _title="Contract"/>
          <FilterButton _name="project" _title="Project"/>
          <FilterButton _name="internship" _title="Internship"/>

          <JobList jobListName="Search Results" />
        </div>
      </div>
    )
  }
}
