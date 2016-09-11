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
        name: ReactDOM.findDOMNode(this.refs.name).value,
        email: ReactDOM.findDOMNode(this.refs.email).value,
        tel: ReactDOM.findDOMNode(this.refs.tel).value,
        expectedPay: ReactDOM.findDOMNode(this.refs.expectedPay).value,
        yrs_exp: ReactDOM.findDOMNode(this.refs.yrs_exp).value,
        qualification: ReactDOM.findDOMNode(this.refs.qualification).value,
        message: ReactDOM.findDOMNode(this.refs.message).value,
      }
    });
  }
  render() {
    let jobs = [ ...this.props.kindjobs];
    let job = jobs.filter( job => job.id === this.props.routeParams.id)[0];

    return(
      <form onSubmit = {this._submitApplication}>
        <button onClick={this.props.history.goBack.bind(this)}>Back</button>
        <h1>Application Form</h1>
        <h4>{job.title} - {job.sector} sector, {job.location}</h4>

        <InputText label="Name" type="text" ref="name" onChange={this._updateApplication} value={this.state.form.name} />
        <InputText label="Email" type="text" ref="email" onChange={this._updateApplication} value={this.state.form.email} />
        <InputText label="Tel" type="text" ref="tel" onChange={this._updateApplication} value={this.state.form.tel} />
        <InputText label="Expected Pay ($/mth)" type="text" ref="expectedPay" onChange={this._updateApplication} value={this.state.form.expectedPay} />
        <InputText label="Relevant Experience(Yrs)" type="text" ref="yrs_exp" onChange={this._updateApplication} value={this.state.form.yrs_exp} />
        <InputText label="Highest Relevant Qualification" type="text" ref="qualification" onChange={this._updateApplication} value={this.state.form.qualification} />

        <label> Message to recruiters
          <textarea type="text" ref="message" onChange={this._updateApplication} placeholder="optional" value={this.state.form.message}></textarea>
        </label>
        <br/>

          <button type="button">Default CV</button>
          <button type="button">Customized CV</button>

        <br/>
        <button type="submit">Apply</button>
      </form>
    )
  }
}
