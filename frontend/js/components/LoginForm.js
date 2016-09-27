import React from "react";
import {connect} from 'react-redux'

// components
import InputText from "./InputText" //input field
import ReactDOM from 'react-dom'; // to target input fields
// actions
import {loginUser} from "../actions/userActions" //actions for Users
// for redirect
import {hashHistory} from 'react-router';


@connect((store) => {
})
export default class LoginForm extends React.Component {
  constructor(){
    super();
    this._submitLogin = this._submitLogin.bind(this);
  }
  _submitLogin(e){
    e.preventDefault();
    let userLogin = {
      email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
      password: ReactDOM.findDOMNode(this.refs.password.refs.inp).value,
    };
    console.log(userLogin);
    this.props.dispatch( loginUser(userLogin) );
    hashHistory.push({pathname: '/'});
  }
  render() {
    return(
      <div>
        <form onSubmit = {this._submitLogin}>
          <InputText ref="email" _label="Email" _type="text"/>
          <InputText ref="password" _label="Password" _type="password"/>
          <br/>
          <button class="btn btn-primary" type="submit">Login</button>
        </form>
        <a href='/api/users/auth/facebook' class="btn btn-block btn-social btn-facebook"><span class="fa fa-facebook"></span> Login with Facebook</a>
        <a href='/api/users/auth/linkedin' class="btn btn-block btn-social btn-linkedin"><span class="fa fa-linkedin"></span> Login with LinkedIn</a>
      </div>
    )
  }
}
