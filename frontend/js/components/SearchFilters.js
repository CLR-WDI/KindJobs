import React from "react";
import {connect} from "react-redux";
import fakeStore from "../fakeStore"

@connect((store) => {
  var newStore = fakeStore;
  return newStore;
})
export default class SearchFilters extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button></button>
      </div>
    );
  }
}
