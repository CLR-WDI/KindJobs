import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import fakeStore from "../fakeStore"
import {formatDate} from "../helpers/helpers"
import InputText from "../components/InputText"

@connect((store) => {
  var newStore = fakeStore;
  // newStore.jobListName = "Recent Jobs";
  return newStore;
})
export default class ApplyContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      form: {
        kindjobs_id: "",
        name: "",
        email: "",
        tel: "",
        expectedPay: 0,
        yrs_exp: 0,
        qualification: "",
        message: "",
      }
    };
    this._submitApplication = this._submitApplication.bind(this);
    this._updateApplication = this._updateApplication.bind(this);
  }

  _submitApplication(e){
    e.preventDefault();
    console.log(this.state.form);
  }

  _updateApplication(e){
    e.preventDefault();
    this.setState({
      form: {
        kindjobs_id: this.props.routeParams.id,
        name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
        email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
        tel: ReactDOM.findDOMNode(this.refs.tel.refs.inp).value,
        expectedPay: ReactDOM.findDOMNode(this.refs.expectedPay.refs.inp).value,
        yrs_exp: ReactDOM.findDOMNode(this.refs.yrs_exp.refs.inp).value,
        qualification: ReactDOM.findDOMNode(this.refs.qualification.refs.inp).value,
        message: ReactDOM.findDOMNode(this.refs.message).value,
      }
    });
  }
  render() {
    let jobs = [ ...this.props.kindjobs];
    let job = jobs.filter( job => job.id === this.props.routeParams.id)[0];

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <form onSubmit = {this._submitApplication}>
            <h1>Application Form</h1>
            <h4>{job.title} - {job.sector} sector, {job.location}</h4>
            <div class="inner">
              <InputText label="Name*" _type="text" ref="name" _updateInput={this._updateApplication} _value={this.state.form.name} />
              <InputText label="Email*" _type="text" ref="email" _updateInput={this._updateApplication} _value={this.state.form.email} />
              <InputText label="Tel*" _type="text" ref="tel" _updateInput={this._updateApplication} _value={this.state.form.tel} />
              <InputText label="Expected Pay ($/mth)*" _type="text" ref="expectedPay" _updateInput={this._updateApplication} _value={this.state.form.expectedPay} />
              <InputText label="Relevant Experience(Yrs)*" _type="text" ref="yrs_exp" _updateInput={this._updateApplication} _value={this.state.form.yrs_exp} />
              <InputText label="Highest Relevant Qualification*" _type="text" ref="qualification" _updateInput={this._updateApplication} _value={this.state.form.qualification} />
              <div class="form-group">
                <label>Message to recruiters:</label>
                <textarea class="form-control" type="text" ref="message" onChange={this._updateApplication} placeholder="optional" value={this.state.form.message}></textarea>
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
                <button class="btn btn-default" onClick={this.props.history.goBack.bind(this)}>Back</button>
                <button class="btn btn-primary" type="submit">Apply</button>
                <button class="btn btn-primary" type="submit">Apply</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
