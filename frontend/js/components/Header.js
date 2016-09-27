import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router";
import {Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";
import {logoutUser} from "../actions/userActions";

@connect((store) => {
  return {
    jwtToken: store.users.jwtToken,
    admin: store.users.admin,
    loggedIn: store.users.loggedIn
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
    let navbarLinks
    if(this.props.loggedIn && this.props.admin) {
      navbarLinks = (
        <NavDropdown eventKey="4" title="Admin" id="nav-dropdown">
          <li><Link to='admin/applications'>Applications</Link></li>
          <li><Link to='admin/kindjobs'>Job Postings</Link></li>
          <li><Link to='admin/options'>Options</Link></li>
          <li><Link to='admin/users'>Users</Link></li>
          <li><a href="#" onClick={this._logout}>Logout</a></li>
        </NavDropdown>
      )
    } else if(this.props.loggedIn && !this.props.admin) {
      navbarLinks = <li><a href='/api/users/logoutAuth'>Logout</a></li>
    } else if(!this.props.loggedIn && !this.props.admin) {
      navbarLinks = <li><Link to='/login'>Login/Signup</Link></li>
    }
    return(
      <Navbar staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><div class="logo"><img class="img-responsive" src="./images/kindjobs-logo.png" /></div></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {navbarLinks}
            <li><Link to='/'>Home</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
