import React from "react";
import {connect} from "react-redux"
import {Link, hashHistory} from "react-router";
import {Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";
import {logoutUser, getMe} from "../actions/userActions";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

@connect((store) => {
  return {
    me: store.users.me,
  }
})
class Header extends React.Component {
  constructor() {
    super();
    this._logout = this._logout.bind(this);
    this._toggleCollapse = this._toggleCollapse.bind(this);
  }
  _logout(e){
    e.preventDefault();
    this.props.dispatch( logoutUser() );
    hashHistory.push({pathname: '/'});
  }

  _toggleCollapse() {

  }

  componentWillMount() {
    if( typeof this.props.me.email === "undefined" ){
      this.props.dispatch( getMe() );
    }
  }

  render() {
    let navbarLinks
    if(!this.props.me)
    { navbarLinks = <li><Link to='/login'>Login/Signup</Link></li> }
    else{
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
          navbarLinks = <li><p class="navbar-btn"><Link class="btn btn-signin" to='/login'><i class="icon-ios-contact-outline"></i> Sign in</Link></p></li>;
      }
    }
    let logoLink = "./images/kindjobs-logo.png"
    let navbarStyle = {}
    if (this.props._location.pathname == '/') {
      logoLink = "./images/kindjobs-logo-dark.png"
      navbarStyle = {
        background: 'none',
      }
    }
    console.log("props is ", this.props);
    return(
      <Navbar staticTop fluid style={navbarStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><div class="logo"><img class="img-responsive" src={logoLink} /></div></Link>
          </Navbar.Brand>
          <button type="button" class="navbar-toggle collapsed" onClick={this._toggleCollapse}>
            <span class="sr-only">Toggle navigation</span>
            <i class="navbar-toggle-icon icon-ios-more"></i>
          </button>
        </Navbar.Header>
        <ReactCSSTransitionGroup
          transitionName="navbar-show"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key='collapse' class="navbar-collapse collapse">
            <Nav pullRight>
              <li><Link to='/about'>About</Link></li>
              {navbarLinks}
            </Nav>
          </div>
        </ReactCSSTransitionGroup>
      </Navbar>
    )
  }
}

export default Header
