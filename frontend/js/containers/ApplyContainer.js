import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import InputText from "../components/InputText"
import {fetchKindJob} from "../actions/kindjobActions"
import {fetchApplications, deleteApplication, editApplication, createApplication} from "../actions/applicationActions"
// for redirect to home
import {hashHistory} from "react-router"

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class ApplyContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch( fetchKindJob() );
  }
  constructor(){
    super();
    this._submitApplication = this._submitApplication.bind(this);
  }

  _submitApplication(e){
    e.preventDefault();
    let form = {
      kindjobs_id: this.props.routeParams.id,
      name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
      email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
      tel_no: ReactDOM.findDOMNode(this.refs.tel_no.refs.inp).value,
      expected_salary: ReactDOM.findDOMNode(this.refs.expected_salary.refs.inp).value,
      yrs_rel_exp: ReactDOM.findDOMNode(this.refs.yrs_rel_exp.refs.inp).value,
      highest_qualification: ReactDOM.findDOMNode(this.refs.highest_qualification.refs.inp).value,
      message_to_recruiters: ReactDOM.findDOMNode(this.refs.message_to_recruiters).value,
    }
    this.props.dispatch( createApplication(form) );
    alert( "Application submitted" );
    hashHistory.go( -2 );
  }

  render() {
    let jobs = [ ...this.props.kindjobs];
    let job = jobs.filter( job => job._id === this.props.routeParams.id)[0];

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <form onSubmit = {this._submitApplication}>
            <h1>Application Form</h1>
            <h4>{job.title} - {job.sector_id.sector_name} sector, {job.location_id.location_name}</h4>
            <div class="inner">
              <InputText _label="Name*" _type="text" ref="name"  _default="" />
              <InputText _label="Email*" _type="text" ref="email"  _default="" />
              <InputText _label="Tel*" _type="number" ref="tel_no"  _default={0} />
              <InputText _label="Expected Pay ($/mth)*" _type="number" ref="expected_salary"  _default={0} />
              <InputText _label="Relevant Experience(Yrs)*" _type="number" ref="yrs_rel_exp"  _default={0} />
              <InputText _label="Highest Relevant Qualification*" _type="text" ref="highest_qualification"  _default="" />
              <div class="form-group">
                <label>Message to recruiters:</label>
                <textarea class="form-control" type="text" ref="message_to_recruiters" onChange={this._updateApplication} placeholder="optional"></textarea>
              </div>
              <p>
                <label>Attach your CV*</label>
              </p>
              <div class="btn-group">
                <button class="btn btn-default" type="button">Default CV</button>
                <button class="btn btn-secondary" type="button">Customized CV</button>
              </div>
              <div class="form-action-btn">
                <p>* required</p>
                <button class="btn btn-default" type="button" onClick={function(e){e.preventDefault; hashHistory.go( -1 ); }}>Back</button>
                <button class="btn btn-primary" type="submit">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

//<button class="btn btn-primary" type="submit">Save</button>
