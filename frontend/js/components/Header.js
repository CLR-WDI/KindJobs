import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import {logoutUser} from "../actions/userActions";

@connect((store) => {
  return {
    jwtToken: store.users.jwtToken,
    admin: store.users.admin
  }
})
class Header extends React.Component {
  constructor() {
    super();
    this._logout = this._logout.bind(this);
  }
  _logout(e){
    e.preventDefault();
    this.props.dispatch( logoutUser() );
  }
  render() {
    let adminOrNot
    if( this.props.admin ){
      adminOrNot = (
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Admin</a>
        <div class="dropdown-menu">
          <li><Link to='admin/applications'>Applications</Link></li>
          <li><Link to='admin/kindjobs'>Job Postings</Link></li>
          <li><Link to='admin/options'>Options</Link></li>
          <li><Link to='admin/users'>Users</Link></li>
          <li><a href="#" onClick={this._logout}>Logout</a></li>
        </div>
      </li>
    )
    }else{
      adminOrNot = <li><Link to='/login'>Login</Link></li>
    }
    return(
      <Navbar color="faded" light full>
        <NavbarToggler />
        <div class="collapse navbar-toggleable-xs" id="navbarCollapse">
          <a class="navbar-brand" href="#">Responsive navbar</a>
          <Nav className="pull-xs-right" navbar>
            {adminOrNot}
            <NavItem><Link to='/'>Home</Link></NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default Header
