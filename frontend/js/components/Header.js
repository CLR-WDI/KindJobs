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
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><Link to='admin/kindjobs'>Job Postings</Link></li>
              <li><Link to='admin/applications'>Applications</Link></li>
            </ul>
          </li>
          <li><Link to='/'>Home</Link></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
