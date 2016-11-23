import React from "react";
var AutosizeInput = require('react-input-autosize');

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
    this._resizeInput = this._resizeInput.bind(this);

    this.state = {
      minWidth: 104,
      inputWidth: 1,
      inputValue: ""
    }
  }
  componentWillMount() {
    this.setState({inputWidth: this.state.minWidth});
  }

  _resizeInput() {
    let newInputValue = {};
    let newWidth;
    newInputValue = ReactDOM.findDOMNode(this.refs.search).value;
    this.setState({inputValue: newInputValue})
    newWidth = ReactDOM.findDOMNode(this.refs.sizer).scrollWidth + 42;
    this.setState({inputWidth: this.state.minWidth});
    if(newWidth > this.state.minWidth) {
      this.setState({inputWidth: newWidth})
    }
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
    let sizerValue = this.state.inputValue;
    let inputStyle = {
      width: this.state.inputWidth + 'px'
    }
    let sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };
    return (
      <form onSubmit = {this._sendSearch}>
        <div className="searchbar" style={inputStyle}>

          <i class="search-icon fa fa-search"></i>
          <input
          type="text"
          ref="search"
          className="form-control"
          placeholder="Search"
          onChange={this._resizeInput}
          />
        <div class="search-sizer" ref="sizer" style={sizerStyle}>{sizerValue}</div>
        </div>
      </form>
    );
  }
}
