import React from "react";
import SearchBar from "../components/SearchBar";
import SearchFilters from "../components/SearchFilters";
import JobList from "../components/JobList";


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
          <JobList jobListName="Search Results" />
        </div>
      </div>
    )
  }
}
