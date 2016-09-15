import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";


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
          <JobList _jobListName="Recent Jobs" />
        </div>
      </div>
    )
  }
}
