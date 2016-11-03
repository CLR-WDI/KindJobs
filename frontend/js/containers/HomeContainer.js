// bring in react module
import React from "react";

// allow to move between different routes
import {Link} from "react-router";

// allows connection to store
import {connect} from "react-redux"

//actions for users
import {getMe} from "../actions/userActions"

// import components
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";


@connect((store) => {
  return{me: store.users.me}
})
export default class Home extends React.Component {
  componentDidMount() {
    // home page is landing page after log in, get profile of logged in user
    // the set time out was to work around a bug found when running on the heroku server the race conditions resulted in the page loading before the backend server came back with the details of the user logged in
    if( this.props.me === null || typeof this.props.me.email === "undefined" ){
      setTimeout(function() {
        this.props.dispatch( getMe() );
      }.bind(this), 500 )
    }
  }
  render() {
    let heroStyle = {
      position: 'relative',
      width: '100%',
      backgroundImage: 'url(./images/kindjobs-bg-main.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
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
