import React from "react";
import {Link} from "react-router";
import {Navbar, Nav} from "react-bootstrap";

const Header = (props) => {
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
          <li><Link to='admin/kindjobs'>Admin</Link></li>
          <li><Link to='/'>Home</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
