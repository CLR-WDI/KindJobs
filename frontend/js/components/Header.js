import React from "react";
import {Link} from "react-router"

const Header = (props) => {
  return(
    <header>
      <p>This is the header Bar</p>
      <nav>
        <ul>
          <Link to='dummy'>
            <li>Dummy</li>
          </Link>
          <Link to='/'>
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header 
