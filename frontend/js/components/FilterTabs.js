import React from "react";
import FilterTab from "./FilterTab";

export default class FilterTabs extends React.Component{
  constructor() {
    super();
    this.state={filterStyle: "hide-filters",
                chevronState: "fa-chevron-down" };
    this._toggleFilters = this._toggleFilters.bind(this);

  }

  _toggleFilters(e){
    e.preventDefault;
    console.log("hideFilters clicked");
    if (this.state.filterStyle === "hide-filters") {
      this.setState({filterStyle: "show-filters", chevronState: "fa-chevron-up"});
    }else{
      this.setState({filterStyle: "hide-filters", chevronState: "fa-chevron-down"});
    }
  }

  render() {
    var sorted_list = this.props._list.sort((a, b) => { return a.name > b.name})
    let filtersList = sorted_list.map( (filter) => {
      return <FilterTab key={filter._id} _value={filter._id} _filterType={this.props._type + "_id"} _name={filter.name}/>
    })
    return (
      <div>
        <h4 style={{cursor: 'pointer'}} onClick={this._toggleFilters} >{this.props._title}<i style={{cursor: 'pointer'}} onClick={this._toggleFilters} class={"fa " + this.state.chevronState}></i></h4>

        <div class={this.state.filterStyle}>
          {filtersList}
        </div>
      </div>
    )
  }
}
