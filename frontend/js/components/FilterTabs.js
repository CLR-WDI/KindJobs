import React from "react";
import FilterTab from "./FilterTab";

export default class FilterTabs extends React.Component{
  constructor() {
    super();

  }

  componentWillMount() {

  }

  render() {
    var sorted_list = this.props._list.sort((a, b) => { return a.name > b.name})
    console.log(sorted_list);
    let filtersList = sorted_list.map( (filter) => {
      return <FilterTab key={filter._id} _value={filter._id} _filterType={this.props._type + "_id"} _name={filter.name}/>
    })
    console.log(this.props._list);
    return (
      <div>
        <h3>{this.props._title}</h3>
        {filtersList}
      </div>
    )
  }
}
