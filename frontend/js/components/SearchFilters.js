import React from "react";
import {connect} from "react-redux"
import FilterTabs from "./FilterTabs";
import SelectedFilters from "./SelectedFilters";
import {fetchScopes, deleteScope, editScope, createScope} from "../actions/scopeActions"
import {fetchSectors, deleteSector, editSector, createSector} from "../actions/sectorActions"
import {fetchLocations, deleteLocation, editLocation, createLocation} from "../actions/locationActions"
// for redirect to home

@connect((store) => {
  return {
    scopes: store.scopes.scopes,
    sectors: store.sectors.sectors,
    locations: store.locations.locations
  }
})
export default class SearchFilters extends React.Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.dispatch( fetchLocations() );
    this.props.dispatch( fetchSectors() );
    this.props.dispatch( fetchScopes() );
  }

  render() {
    return (
      <div>
        <SelectedFilters />
        <h3>Search Filters</h3>
        <div class="divider-horizontal"></div>
        <FilterTabs _title="Scope" _type="scope" _list={this.props.scopes}/>
        <div class="divider-horizontal"></div>
        <FilterTabs _title="Sector" _type="sector" _list={this.props.sectors}/>
        <div class="divider-horizontal"></div>
        <FilterTabs _title="Location" _type="location" _list={this.props.locations}/>
      </div>
    );
  }
}
