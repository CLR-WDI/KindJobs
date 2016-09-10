import React from "react";
import {Link} from "react-router";
import {Navbar, Nav} from "react-bootstrap";

const Header = (props) => {
  return(
    <Navbar staticTop fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <li><Link to='dummy'>Dummy</Link></li>
          <li><Link to='/'>Home</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
