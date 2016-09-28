import React from "react";
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router";
import {Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";
import {logoutUser, getMe} from "../actions/userActions";

@connect((store) => {
  return {
    me: store.users.me,
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
    hashHistory.push({pathname: '/'});
  }
  componentWillMount() {
    if( typeof this.props.me.email === "undefined" ){
      this.props.dispatch( getMe() );
    }
  }

  render() {
    let navbarLinks
    switch (this.props.me.userType) {
      case "Jobseeker":
        navbarLinks = (
          <NavDropdown eventKey="4" title="Account" id="nav-dropdown">
            <li><Link to='profile'>My profile</Link></li>
            <li><a href="#" onClick={this._logout}>Logout</a></li>
          </NavDropdown>
        );
        break;
      case "Admin":
        navbarLinks = (
          <NavDropdown eventKey="4" title="Admin" id="nav-dropdown">
            <li><Link to='admin/applications'>Applications</Link></li>
            <li><Link to='admin/kindjobs'>Job Postings</Link></li>
            <li><Link to='admin/options'>Options</Link></li>
            <li><Link to='admin/users'>Users</Link></li>
            <li><Link to='profile'>My profile</Link></li>
            <li><a href="#" onClick={this._logout}>Logout</a></li>
          </NavDropdown>
        );
        break;
      case "SGO":
        navbarLinks = (
          <NavDropdown eventKey="4" title="Account" id="nav-dropdown">
            <li><Link to='profile'>My profile</Link></li>
            <li><a href="#" onClick={this._logout}>Logout</a></li>
          </NavDropdown>
        );
        break;
      default:
        navbarLinks = <li><Link to='/login'>Login/Signup</Link></li>;
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
