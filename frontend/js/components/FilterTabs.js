import React from "react";
import FilterTab from "./FilterTab";

export default class FilterTabs extends React.Component{
  constructor() {
    super();
    this.state={filterStyle: "hide-filters",
                chevronState: "icon-ios-arrow-down" };
    this._toggleFilters = this._toggleFilters.bind(this);

  }

  _toggleFilters(e){
    e.preventDefault;
    if (this.state.filterStyle === "hide-filters") {
      this.setState({filterStyle: "show-filters", chevronState: "icon-ios-arrow-up"});
    }else{
      this.setState({filterStyle: "hide-filters", chevronState: "icon-ios-arrow-down"});
    }
  }

  render() {
    var sorted_list = this.props._list.sort((a, b) => { return a.name > b.name})
    let filtersList = sorted_list.map( (filter) => {
      return <FilterTab key={filter._id} _value={filter._id} _filterType={this.props._type + "_id"} _name={filter.name}/>
    })
    return (
      <div>
        <h4 style={{cursor: 'pointer'}} onClick={this._toggleFilters} >{this.props._title}<i style={{cursor: 'pointer'}} onClick={this._toggleFilters} class={"pull-right toggle-chevron " + this.state.chevronState}></i></h4>

        <div class={this.state.filterStyle}>
          {filtersList}
        </div>
      </div>
    )
  }
}
