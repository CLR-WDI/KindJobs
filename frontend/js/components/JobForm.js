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
export default class JobForm extends React.Component {
  constructor(){
    super();
    let today = new Date();
    let cur = new Date(),
        after90days = new Date( cur.setDate(cur.getDate() + 90) );
    this.state = {
      job: {
        id: "",
        term: "",
        image: "",
        sector: "",
        title: "",
        location: "",
        scope: "",
        salary: 0,
        description: "",
        min_qualification: "",
        min_yrs_exp: 0,
        postdate: today,
        deadline: after90days,
        sgo: ""
      }
    };
    this._submitForm = this._submitApplication.bind(this);
    this._updateForm = this._updateApplication.bind(this);
  }

  _submitApplication(e){
    e.preventDefault();
    // let jobDetails = this.state.job;
    // jobDetails.postdate = new Date();
    console.log(this.state.job);
  }

  _updateApplication(e){
    e.preventDefault();
    this.setState({
      job: {
        id: ReactDOM.findDOMNode(this.refs.id).value,
        term: ReactDOM.findDOMNode(this.refs.term).value,
        image: ReactDOM.findDOMNode(this.refs.image).value,
        sector: ReactDOM.findDOMNode(this.refs.sector).value,
        title: ReactDOM.findDOMNode(this.refs.title).value,
        location: ReactDOM.findDOMNode(this.refs.location).value,
        scope: ReactDOM.findDOMNode(this.refs.scope).value,
        salary: ReactDOM.findDOMNode(this.refs.salary).value,
        description: ReactDOM.findDOMNode(this.refs.description).value,
        min_qualification: ReactDOM.findDOMNode(this.refs.min_qualification).value,
        min_yrs_exp: ReactDOM.findDOMNode(this.refs.min_yrs_exp).value,
        sgo: ReactDOM.findDOMNode(this.refs.sgo).value,
      }
    });
  }
  render() {
    let fields = Object.keys(this.state.job);
    console.log(fields);
    const fieldsFiltered = fields.filter( field => field !== "postdate" && field !== "deadline");
    let inputFields = fieldsFiltered.map( (field, key) => {
      return <InputText key={key} label={field} type="text" ref={field} onChange={this._updateApplication} value={this.state.job[field]} />
    })

    return(
      <form onSubmit = {this._submitApplication}>
        <button onClick={this.props.history.goBack.bind(this)}>Back</button>
        <h1>KindJob Form </h1>
        {inputFields}

        <p> Post date: {formatDate(this.state.job.postdate)}</p>
        <p> Deadline: {formatDate(this.state.job.deadline)}</p>
        <br/>
        <button type="submit">Post</button>
      </form>
    )
  }
}
