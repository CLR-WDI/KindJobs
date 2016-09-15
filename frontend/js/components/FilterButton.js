import React from "react";
import {connect} from "react-redux";

import {fetchFilters, editFilters} from "../actions/filterActions";

@connect((store) => {
  return {
    filters: store.filters.filters
  }
})
class FilterButton extends React.Component{
  constructor() {
    super();
    this._toggleButton = this._toggleButton.bind(this);
  }

  componentWillMount() {
    let newFilters = { ...this.props.filters }
    newFilters.employment_term[this.props._name].state = true;


    newFilters.employment_term[this.props._name].class = "btn btn-term btn-" + this.props._name + " active"

    this.props.dispatch( editFilters(newFilters) );
    // this.props.dispatch( fetchFilters() );
  }

  _toggleButton(e){
    e.preventDefault();
    let newFilters = { ...this.props.filters }
    newFilters.employment_term[this.props._name].state = !newFilters.employment_term[this.props._name].state

    if(newFilters.employment_term[this.props._name].state){
      newFilters.employment_term[this.props._name].class = "btn btn-term btn-" + this.props._name + " active"
    }else{
      newFilters.employment_term[this.props._name].class = "btn btn-term btn-" + this.props._name
    }

    this.props.dispatch( editFilters(newFilters) );
  }

  render() {
    return(
      <button
      className={this.props.filters.employment_term[this.props._name].class}
      type="button"
      onClick={this._toggleButton}>
      {this.props._title}
      </button>
    )
  }
}

export default FilterButton;
