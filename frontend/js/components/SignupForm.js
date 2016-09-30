import React from "react";
import {connect} from 'react-redux'

// components
import InputText from "./InputText" //input field
import ReactDOM from 'react-dom'; // to target input fields
// actions
import {signupUser} from "../actions/userActions" //actions for Users
// for redirect
import {hashHistory} from 'react-router';

@connect((store) => {
})
export default class SignupForm extends React.Component {
  constructor(){
    super();
    this._submitSignup = this._submitSignup.bind(this);
  }
  _submitSignup(e){
    e.preventDefault();
    if (ReactDOM.findDOMNode(this.refs.password.refs.inp).value !== ReactDOM.findDOMNode(this.refs.confirmPassword.refs.inp).value){
      alert("Passwords do not match");
    }else{
      let userSignup = {
        name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
        email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
        password: ReactDOM.findDOMNode(this.refs.password.refs.inp).value,
        // admin: ReactDOM.findDOMNode(this.refs.admin.refs.inp).checked,
      };
      this.props.dispatch( signupUser(userSignup) );
      hashHistory.push({pathname: '/'});
    }
  }
  render() {
    return(
      <div>
        <form onSubmit = {this._submitSignup}>
          <InputText ref="name" _label="Name" _type="text"/>
          <InputText ref="email" _label="Email" _type="text"/>
          <InputText ref="password" _label="Password" _type="password"/>
          <InputText ref="confirmPassword" _label="Confirm Password" _type="password"/>
          <br/>
          <button class="btn btn-primary" type="submit">Sign Up</button>
        </form>
        <a href= '/api/users/auth/facebook' class="btn btn-block btn-social btn-facebook"><span class="fa fa-facebook"></span> Signup with Facebook</a>
        <a href= '/api/users/auth/linkedin' class="btn btn-block btn-social btn-linkedin"><span class="fa fa-linkedin"></span> Signup with LinkedIn</a>
      </div>
    )
  }
}

//<InputText ref="admin" _label="Admin" _type="checkbox"/>
