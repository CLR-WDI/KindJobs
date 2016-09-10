import React from "react";
import {connect} from "react-redux"
import JobCard from "./JobCard"
import fakeStore from "../fakeStore"

@connect((store) => {
  var newStore = fakeStore;
  // newStore.jobListName = "Recent Jobs";
  return newStore;
})
export default class JobList extends React.Component {
  render() {
    let jobList = this.props.kindjobs.map( (job) => {
      return <JobCard
      key={job.id}
      id={job.id}
      term = {job.term}
      image = {job.image}
      sector = {job.sector}
      title = {job.title}
      />
    })
    return (
      <div>
        <h2>{this.props.jobListName}</h2>
        <div>
          <div>
            {jobList}
          </div>
        </div>
      </div>
    );
  }
}
