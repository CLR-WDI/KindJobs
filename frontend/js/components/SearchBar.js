import React from "react";
import {connect} from "react-redux"
import {onSubmitSearch, onTypeSearch} from "../actions/kindjobActions"

@connect((store) => {
  return{
    inputText: "Input text" // store.search.inputText
  }
})
export default class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit = {onSubmitSearch}>
        <div className="col-md-8 col-md-offset-2 input-group boxShadow">
          <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange = {onTypeSearch}
          value = {this.props.inputText}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Find it!</button>
          </span>
        </div>
      </form>
    );
  }
}
