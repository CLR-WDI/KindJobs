import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import FilterButton from "../components/FilterButton";
import SearchFilters from "../components/SearchFilters";
import {Link} from "react-router";

// import {connect} from "react-redux";
// import {fetchKindJobs} from "../actions/kindjobActions";
//
// @connect((store) => {
//   return {
//     kindjobs: store.kindjobs.kindjobs
//   }
// })
export default class SearchResults extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <div class="jumbotron text-center">
          <SearchBar _jobListName="Results"/>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <SearchFilters />
            </div>
            <div class="col-md-9">
              <FilterButton _name="fulltime" _title="Full Time"/>
              <FilterButton _name="parttime" _title="Part Time"/>
              <FilterButton _name="contract" _title="Contract"/>
              <FilterButton _name="project" _title="Project"/>
              <FilterButton _name="internship" _title="Internship"/>

              <JobList _jobListName="Results" _searchterms={this.props.location.query.search}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
