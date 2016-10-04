import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router"
import {formatDate} from "../helpers/helpers"
import {fetchKindJob, fetchKindJobs} from "../actions/kindjobActions"

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class JobContainer extends React.Component {
  componentWillMount() {
    if (this.props.kindjobs.length === 0 ){
      this.props.dispatch( fetchKindJobs() );
    }else{
      this.props.dispatch( fetchKindJob() );
    }
  }

  render() {
    if(this.props.kindjobs.length !== 0){
      let jobs = [ ...this.props.kindjobs];
      let job = jobs.filter( job => job._id === this.props.routeParams.id)[0];
      console.log("the job is ", job);
      return(
        <div class="container-fluid">
          <div class="col-md-8 col-md-offset-2">
            <div class="content-panel">
              <div class="job-header">
                <h1><i class={"jobicon icon-"+job.sector_id.image}></i> {job.title}</h1>
                <h4>{job.location_id.name}</h4>
                <h4>{job.employment_term_id.name}</h4>
              </div>
              <h4>
                <span class="label label-info">{job.sector_id.name}</span>
                <span class="label label-default" >{job.scope_id.name}</span>
              </h4>
              <h4>Salary: $ {job.salary}</h4>
              <div class="divider-horizontal"></div>
              <p>{job.description}</p>
              <p>Minimum qualification: {job.min_qualification}</p>
              <p>Minimum job experience: {job.min_yrs_exp}</p>
              <p>Posted on:{formatDate(job.createdAt)}</p>
              <p>Application deadline:{formatDate(job.deadline)}</p>
                <button class="btn btn-default" onClick={this.props.history.goBack.bind(this)}>Back</button>
                <Link to={'/apply/'+job._id}>
                  <button type="button" class="btn btn-primary">Apply now</button>
                </Link>
            </div>
          </div>
        </div>
      )
    }else {
      return(
        <div></div>
      )
    }
  }
}
