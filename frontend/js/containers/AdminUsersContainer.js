import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router";
import {hashHistory} from 'react-router';

// actions
import { fetchUsers, deleteUser, editUser } from "../actions/userActions" //actions for Users
import {fetchSGOs} from "../actions/sgoActions" //actions for SGOs

// for refs
import ReactDOM from 'react-dom';

@connect((store) => {
  return {
    users: store.users.users,
    sgos: store.sgos.sgos,
    // jwtToken: store.users.jwtToken,
    // admin: store.users.admin
  }
})
export default class AdminUsersContainer extends React.Component {
  constructor(){
    super();
    this._deleteUser = this._deleteUser.bind(this);
    this._editUserType = this._editUserType.bind(this);
  }
  componentWillMount(){
    this.props.dispatch( fetchUsers() );
    this.props.dispatch( fetchSGOs() );
  }
  _deleteUser( e, id){
    e.preventDefault();
    if( confirm("Delete this user?") ){
      this.props.dispatch( deleteUser(id) );
    }
  }
  _editUserType( e, id ){
    e.preventDefault();
    if( confirm("Change user type?") ){
      this.props.dispatch( editUser(id, { userType: ReactDOM.findDOMNode(this.refs["userType"+id]).value }) );
    }
  }


  render() {
    // if( !this.props.admin ){hashHistory.push({pathname: 'login'})}
    let userList = this.props.users.map( (user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <select class="form-control" ref={"userType"+user._id}  defaultValue={user.userType} onChange={ function(e){ this._editUserType(e, user._id )}.bind(this) } >
              <option value="Admin" >Admin</option>
              <option value="Jobseeker" >Jobseeker</option>
              <option value="SGO" >SGO</option>
            </select>
          </td>
          <td><button class="btn btn-sm btn-danger" onClick={function(e){this._deleteUser( e, user._id)}.bind(this)}>Delete</button></td>
        </tr>
      )
    })

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <h1>Admin User View</h1>
          <Link to='login'><button class="btn btn-primary">Create new User</button></Link>
          <div class="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-md-4">Name</th>
                  <th className="col-md-4">Email</th>
                  <th className="col-md-2">User Type</th>
                  <th className="col-md-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {userList}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
