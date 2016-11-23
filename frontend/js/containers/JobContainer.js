import React from "react";
import SearchBar from "../components/SearchBar";
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
      // let textifyDescription = document.createTextNode(job.description);
      // let breakDescription = (job.description).replace(/\r?\n/g, "<br />");
      let formattedDescription = job.description.split("\n").map(function(item) {
              return (
                <p>
                  {item}
                </p>
              )
            })
      return(
        <div>
          <div class="searchbar-container">
            <SearchBar />
          </div>
          <div class="container-fluid">
            <div class="col-md-8 col-md-offset-2">
              <div class="content-panel">
                <div class="job-header text-center">
                  <h1><i class={"jobicon icon-"+job.sector_id.image}></i></h1>
                  <h1>{job.title}</h1>
                  <h4>{job.location_id.name} | {job.employment_term_id.name}</h4>
                  <h4>
                    <span class="label label-info-outline">{job.sector_id.name}</span>
                    <span class="label label-default-outline" >{job.scope_id.name}</span>
                  </h4>
                  <Link to={'/apply/'+job._id}>
                    <button type="button" class="btn btn-primary">Apply now</button>
                  </Link>
                </div>
                <div class="divider-horizontal"></div>
                <div class="row">
                  <div class="col-md-8">
                    <h4>Job Description</h4>
                    {formattedDescription}
                    <button class="btn btn-default" onClick={this.props.history.goBack.bind(this)}>Back</button>
                    <Link to={'/apply/'+job._id}>
                      <button type="button" class="btn btn-primary">Apply now</button>
                    </Link>
                  </div>
                  <div class="col-md-4">
                    <h4>Salary:</h4>
                    <p>${job.salary}</p>
                    <h4>Minimum qualification:</h4>
                    <p>{job.min_qualification}</p>
                    <h4>Minimum job experience:</h4>
                    <p>{job.min_yrs_exp}</p>
                    <h4>Posted on:</h4>
                    <p>{formatDate(job.createdAt)}</p>
                    <h4>Application deadline:</h4>
                    <p>{formatDate(job.deadline)}</p>
                  </div>
                </div>
              </div>
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
