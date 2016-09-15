import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";
import {Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";
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
      <NavDropdown eventKey="4" title="Admin" id="nav-dropdown">
        <li><Link to='admin/applications'>Applications</Link></li>
        <li><Link to='admin/kindjobs'>Job Postings</Link></li>
        <li><Link to='admin/options'>Options</Link></li>
        <li><Link to='admin/users'>Users</Link></li>
        <li><a href="#" onClick={this._logout}>Logout</a></li>
      </NavDropdown>)
    }else{
      adminOrNot = <li><Link to='/login'>Login</Link></li>
    }
    return(
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Kind Jobs</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {adminOrNot}
            <li><Link to='/'>Home</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
