import React from "react";
// create store
import {connect} from "react-redux"

import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";
import {getMe} from "../actions/userActions" //actions for users

@connect((store) => {
  return{me: store.users.me}
})
export default class Home extends React.Component {
  componentDidMount() {
    // home page is landing page after log in, get profile of logged in user
    if( this.props.me === null || typeof this.props.me.email === "undefined" ){
      setTimeout(function() {
        this.props.dispatch( getMe() );
      }.bind(this), 500 )
    }
  }
  render() {
    let heroStyle = {
      backgroundImage: 'url(./images/kindjobs-bg-main.jpg)',
      backgroundSize: 'cover',
      background-attachment: fixed,
      background-position: center,
    };
    return(
      <div>
        <div class="jumbotron home text-center" style={ heroStyle }>
          <h1>Come find your kind of job!</h1>
          <SearchBar />
          <Link class="btn btn-primary-dark-ghost btn-adv-search" to={'/advsearch'}>Advanced Search</Link>
        </div>
        <div class="container-fluid">
          <JobList _jobListName="Recent Jobs" />
        </div>
      </div>
    )
  }
}
