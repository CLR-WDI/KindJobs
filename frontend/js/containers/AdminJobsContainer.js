import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router";
import fakeStore from "../fakeStore"
// for dates
import {dateToYYYY_MM_YY_Mongoose} from "../helpers/helpers"
import {fetchKindJobs, deleteKindJob} from "../actions/kindjobActions"


@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class AdminJobsContainer extends React.Component {
  constructor(){
    super();
    this._deleteJob = this._deleteJob.bind(this);
  }
  componentWillMount(){
    this.props.dispatch( fetchKindJobs() );
  }
  _deleteJob( e, id ){
    e.preventDefault();
    var r = confirm("Delete this job?");
    if(r==true){
      this.props.dispatch( deleteKindJob(id) );
    }
  }
  render() {
    let jobList = this.props.kindjobs.map( (job) => {
      job.createdAt = dateToYYYY_MM_YY_Mongoose(job.createdAt)
      job.deadline = dateToYYYY_MM_YY_Mongoose(job.deadline)
      return (
        <tr key={job._id}>
          <td>{job.createdAt}</td>
          <td>{job.deadline}</td>
          <td>{job.sgo_id.SGO_name}</td>
          <td><Link to={'kindjobs/'+job._id}><div>{job.title}</div></Link></td>
          <td><Link to={'jobform/'+job._id}><div>Edit</div></Link></td>
          <td><button onClick={function(e){this._deleteJob( e, job._id )}.bind(this)}>Delete</button></td>
        </tr>
      )
    })

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <h1>Admin Jobs View</h1>
          <Link to='jobform'><button class="btn btn-primary">Create new JobForm</button></Link>
          <div class="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-md-2">Date Posted</th>
                  <th className="col-md-2">Deadline</th>
                  <th className="col-md-2">SGO</th>
                  <th className="col-md-4">Job Title</th>
                  <th className="col-md-1">Edit</th>
                  <th className="col-md-1">Delete</th>
                </tr>
              </thead>
              <tbody>
                {jobList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
