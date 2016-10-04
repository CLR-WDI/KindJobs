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
    this._toggleCollapse = this._toggleCollapse.bind(this);
    this.state = {
      collapsed: true,
    }
  }
  _logout(e){
    e.preventDefault();
    this.props.dispatch( logoutUser() );
    hashHistory.push({pathname: '/'});
  }

  _toggleCollapse() {
    let collapseState = !this.state.collapsed;
    this.setState({collapsed: collapseState})
  }

  componentWillMount() {
    if( typeof this.props.me.email === "undefined" ){
      this.props.dispatch( getMe() );
    }
  }

  render() {
    let logoLink = "./images/kindjobs-logo.png"
    let navbarStyle = {}
    if (this.props._location.pathname == '/') {
      logoLink = "./images/kindjobs-logo-dark.png"
      navbarStyle = {
        background: 'none',
      }
    }
    let collapseTrigger = ''
    let toggleIcon = 'icon-ios-more'
    let makeCollapsable
    if (!this.state.collapsed) {
      collapseTrigger = 'in';
      toggleIcon = 'icon-ios-close-empty'
      makeCollapsable = this._toggleCollapse
    }
    let navbarLinks
    if(!this.props.me)
    { navbarLinks = <li><p class="navbar-btn"><Link class="btn btn-signin" to='/login' onClick={makeCollapsable}><i class="icon-ios-contact-outline"></i> Sign in</Link></p></li> }
    else{
      switch (this.props.me.userType) {
        case "Jobseeker":
          navbarLinks = (
            <NavDropdown eventKey="4" title="Account" id="nav-dropdown">
              <li><Link to='profile' onClick={makeCollapsable}>My profile</Link></li>
              <li onClick={makeCollapsable}><a href="#" onClick={this._logout}>Logout</a></li>
            </NavDropdown>
          );
          break;
        case "Admin":
          navbarLinks = (
            <NavDropdown eventKey="4" title="Admin" id="nav-dropdown">
              <li><Link to='admin/applications' onClick={makeCollapsable}>Applications</Link></li>
              <li><Link to='admin/kindjobs' onClick={makeCollapsable}>Job Postings</Link></li>
              <li><Link to='admin/options' onClick={makeCollapsable}>Options</Link></li>
              <li><Link to='admin/users' onClick={makeCollapsable}>Users</Link></li>
              <li><Link to='profile' onClick={makeCollapsable}>My profile</Link></li>
              <li onClick={makeCollapsable}><a href="#" onClick={this._logout}>Logout</a></li>
            </NavDropdown>
          );
          break;
        case "SGO":
          navbarLinks = (
            <NavDropdown eventKey="4" title="Account" id="nav-dropdown">
              <li><Link to='profile' onClick={makeCollapsable}>My profile</Link></li>
              <li onClick={makeCollapsable}><a href="#" onClick={this._logout}>Logout</a></li>
            </NavDropdown>
          );
          break;
        default:
          navbarLinks = <li><p class="navbar-btn"><Link class="btn btn-signin" to='/login' onClick={makeCollapsable}><i class="icon-ios-contact-outline"></i> Sign in</Link></p></li>;
      }
    }
    return(
      <Navbar staticTop fluid style={navbarStyle}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'><div class="logo"><img class="img-responsive" src={logoLink} /></div></Link>
          </Navbar.Brand>
          <button type="button" class="navbar-toggle collapsed" onClick={this._toggleCollapse}>
            <span class="sr-only">Toggle navigation</span>
            <i class={"navbar-toggle-icon " + toggleIcon}></i>
          </button>
        </Navbar.Header>
        <div class={"navbar-collapse collapse " + collapseTrigger}>
          <Nav pullRight>
            <li><Link to='/about' onClick={makeCollapsable}>About</Link></li>
            {navbarLinks}
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default Header
