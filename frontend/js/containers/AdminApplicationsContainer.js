import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router";
// for dates
import {dateToYYYY_MM_YY_Mongoose} from "../helpers/helpers"
import {fetchApplications, deleteApplication} from "../actions/applicationActions"


@connect((store) => {
  return {
    applications: store.applications.applications
  }
})
export default class AdminApplicationsContainer extends React.Component {
  constructor(){
    super();
    this._deleteApplication = this._deleteApplication.bind(this);
  }
  componentWillMount(){
    this.props.dispatch( fetchApplications() );
  }
  _deleteApplication( e, id ){
    console.log(id);
    e.preventDefault();
    var r = confirm("Delete this application?");
    if(r==true){
      this.props.dispatch( deleteApplication(id) );
      console.log("deleted app!")
    }
  }
  render() {
    let applicationList = this.props.applications.map( (application) => {
      application.createdAt = dateToYYYY_MM_YY_Mongoose(application.createdAt)
      return (
        <tr key={application._id}>
          <td>{application.kindjobs_id.sgo_id.SGO_name}</td>
          <td>{application.kindjobs_id.title}</td>
          <td>{application.createdAt}</td>
          <td>{application.highest_qualification}</td>
          <td>{application.expected_salary}</td>
          <td>{application.yrs_rel_exp}</td>
          <td><Link to={'admin/applications/'+application._id}>{application.name}</Link></td>
          <td><button onClick={ function(e){this._deleteApplication( e, application._id )}.bind(this) }>Delete</button></td>
        </tr>
      )
    })

    return(
      <div>
        <h1>Admin Applications View</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-2">SGO name</th>
              <th className="col-md-2">Job title</th>
              <th className="col-md-1">Date Posted</th>
              <th className="col-md-1">Qualification</th>
              <th className="col-md-1">Salary</th>
              <th className="col-md-1">Yrs Exp</th>
              <th className="col-md-3">Name</th>
              <th className="col-md-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {applicationList}
          </tbody>
        </table>
      </div>
    )
  }
}
