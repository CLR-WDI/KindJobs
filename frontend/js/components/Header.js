import React from "react";
import {Link} from "react-router";
import {Navbar, Nav, NavDropdown, MenuItem} from "react-bootstrap";

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
          <NavDropdown eventKey="4" title="Admin" id="nav-dropdown">
            <li><Link to='admin/kindjobs'>Job Postings</Link></li>
            <li><Link to='admin/applications'>Applications</Link></li>
          </NavDropdown>
          <li><Link to='/'>Home</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
