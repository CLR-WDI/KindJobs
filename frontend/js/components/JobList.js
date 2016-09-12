import React from "react";
import {connect} from "react-redux"
import JobCard from "./JobCard"
import fakeStore from "../fakeStore"
import {fetchKindJobs} from "../actions/kindjobActions"

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class JobList extends React.Component {
  componentWillMount() {
    this.props.dispatch( fetchKindJobs() );
  }

  render() {
    let jobList = this.props.kindjobs.map( (job) => {
      return <JobCard
      key={job._id}
      id={job._id}
      term = {job.term}
      image = {job.image}
      sector = {job.sector}
      title = {job.title}
      />
    })
    return (
      <div>
        <h2>{this.props.jobListName}</h2>
        <div class="row">
          {jobList}
        </div>
      </div>
    );
  }
}
