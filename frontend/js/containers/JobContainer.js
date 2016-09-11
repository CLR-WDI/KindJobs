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
      <div>
        <button onClick={this.props.history.goBack.bind(this)}>Back</button>
        <img src={job.image} />
        <h1>{job.title}</h1>
        <h4>{job.location}</h4>
        <h4>{job.sector}</h4>
        <h4>{job.scope}</h4>
        <p>$ {job.salary}</p>
        <p>{job.description}</p>
        <p>{job.min_qualification}</p>
        <p>{job.min_yrs_exp}</p>
        <p>{formatDate(job.postdate)}</p>
        <p>{formatDate(job.deadline)}</p>
          <Link to={'/apply/'+job.id}>
            <button type="button">Apply</button>
          </Link>
      </div>
    )
  }
}
