import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router"
import {formatDate} from "../helpers/helpers"
import {fetchApplication, deleteApplication} from "../actions/applicationActions"
import {hashHistory} from 'react-router';

@connect((store) => {
  return {
    applications: store.applications.applications,
    admin: store.users.admin,
    jwtToken: store.users.jwtToken,
  }
})
export default class ApplicationContainer extends React.Component {
  constructor(){
    super();
    this._deleteApplication = this._deleteApplication.bind(this);
  }
  componentWillMount() {
    this.props.dispatch( fetchApplication(this.props.jwtToken) );
  }
  _deleteApplication(e){
    e.preventDefault();
    var r = confirm("Delete this application?");
    if(r==true){
      console.log(this.props.routeParams.id);
      if(this.props.routeParams.id){
        this.props.dispatch( deleteApplication(this.props.routeParams.id, this.props.jwtToken) );
        this.props.history.goBack();
      }
      else{
        this.props.history.goBack();
      }
    }
  }

  render() {
    if( !this.props.admin ){hashHistory.push({pathname: 'login'})}
    let applications = [ ...this.props.applications];
    let application = applications.filter( application => application._id === this.props.routeParams.id)[0];
    console.log(application);
    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <p>Kindjob: {application.kindjobs_id.kindjob_name}</p>
          <p>{formatDate(application.createdAt)}</p>
          <p>Name: {application.name}</p>
          <p>Email: {application.email}</p>
          <p>Telephone Number: {application.tel_no}</p>
          <p>Expected Salary: {application.expected_salary}</p>
          <p>Years of Relevant Experience: {application.yrs_rel_exp}</p>
          <p>Highest Qualification: {application.highest_qualification}</p>
          <p>Message to recruiters: {application.message_to_recruiters}</p>
          <br/>

          <button class="btn btn-default" onClick={this.props.history.goBack.bind(this)}>Back</button>
          <button class="btn btn-primary" onClick={this._deleteApplication}>Delete</button>

        </div>
      </div>
    )
  }
}
