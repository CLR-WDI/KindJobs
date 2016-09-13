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
// actions for redux
import {fetchKindJobs, deleteKindJob, editKindJob, createKindJob} from "../actions/kindjobActions"

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class JobForm extends React.Component {
  constructor(){
    super();
    this._submitJob = this._submitJob.bind(this);
    this._deleteJob = this._deleteJob.bind(this);
  }

  componentWillMount(){
    this.props.dispatch( fetchKindJobs() );
  }
  _deleteJob(e){
    e.preventDefault();
    var r = confirm("Delete this job?");
    if(r==true){
      console.log(this.props);
      console.log(this.props.routeParams.id);
      if(this.props.routeParams.id){
        this.props.dispatch( deleteKindJob(this.props.routeParams.id) );
        this.props.history.goBack();
      }
      else{
        this.props.history.goBack();
      }
    }
  }

  _submitJob(e){
    e.preventDefault();
    let jobSave = {
          employment_term_id: ReactDOM.findDOMNode(this.refs.employment_term_id.refs.inp).value,
          image: ReactDOM.findDOMNode(this.refs.image.refs.inp).value,
          sector_id: ReactDOM.findDOMNode(this.refs.sector_id.refs.inp).value,
          title: ReactDOM.findDOMNode(this.refs.title.refs.inp).value,
          location_id: ReactDOM.findDOMNode(this.refs.location_id.refs.inp).value,
          scope_id: ReactDOM.findDOMNode(this.refs.scope_id.refs.inp).value,
          sgo_id: ReactDOM.findDOMNode(this.refs.sgo_id.refs.inp).value,
          salary: ReactDOM.findDOMNode(this.refs.salary.refs.inp).value,
          min_qualification: ReactDOM.findDOMNode(this.refs.min_qualification.refs.inp).value,
          min_yrs_exp: ReactDOM.findDOMNode(this.refs.min_yrs_exp.refs.inp).value,
          description: ReactDOM.findDOMNode(this.refs.description).value,
          deadline: ReactDOM.findDOMNode(this.refs.deadline).value,
        };

    if(this.props.routeParams.id){
      let id = this.props.routeParams.id;
      this.props.dispatch( editKindJob(id, jobSave) );
      console.log(jobSave);
      hashHistory.go(-1);
    }
    else{
      this.props.dispatch( createKindJob(jobSave) );
      console.log(jobSave);
      hashHistory.go(-1);
    }
  }

  render() {
    if(this.props.routeParams.id){
      var jobs = [ ...this.props.kindjobs];
      var job = jobs.filter( job => job._id === this.props.routeParams.id)[0];
      console.log(job)
      var type = "EDIT"
    }
    else {
      let cur = new Date(),
          after90days = dateToYYYY_MM_YY( new Date( cur.setDate(cur.getDate() + 90) ) );
      console.log(after90days);
      var type = "POST"
      var job = {
        deadline: after90days,
        description: "",
        employment_term_id: "",
        image: "",
        location_id: "",
        min_qualification: "",
        min_yrs_exp: 0,
        salary: 0,
        scope_id: "",
        sector_id: "",
        sgo_id: "",
        title: "",
      }
    }
    console.log(job);
    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <form onSubmit = {this._submitJob}>
            <button class="btn btn-default" onClick={function(e){ e.preventDefault(); hashHistory.go(-1); }}>Back</button>
            <h1>KindJob Form - {type}</h1>
            <InputText ref="title" _label="title" _type="text"
            _default={job.title} />
            <InputText ref="sector_id" _label="sector_id" _type="text"
            _default={job.sector_id._id}/>
            <InputText ref="scope_id" _label="scope_id" _type="text"
            _default={job.scope_id._id}/>
            <InputText ref="location_id" _label="location_id" _type="text"
            _default={job.location_id._id}/>
            <InputText ref="sgo_id" _label="sgo_id" _type="text"
            _default={job.sgo_id._id}/>
            <InputText ref="employment_term_id" _label="employment_term_id" _type="text"
            _default={job.employment_term_id._id}/>
            <InputText ref="image" _label="image" _type="text"
            _default={job.image}/>

            <InputText ref="min_qualification" _label="min_qualification" _type="text"
            _default={job.min_qualification}/>
            <InputText ref="min_yrs_exp" _label="min_yrs_exp" _type="number"
            _default={job.min_yrs_exp}/>
            <InputText ref="salary" _label="salary" _type="number"
            _default={job.salary}/>

            <label> Description:
              <textarea class="form-control" ref="description"
              defaultValue={job.description}></textarea>
            </label>
            <br/>
            <label> Deadline:
              <input type="Date" ref="deadline" class="form-control" onChange={this._updateInput}
              defaultValue={job.deadline}></input>
            </label>
            <br/>
            <button class="btn btn-warning" onClick={this._deleteJob}>Delete</button>
            <button class="btn btn-primary" type="submit">Post</button>
          </form>
        </div>
      </div>
    )
  }
}


//sector_name
// scope_name
// location_name
// SGO_name
// employment_term
