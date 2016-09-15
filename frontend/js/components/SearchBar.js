import React from "react";

// for redirect
import * as ReactRouter from 'react-router';
let HashHistory = ReactRouter.hashHistory;

// for refs
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {fetchKindJobs} from "../actions/kindjobActions";

@connect((store) => {
  return {
    kindjobs: store.kindjobs.kindjobs
  }
})
export default class SearchBar extends React.Component {
  constructor(){
    super();
    this._sendSearch = this._sendSearch.bind(this);
  }

  _sendSearch(e) {
    e.preventDefault();
    this.props.dispatch( fetchKindJobs( 'keyword=' + (ReactDOM.findDOMNode(this.refs.search).value).toLowerCase() ) );
    HashHistory.push({
      pathname: 'results',
      query: {
        search: ReactDOM.findDOMNode(this.refs.search).value
      }
    })
  }

  render() {
    return (
      <form onSubmit = {this._sendSearch}>
        <div className="col-md-8 col-md-offset-2 input-group boxShadow">
          <input
          type="text"
          ref="search"
          className="form-control"
          placeholder="Search"
          />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit"><i class="fa fa-search"></i></button>
          </span>
        </div>
      </form>
    );
  }
}
