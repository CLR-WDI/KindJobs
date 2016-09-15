import React from "react";
import {connect} from "react-redux";
import SelectedFiltersButton from "./SelectedFiltersButton"

import {fetchFilters} from "../actions/filterActions";

@connect((store) => {
  return {
    filters: store.filters.filters,
  }
})
export default class SelectedFilters extends React.Component{
  constructor() {
    super();

  }
  componentWillMount(){
    this.props.dispatch( fetchFilters() );
  }

  render() {
    let filterCriteria = this.props.filters;
    let criteriaList = Object.keys(filterCriteria.criteria).map( (k) => filterCriteria.criteria[k] );
    let listOfFilters = criteriaList.map( (item) => {
      return <SelectedFiltersButton key={item} _id={item} _name={filterCriteria.criteriaName[item]} />
    })
    let title = null;
    if (criteriaList.length > 0) {
      title = <h4>Selected Filters</h4>;
    }
    return(
      <div>
        {title}
        {listOfFilters}
      </div>
    )
  }
}
