import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router"
import fakeStore from "../fakeStore"
import {formatDate} from "../helpers/helpers"

@connect((store) => {
  var newStore = fakeStore;
  // newStore.jobListName = "Recent Jobs";
  return newStore;
})
export default class JobContainer extends React.Component {

  render() {
    let jobs = [ ...this.props.kindjobs];
    let job = jobs.filter( job => job.id === this.props.routeParams.id)[0];
    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <img src={job.image} />
          <div class="row">
            <div class="job-header col-sm-8">
              <h1>{job.title}</h1>
              <h4>{job.location}</h4>
            </div>
            <Link className='apply-button col-sm-4' to={'/apply/'+job.id}>
              <button type="button" class="btn btn-primary">Apply now</button>
            </Link>
          </div>
          <h4>
            <span class="label label-default">{job.sector}</span>
            <span class="label label-default">{job.scope}</span>
          </h4>
          <h5>Salary: $ {job.salary}</h5>
          <div class="divider-horizontal"></div>
          <p>{job.description}</p>
          <p>Minimum qualification: {job.min_qualification}</p>
          <p>Minimum job experience: {job.min_yrs_exp}</p>
          <p>{formatDate(job.postdate)}</p>
          <p>{formatDate(job.deadline)}</p>
            <button class="btn btn-default" onClick={this.props.history.goBack.bind(this)}>Back</button>
            <Link to={'/apply/'+job.id}>
              <button type="button" class="btn btn-primary">Apply now</button>
            </Link>
        </div>
      </div>
    )
  }
}
