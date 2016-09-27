import React from "react";
import {connect} from 'react-redux'

// components
import InputText from "../components/InputText" //input field
import ReactDOM from 'react-dom'; // to target input fields
// actions
import {loginUser} from "../actions/userActions" //actions for Users
// for redirect
import {hashHistory} from 'react-router';


@connect((store) => {
})
export default class LoginContainer extends React.Component {
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
      <div class="container-fluid">
        <div class="col-md-4 col-md-offset-1">
          <form onSubmit = {this._submitLogin}>
            <InputText ref="email" _label="Email" _type="text"/>
            <InputText ref="password" _label="Password" _type="password"/>
            <br/>
            <button class="btn btn-primary" type="submit">Login</button>
          </form>
        </div>
        <div class="col-md-4 col-md-offset-1">
          <a href= '/api/users/auth/facebook' ><button class="btn btn-primary" type="button">Login with Facebook</button></a>
          <a href= '/api/users/auth/linkedin' ><button class="btn btn-primary" type="button">Login with LinkedIn</button></a>
        </div>

      </div>
    )
  }
}
