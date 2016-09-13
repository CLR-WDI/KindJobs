import React from "react";

// for redirect
import * as ReactRouter from 'react-router';
let HashHistory = ReactRouter.hashHistory;

// for refs
import ReactDOM from 'react-dom';


export default class SearchBar extends React.Component {
  constructor(){
    super();
    this._sendSearch = this._sendSearch.bind(this);
  }

  _sendSearch(e) {
    e.preventDefault();
    HashHistory.push({
      pathname: 'results',
      query: {
        search: ReactDOM.findDOMNode(this.refs.search).value
      }
    })
    if(this.props._jobListName === "Results") {
      this.props.dispatch( fetchKindJobs( 'keyword=' + ReactDOM.findDOMNode(this.refs.search).value ) );
    }
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
            <button className="btn btn-default" type="submit">Find it!</button>
          </span>
        </div>
      </form>
    );
  }
}
