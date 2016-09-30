import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router";
import json2csv from "json2csv";

// for dates
import {dateToYYYY_MM_YY_Mongoose} from "../helpers/helpers"
import {fetchApplications, deleteApplication} from "../actions/applicationActions"
import {hashHistory} from "react-router"

@connect((store) => {
  return {
    applications: store.applications.applications,
    cv: store.applications.cv,
    // jwtToken: store.users.jwtToken,
    // admin: store.users.admin
  }
})
export default class AdminApplicationsContainer extends React.Component {
  constructor(){
    super();
    this._deleteApplication = this._deleteApplication.bind(this);
    this._exportCSV = this._exportCSV.bind(this);
  }
  componentWillMount(){
    this.props.dispatch( fetchApplications(this.props.jwtToken) );
  }
  _deleteApplication( e, id ){
    e.preventDefault();
    var r = confirm("Delete this application?");
    if(r==true){
      this.props.dispatch( deleteApplication(id, this.props.jwtToken) );
    }
  }

  _exportCSV(e){
    e.preventDefault();
    let fields = ['name',  'expected_salary', 'highest_qualification', 'yrs_rel_exp', 'message_to_recruiters', 'tel_no', 'email', 'kindjobs_id.title', 'kindjobs_id.sgo_id.name', 'kindjobs_id.description', 'kindjobs_id.min_qualification', 'kindjobs_id.min_yrs_exp', 'kindjobs_id.salary']

    let fieldNames = ['Applicant Name',  'Expected Salary', 'Highest Relevant Qualifcation', 'Years of Relevant Experience', 'Message to Recruiters', 'Contact Number', 'Email Address', 'Title of Job Applied For', 'SGO Name', 'Kindjob Description', 'Minimum Qualification Required', 'Minimum Years of Relevant Experience Required', 'Salary Range Offered']

    json2csv({data: this.props.applications, fields: fields, fieldNames: fieldNames}, function (err, csv) {
      if(err) console.log(err);
      let blob = new window.Blob([csv], {type: 'text/csv, charset=UTF-8'});
      let objectURL = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = objectURL;
      a.download = 'csv';
      a.click();
      window.URL.revokeObjectURL(objectURL);
    })

  }

  render() {
    // if( !this.props.admin ){hashHistory.push({pathname: 'login'})}
    let applicationList = this.props.applications.map( (application) => {
      application.createdAt = dateToYYYY_MM_YY_Mongoose(application.createdAt)
      let individual_cv
      if(typeof application.link_to_cv === "string"){
        let filename = (application.kindjobs_id.title + "-" + application.name).replace(/\s+/g,'_')
        let cv = application.link_to_cv
        let fileextension = cv.substr(cv.indexOf("."))
        individual_cv = <td><a href={cv} download="download.jpg">Download CV</a></td>
      }else{
        individual_cv = <td></td>
      }
      return (
        <tr key={application._id}>
          <td>{application.kindjobs_id.sgo_id.name}</td>
          <td>{application.kindjobs_id.title}</td>
          <td>{application.createdAt}</td>
          <td>{application.highest_qualification}</td>
          <td>{application.expected_salary}</td>
          <td>{application.yrs_rel_exp}</td>
          <td><Link to={'admin/applications/'+application._id}>{application.name}</Link></td>
          {individual_cv}
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
              <th className="col-md-2">Name</th>
              <th className="col-md-1">CV</th>
              <th className="col-md-1">Delete</th>
            </tr>
          </thead>
          <tbody>
            {applicationList}
          </tbody>
        </table>
        <button onClick={ function(e){this._exportCSV( e)}.bind(this)}>Export to CSV</button>
      </div>
    )
  }
}
