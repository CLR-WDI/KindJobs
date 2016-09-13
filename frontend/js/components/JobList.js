import React from "react";
import {connect} from "react-redux"
import JobCard from "./JobCard"
import {fetchKindJobs} from "../actions/kindjobActions"
import {fetchFilters} from "../actions/filterActions";

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs,
    filters: store.filters.filters
  }
})
export default class JobList extends React.Component {
  componentWillMount() {
    if (this.props._jobListName === "Recent Jobs"){
    this.props.dispatch( fetchKindJobs() );
    }
    this.props.dispatch( fetchFilters() );
  }


  render() {
    let filteredList = [...this.props.kindjobs];
    console.log(filteredList);
    if(!this.props.filters.employment_term.fulltime.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Full Time" )
    }
    if(!this.props.filters.employment_term.parttime.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Part Time" )
    }
    if(!this.props.filters.employment_term.contract.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Contract" )
    }
    if(!this.props.filters.employment_term.project.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Project" )
    }
    if(!this.props.filters.employment_term.internship.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Internship" )
    }

    console.log(filteredList);

    let jobList = filteredList.map( (job) => {
      return <JobCard
        key   = {job._id}
        id    = {job._id}
        term  = {job.employment_term_id.name}
        image = {job.image}
        description = {job.description}
        sector= {job.sector_id.name}
        title = {job.title}
      />
    })
    return (
      <div>
        <h2>{this.props._jobListName}</h2>
        <div class="row">
          {jobList}
        </div>
      </div>
    );
  }
}
