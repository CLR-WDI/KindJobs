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
    this._toggleCollapse = this._toggleCollapse.bind(this);
    this.state = {
      _collapsed: true
    }
  }
  _logout(e){
    e.preventDefault();
    this.props.dispatch( logoutUser() );
  }
  _toggleCollapse(e) {
    e.preventDefault();
    this.setState({
      _collapsed: !this.state._collapsed
    });
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
      adminOrNot = <NavItem><Link to='/login'>Login</Link></NavItem>
    }
    let collapseState = "collapse"
    if(!this.state._collapsed) {
      collapseState = "collapse in"
    }
    return(
      <Navbar color="faded" light full>
        <Link to='/' className="navbar-brand"><div class="logo"><img class="img-fluid" src="./images/kindjobs-logo.png" /></div></Link>
        <NavbarToggler className="hidden-sm-up" data-toggle="collapse" data-target="#navbarCollapse" ref="navbarCollapser" onClick={this._toggleCollapse}/>
        <div class={"navbar-toggleable-xs " + collapseState} id="navbarCollapse" ref="navbarCollapse">
          <Nav className="pull-md-right pull-lg-right" navbar>
            {adminOrNot}
            <NavItem><Link to='/'>Home</Link></NavItem>
          </Nav>
        </div>
      </Navbar>
    )
  }
}

export default Header
