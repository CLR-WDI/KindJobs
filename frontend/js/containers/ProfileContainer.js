import React from "react";
import {connect} from 'react-redux'

// components
import InputText from "../components/InputText" //input field
import ReactDOM from 'react-dom'; // to target input fields
// actions
import {signupUser} from "../actions/userActions" //actions for Users
// for redirect
import {hashHistory} from 'react-router';

@connect((store) => {
})
export default class ProfileContainer extends React.Component {
  constructor(){
    super();
    this._submitUpdate = this._submitUpdate.bind(this);
    this._submitDelete = this._submitDelete.bind(this);
  }
  _submitUpdate(e){
    e.preventDefault();
    if (ReactDOM.findDOMNode(this.refs.password.refs.inp).value !== ReactDOM.findDOMNode(this.refs.confirmPassword.refs.inp).value){
      alert("Passwords do not match");
    }else{
      let userDetails = {
        name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
        email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
        password: ReactDOM.findDOMNode(this.refs.password.refs.inp).value,
      };
      this.props.dispatch( editMe(userDetails) );
      hashHistory.push({pathname: '/'});
    }
  }
  _submitDelete(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete your profile?")){
      this.props.dispatch( deleteMe() );
      hashHistory.push({pathname: '/'});
    }
  }
  render() {
    return(
      <div class="container-fluid">
        <div class="col-md-4 col-md-offset-1">
          <form onSubmit = {this._submitUpdate}>
            <InputText ref="name" _label="Name" _type="text"/>
            <InputText ref="email" _label="Email" _type="text"/>
            <InputText ref="password" _label="Password" _type="password"/>
            <InputText ref="confirmPassword" _label="Confirm Password" _type="password"/>
            <br/>
            <button class="btn btn-primary" type="submit">Update profile</button>
            <button class="btn btn-primary" type="button" onClick={this._submitDelete} >Delete my profile</button>
          </form>
        </div>
        <div class="col-md-4 col-md-offset-1">
          <a href= '/auth/facebook' class="btn btn-primary" >Link Facebook</a>
          <a href= '/auth/login' class="btn btn-primary">Link LinkedIn</a>
        </div>
      </div>
    )
  }
}