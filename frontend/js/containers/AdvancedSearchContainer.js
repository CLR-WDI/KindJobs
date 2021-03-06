import React from "react";
import SearchBar from "../components/SearchBar";
import SearchFilters from "../components/SearchFilters";
import FilterButton from "../components/FilterButton";
import JobList from "../components/JobList";


export default class Home extends React.Component {
  render() {
    let divStyle = {
      backgroundImage: 'url(./images/kindjobs-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return(
      <div>
        <div class="jumbotron text-center" style={divStyle}>
          <h2>Advanced Search</h2>
          <SearchBar />
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

              <JobList jobListName="Search Results" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
