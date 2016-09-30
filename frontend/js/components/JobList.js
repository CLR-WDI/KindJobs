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
    let criteria = this.props.filters.criteria;
    if (this.props._jobListName !== "Recent Jobs"){

      if (Object.keys(criteria).length > 0) {

        for (var key in criteria ) {
          filteredList = filteredList.filter(job => {
            return job[key]._id === criteria[key]})
        }


      }

    }

    if(!this.props.filters.employment_term.fulltime.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Full-time" )
    }
    if(!this.props.filters.employment_term.parttime.state){
      filteredList = filteredList.filter( job => job.employment_term_id.name !== "Part-time" )
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

    let jobList = filteredList.map( (job) => {
      return <JobCard
        key   = {job._id}
        id    = {job._id}
        term  = {job.employment_term_id.name}
        image = {job.sector_id.image}
        description = {job.description}
        sector= {job.sector_id.name}
        title = {job.title}
      />
    })
    let titlebar = null;
    if(this.props._searchterms){
      titlebar = <h2>{this.props._jobListName + ' for "'  + this.props._searchterms + '"'}</h2>
    }else {
      titlebar = <h2>{this.props._jobListName}</h2>
    }

    return (
      <div>
        {titlebar}
        <div class="row is-flex">
          {jobList}
        </div>
      </div>
    );
  }
}
