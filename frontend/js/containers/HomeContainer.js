import React from "react";
// create store
import {connect} from "react-redux"

import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";

@connect((store) => {
  me: store.users.me
})
export default class Home extends React.Component {
  componentDidMount() {
    // home page is landing page after log in, get profile of logged in user
    if( typeof this.props.me.email === "undefined" ){
      this.props.dispatch( getMe() );
    }
  }
  render() {
    let divStyle = {
      backgroundImage: 'url(./images/kindjobs-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return(
      <div>
        <div class="jumbotron home text-center" style={divStyle}>
          <h2>Come find your kind of job!</h2>
          <SearchBar />
          <h3><Link to={'/advsearch'}>Advanced Search</Link></h3>
        </div>
        <div class="container-fluid">
          <JobList _jobListName="Recent Jobs" />
        </div>
      </div>
    )
  }
}
