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
export default class SignupContainer extends React.Component {
  constructor(){
    super();
    this._submitSignup = this._submitSignup.bind(this);
  }
  _submitSignup(e){
    e.preventDefault();
    let userSignup = {
      name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
      email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
      password: ReactDOM.findDOMNode(this.refs.password.refs.inp).value,
      admin: ReactDOM.findDOMNode(this.refs.admin.refs.inp).checked,
    };
    this.props.dispatch( signupUser(userSignup) );
    hashHistory.push({pathname: '/'});
  }
  render() {
    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <form onSubmit = {this._submitSignup}>
            <InputText ref="name" _label="Name" _type="text"/>
            <InputText ref="email" _label="Email" _type="text"/>
            <InputText ref="password" _label="Password" _type="text"/>
            <InputText ref="admin" _label="Admin" _type="checkbox"/>
            <br/>
            <button class="btn btn-primary" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}