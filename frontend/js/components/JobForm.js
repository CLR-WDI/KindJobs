import React from "react";
// for refs
import ReactDOM from 'react-dom';
// for store
import {connect} from "react-redux"
import fakeStore from "../fakeStore"
// for dates
import {dateToYYYY_MM_YY} from "../helpers/helpers"
// components
import InputText from "../components/InputText"
// for back button
import {hashHistory} from "react-router"

@connect((store) => {
  var newStore = fakeStore;
  // newStore.jobListName = "Recent Jobs";
  return newStore;
})
export default class JobForm extends React.Component {
  constructor(){
    super();
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
        postdate: "",
        deadline: "",
        sgo: ""
      },
      type: "CREATE"
    };
    this._submitJob = this._submitJob.bind(this);
    this._updateInput = this._updateInput.bind(this);
    this._deleteJob = this._deleteJob.bind(this);
  }

  componentWillMount(){
    if(this.props.routeParams.id){
      let jobId = this.props.routeParams.id
      const jobData = Object.assign({}, this.props.kindjobs.filter( job => job.id === jobId)[0]);
      jobData.postdate = dateToYYYY_MM_YY(jobData.postdate);
      jobData.deadline = dateToYYYY_MM_YY(jobData.deadline);
      this.setState({
        job: jobData,
        type: "EDIT",
      });
    }else{
      const jobData = this.state.job;
      let cur = new Date(),
          after90days = new Date( cur.setDate(cur.getDate() + 90) );
      jobData.postdate = dateToYYYY_MM_YY( new Date() );
      jobData.deadline = dateToYYYY_MM_YY( after90days );
      this.setState({
        job: jobData
      });
    }
  }
  _deleteJob(e){
    e.preventDefault();
    var r = confirm("Delete this job?");
    if(r==true){
      if(this.state.type === "EDIT"){
        jobSave.id = this.props.routeParams.id;
        // delete job from database
        console.log("Job deleted");
      }
      else{
        this.props.history.goBack();
      }
    }
  }

  _submitJob(e){
    e.preventDefault();
    // remember to convert postdate deadline into Dates see below
    // also numbers to numbers
    let jobSave = Object.assign({}, this.state.job);
    jobSave.postdate = Date(jobSave.postdate);
    jobSave.deadline = Date(jobSave.deadline);
    jobSave.min_yrs_exp = Number(jobSave.min_yrs_exp);
    jobSave.salary = Number(jobSave.salary);

    if(this.state.type === "EDIT"){
      jobSave.id = this.props.routeParams.id;
      console.log(jobSave);
    }
    else{
      console.log(jobSave);
    }
  }

  _updateInput(e){
    e.preventDefault();
    this.setState({
      job: {
        term: ReactDOM.findDOMNode(this.refs.term.refs.inp).value,
        image: ReactDOM.findDOMNode(this.refs.image.refs.inp).value,
        sector: ReactDOM.findDOMNode(this.refs.sector.refs.inp).value,
        title: ReactDOM.findDOMNode(this.refs.title.refs.inp).value,
        location: ReactDOM.findDOMNode(this.refs.location.refs.inp).value,
        scope: ReactDOM.findDOMNode(this.refs.scope.refs.inp).value,
        salary: ReactDOM.findDOMNode(this.refs.salary.refs.inp).value,
        description: ReactDOM.findDOMNode(this.refs.description.refs.inp).value,
        min_qualification: ReactDOM.findDOMNode(this.refs.min_qualification.refs.inp).value,
        min_yrs_exp: ReactDOM.findDOMNode(this.refs.min_yrs_exp.refs.inp).value,
        sgo: ReactDOM.findDOMNode(this.refs.sgo.refs.inp).value,
        postdate: ReactDOM.findDOMNode(this.refs.postdate).value,
        deadline: ReactDOM.findDOMNode(this.refs.deadline).value,
      }
    });
  }
  render() {
    let fields = Object.keys(this.state.job);
    const fieldsFiltered = fields.filter( field => field !== "postdate" && field !== "deadline" && field !== "id");
    let inputFields = fieldsFiltered.map( (field, key) => {
      return <InputText key={key} ref={field} _label={field} _type="text" _updateInput={this._updateInput} _value={this.state.job[field]} />
    })

    return(
      <form onSubmit = {this._submitJob}>
        <button onClick={function(e){ e.preventDefault(); hashHistory.go(-1); }}>Back</button>
        <h1>KindJob Form - {this.state.type}</h1>
        {inputFields}

        <label> Post date:
          <input type="Date" ref="postdate" onChange={this._updateInput} value={this.state.job.postdate}></input>
        </label>
        <label> Deadline:
          <input type="Date" ref="deadline" onChange={this._updateInput} value={this.state.job.deadline}></input>
        </label>
        <br/>
        <button onClick={this._deleteJob}>Delete</button>
        <button type="submit">Post</button>
      </form>
    )
  }
}
