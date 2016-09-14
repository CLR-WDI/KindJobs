import React from "react";
import {connect} from 'react-redux'


// actions
import { fetchUsers, deleteUser } from "../actions/userActions" //actions for Users


@connect((store) => {
  return {
    users: store.users.users,
    jwtToken: store.users.jwtToken
  }
})
export default class AdminUsersContainer extends React.Component {
  constructor(){
    super();
    this._deleteUser = this._deleteUser.bind(this);
  }
  componentWillMount(){
    this.props.dispatch( fetchUsers(this.props.jwtToken) );
  }
  _deleteUser( e, id , jwtToken ){
    e.preventDefault();
    var r = confirm("Delete this user?");
    if(r==true){
      this.props.dispatch( deleteUser(id, jwtToken) );
    }
  }
  render() {
    let userList = this.props.users.map( (user) => {
      return (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.admin}</td>
          <td><button onClick={function(e){this._deleteUser( e, user._id, this.props.jwtToken )}.bind(this)}>Delete</button></td>
        </tr>
      )
    })

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <h1>Admin User View</h1>
          <Link to='signup'><button class="btn btn-primary">Create new User</button></Link>
          <div class="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-md-4">Name</th>
                  <th className="col-md-4">Email</th>
                  <th className="col-md-2">Admin?</th>
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
