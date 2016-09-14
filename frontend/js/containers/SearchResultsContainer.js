import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import FilterButton from "../components/FilterButton";
import {Link} from "react-router";


export default class SearchResults extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div class="jumbotron text-center">
          <SearchBar _jobListName="Results"/>
          <Link to={'/advsearch'}>Advanced Search</Link>
        </div>
        <div class="container-fluid">
          <FilterButton _name="fulltime" _title="Full Time"/>
          <FilterButton _name="parttime" _title="Part Time"/>
          <FilterButton _name="contract" _title="Contract"/>
          <FilterButton _name="project" _title="Project"/>
          <FilterButton _name="internship" _title="Internship"/>

          <JobList _jobListName="Results" _searchterms={this.props.location.query.search}/>
        </div>
      </div>
    )
  }
}
