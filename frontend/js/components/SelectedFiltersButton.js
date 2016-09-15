import React from "react";
import {connect} from "react-redux";

import {editFilters} from "../actions/filterActions";

@connect((store) => {
  return {
    filters: store.filters.filters,
  }
})
export default class SelectedFiltersButton extends React.Component {
  constructor() {
    super();

    this._getKeyByValue = this._getKeyByValue.bind(this)
    this._removeFilter = this._removeFilter.bind(this)
  }

  _getKeyByValue(obj, val) {
    return Object.keys(obj).find(key => obj[key] === val);
  }

  _removeFilter(e) {
    e.preventDefault();
    let deleteFilters = { ...this.props.filters }
    let criteriaType = this._getKeyByValue(deleteFilters.criteria, this.props._id);
    console.log("the criteria type is ", criteriaType);
    delete deleteFilters.criteria[criteriaType];
    delete deleteFilters.criteriaName[this.props._id];
    console.log(this.props.filters);
    this.props.dispatch( editFilters(deleteFilters) );
  }

  render() {
    return(
      <button class="btn btn-default" id={this.props._id} onClick={this._removeFilter}>{this.props._name = "x"}</button>
    )
  }
}
