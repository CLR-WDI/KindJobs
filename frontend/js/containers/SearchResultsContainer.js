import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import FilterButton from "../components/FilterButton";
import {Link} from "react-router";

export default class SearchResults extends React.Component {
  constructor() {
    super();
    this._toggleButton = this._toggleButton.bind(this);
  }

  _toggleButton() {
    console.log(this.ref)
  }

  render() {
    return(
      <div>
        <div class="jumbotron text-center">
          <SearchBar _jobListName="Results"/>
          <Link to={'/advsearch'}>Advanced Search</Link>
        </div>
        <div class="container-fluid">
          <FilterButton _classes="btn btn-fulltime "  ref="fulltime" _title="Full Time" _onClick={this._toggleButton}/>
          <FilterButton _classes="btn btn-parttime" ref="parttime" _title="Part Time" _onClick={this._toggleButton}/>
          <FilterButton _classes="btn btn-contract" ref="contract" _title="Contract" _onClick={this._toggleButton}/>
          <FilterButton _classes="btn btn-project" ref="project" val={true} _title="Project" _onClick={this._toggleButton}/>
          <FilterButton _classes="btn btn-internship" ref="internship" _title="Internship" _onClick={this._toggleButton}/>

          <JobList _jobListName="Results" _searchterms={this.props.location.query.search}/>
        </div>
      </div>
    )
  }
}
