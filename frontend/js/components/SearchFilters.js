import React from "react";
import {connect} from "react-redux";
import fakeStore from "../fakeStore"

@connect((store) => {
  var newStore = fakeStore;
  return newStore;
})
export default class SearchFilters extends React.Component {
  render() {
    return (
      <div>
        <button></button>
      </div>
    );
  }
}
