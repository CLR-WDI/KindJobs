import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";

export default class SearchResults extends React.Component {
  render() {
    console.log(this.props.location.query.search);
    return(
      <div>
        <div class="jumbotron text-center">
          <h1>Come find your kind of job!</h1>
          <SearchBar _jobListName="Results"/>
          <Link to={'/advsearch'}>Advanced Search</Link>
        </div>
        <div class="container-fluid">
          <JobList _jobListName="Results" _searchterms={this.props.location.query.search}/>
        </div>
      </div>
    )
  }
}
