import React from "react";
import SearchBar from "../components/SearchBar";
import JobList from "../components/JobList";
import {Link} from "react-router";


export default class Home extends React.Component {
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
