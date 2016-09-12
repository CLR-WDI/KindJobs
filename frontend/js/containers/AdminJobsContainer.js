import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router";
import fakeStore from "../fakeStore"
// for dates
import {dateToYYYY_MM_YY} from "../helpers/helpers"

@connect((store) => {
  var newStore = fakeStore;
  // newStore.jobListName = "Recent Jobs";
  return newStore;
})
export default class AdminJobsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      kindjobs: [],
    };
    this._deleteJob = this._deleteJob.bind(this);
  }
  componentWillMount(){
    this.setState({
      kindjobs: this.props.kindjobs
    });
  }
  _deleteJob( e, id ){
    e.preventDefault();
    var r = confirm("Delete this job?");
    if(r==true){
      const kindjobsList = this.state.kindjobs.filter( job => job.id !== id );
      this.setState({ kindjobs: kindjobsList });
      // delete job from database
      console.log("Job deleted");
    }
  }
  render() {
    let jobList = this.state.kindjobs.map( (job) => {
      console.log(job)
      // console.log(typeof job.postdate)
      // if(typeof job.postdate === "object"){ job.postdate = dateToYYYY_MM_YY(job.postdate) } else{job.postdate = ""}
      // if(typeof job.deadline === "object"){ job.deadline = dateToYYYY_MM_YY(job.deadline) } else{job.deadline = ""}
      job.postdate = dateToYYYY_MM_YY(job.postdate)
      job.deadline = dateToYYYY_MM_YY(job.deadline)

      return (
        <tr key={job.id}>
          <td>{job.postdate}</td>
          <td>{job.deadline}</td>
          <td>{job.sgo}</td>
          <td><Link to={'kindjobs/'+job.id}><div>{job.title}</div></Link></td>
          <td><Link to={'jobform/'+job.id}><div>Edit</div></Link></td>
          <td><button onClick={function(e){this._deleteJob( e, job.id )}}>Delete</button></td>
        </tr>
      )
      //dateToYYYY_MM_YY
      //dateToYYYY_MM_YY
    })

    return(
      <div>
        <h1>Admin Jobs View</h1>
        <Link to='jobform'><button>Create new JobForm</button></Link>
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
    )
  }
}
