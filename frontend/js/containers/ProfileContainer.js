import React from "react";
import {connect} from 'react-redux'

// components
import InputText from "../components/InputText" //input field
import ReactDOM from 'react-dom'; // to target input fields
// actions
import {getMe, editMe, destroyMe} from "../actions/userActions" //actions for Users
// for redirect
import {hashHistory} from 'react-router';

@connect((store) => {
  return {
    me: store.users.me,
  }
})
export default class ProfileContainer extends React.Component {
  constructor(){
    super();
    this._submitUpdate    =   this._submitUpdate.bind(this);
    this._submitDelete    =   this._submitDelete.bind(this);
    this._removeFacebook  =   this._removeFacebook.bind(this);
    this._removeLinkedIn  =   this._removeLinkedIn.bind(this);
  }

  componentWillMount() {
    this.props.dispatch( getMe() );

  }


  _submitUpdate(e){
    e.preventDefault();
    if (ReactDOM.findDOMNode(this.refs.password.refs.inp).value !== ReactDOM.findDOMNode(this.refs.confirmPassword.refs.inp).value){
      alert("Passwords do not match");
    }else{
      let userDetails;
      // if password is left blank, don't edit password
      if(ReactDOM.findDOMNode(this.refs.password.refs.inp).value === ""){
        userDetails = {
          name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
          email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
        };
      }else{
        userDetails = {
          name: ReactDOM.findDOMNode(this.refs.name.refs.inp).value,
          email: ReactDOM.findDOMNode(this.refs.email.refs.inp).value,
          password: ReactDOM.findDOMNode(this.refs.password.refs.inp).value,
        };
      }

      this.props.dispatch( editMe(userDetails) );
      hashHistory.push({pathname: '/'});
    }
  }
  _submitDelete(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete your profile?")){
      this.props.dispatch( destroyMe() );
      hashHistory.push({pathname: '/'});
    }
  }
  _removeFacebook(e){
    e.preventDefault();
    if (confirm("Are you sure you want to unlink facebook from your profile?")){
      this.props.dispatch( editMe({facebookId: null}) );
    }
  }
  _removeLinkedIn(e){
    e.preventDefault();
    if (confirm("Are you sure you want to unlink linkedin from your profile?")){
      this.props.dispatch( editMe({linkedinId: null}) );
    }
  }

  render() {
    // insert default values
    if(typeof this.refs.email !== "undefined"){
      this.refs.name.refs.inp.defaultValue = this.props.me.name;
      this.refs.email.refs.inp.defaultValue = this.props.me.email;
    }

    var facebookButton
    var linkedInButton

    if((typeof this.props.me === "undefined") || (typeof this.props.me.facebookId === "undefined") || this.props.me.facebookId === null  ){
      facebookButton = <a href= '/api/users/auth/facebook' class="btn btn-primary inactive">Link Facebook</a>
    }else{
      facebookButton = <button type="button" class="btn btn-primary active" onClick={this._removeFacebook}>Unlink Facebook</button>
    }

    if( (typeof this.props.me === "undefined") || (typeof this.props.me.linkedinId === "undefined") ||  this.props.me.linkedinId === null ){
      linkedInButton = <a href= '/api/users/auth/linkedin' class="btn btn-primary inactive">Link LinkedIn</a>
    }else{
      linkedInButton = <button type="button" class="btn btn-primary active" onClick={this._removeLinkedIn}>Unlink LinkedIn</button>
    }



    return(
      <div class="container-fluid">
        <div class="col-md-4 col-md-offset-1">
          <form onSubmit = {this._submitUpdate}>
            <InputText ref="name" _label="Name" _type="text" />
            <InputText ref="email" _label="Email" _type="text" />
            <InputText ref="password" _label="Password" _type="password"/>
            <InputText ref="confirmPassword" _label="Confirm Password" _type="password"/>
            <br/>
            <button class="btn btn-primary" type="submit">Update profile</button>
            <button class="btn btn-primary" type="button" onClick={this._submitDelete} >Delete my profile</button>
          </form>
        </div>
        <div class="col-md-4 col-md-offset-1">
          {facebookButton}
          {linkedInButton}
        </div>
      </div>
    )
  }
}
