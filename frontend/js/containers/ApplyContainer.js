import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import InputText from "../components/InputText"
import FileUploader from "../components/FileUploader"

// actions
import {getMe} from "../actions/userActions" //actions for Users
import {fetchKindJob, fetchKindJobs} from "../actions/kindjobActions"
import {createApplication} from "../actions/applicationActions"
import {uploadCV, clearCV} from "../actions/uploaderActions"
// for redirect to home
import {hashHistory} from "react-router"

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs,
    cv: store.uploader.cv,
    me: store.users.me
  }
})
export default class ApplyContainer extends React.Component {
  componentWillMount() {
    if( typeof this.props.me.email === "undefined" || (typeof this.refs.email === "undefined") ){
      this.props.dispatch( getMe() );
    }
    if (this.props.kindjobs.length === 0 ){
      this.props.dispatch( fetchKindJobs() );
    }
    this.props.dispatch( fetchKindJob() );
  }

  componentWillUnmount() {
    this.props.dispatch( clearCV() );
  }

  constructor(){
    super();
    this._submitApplication = this._submitApplication.bind(this);
    this._onUpload = this._onUpload.bind(this);
  }

  _onUpload(file) {
    this.props.dispatch( uploadCV(file) );
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
      link_to_cv: this.props.cv.url
    }
    this.props.dispatch( createApplication(form) );
    alert( "Application submitted" );
    hashHistory.go( -2 );
  }

  render() {
    if( (this.props.kindjobs.length === 0 ) ){
      return( <div></div> )
    }else{
      let jobs = [ ...this.props.kindjobs];
      let job = jobs.filter( job => job._id === this.props.routeParams.id)[0];

      if( (typeof this.refs.email !== "undefined") && (typeof this.props.me.email !== "undefined") ){
        this.refs.name.refs.inp.defaultValue = this.props.me.name;
        this.refs.email.refs.inp.defaultValue = this.props.me.email;
      }

      return(
        <div class="container-fluid">
          <div class="col-md-8 col-md-offset-2">
            <form onSubmit = {this._submitApplication}>
              <h1>Application Form</h1>
              <h4>{job.title} - {job.sector_id.name} sector, {job.location_id.name}</h4>
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
                <FileUploader _onUpload={ this._onUpload } _uploadedURL={this.props.cv.url} _fileName={this.props.cv.name} _status={this.props.cv.status}/>

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
}

//<button class="btn btn-primary" type="submit">Save</button>
