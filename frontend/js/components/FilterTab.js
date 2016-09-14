import React from "react";
import {connect} from "react-redux";

import {editFilters} from "../actions/filterActions";

@connect((store) => {
  return {
    filters: store.filters.filters
  }
})

export default class FilterTab extends React.Component{
  constructor() {
    super();
    this._addFilter = this._addFilter.bind(this);
  }

  componentWillMount() {

  }

  _addFilter(e){
    e.preventDefault();
    let selectedFilters = { ...this.props.filters };
    selectedFilters.criteria[this.props._filterType] = this.props._value;
    selectedFilters.criteriaName[this.props._value] = this.props._name;
    this.props.dispatch( editFilters(selectedFilters) );


  }

  render() {
    return <button ref="tab" class="btn btn-default" key={this.props.key} value={this.props.key} onClick={this._addFilter}>{this.props._name}</button>
  }
}
