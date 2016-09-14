import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import InputText from "../components/InputText"
import InputGroup from "../components/InputGroup"
import {fetchScopes, deleteScope, editScope, createScope} from "../actions/scopeActions"
import {fetchSectors, deleteSector, editSector, createSector} from "../actions/sectorActions"
import {fetchLocations, deleteLocation, editLocation, createLocation} from "../actions/locationActions"
import {fetchTerms, deleteTerm, editTerm, createTerm} from "../actions/termActions"
import {fetchSGOs, deleteSGO, editSGO, createSGO} from "../actions/SGOActions"
// for redirect to home
import {hashHistory} from "react-router"

@connect((store) => {
  return {
    scopes: store.scopes.scopes,
    sectors: store.sectors.sectors,
    locations: store.locations.locations,
    terms: store.terms.terms,
    SGOs: store.sgos.sgos

  }
})
export default class AdminCreateOptionsContainer extends React.Component {
  constructor(){
    super();
    this._submitSector = this._submitSector.bind(this);
    this._submitScope = this._submitScope.bind(this);
    this._submitLocation = this._submitLocation.bind(this);
    this._submitTerm = this._submitTerm.bind(this);
    this._submitSGO = this._submitSGO.bind(this);
  }

  _submitSector(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.sectorName.refs.inp).value,
      image: ReactDOM.findDOMNode(this.refs.sectorImage.refs.inp).value
    }
    this.props.dispatch(createSector(form));
    alert( "Sector created" );
  }

  _submitScope(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.scopeName.refs.inp).value
    }
    this.props.dispatch(createScope(form));
    alert( "Scope created" );
  }

  _submitLocation(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.locationName.refs.inp).value
    }
    this.props.dispatch(createLocation(form));
    alert( "Location created" );
  }

  _submitTerm(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.termName.refs.inp).value
    }
    this.props.dispatch(createTerm(form));
    alert( "Employment term created" );
  }

  _submitSGO(e) {
    e.preventDefault();
    console.log("submit sgo clicked");
    let form = {
      name: ReactDOM.findDOMNode(this.refs.sgoName.refs.inp).value
    }
    this.props.dispatch(createSGO(form));
    alert( "SGO created" );
  }

  render() {
    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <h1>Create Options for Kind Jobs</h1>
          <form onSubmit={this._submitSector}>
            <div class="row">
              <div class="col-md-6">
                <InputText _label="Sector" ref="sectorName" _type="text"/>
              </div>
              <div class="col-md-6">
                <InputText _label="Sector Icon" ref="sectorImage" _type="text"/>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
          <form onSubmit={this._submitScope}>
            <InputGroup _label="Scope" ref="scopeName" _type="text" _btnText="Submit"/>
          </form>
          <form onSubmit={this._submitLocation}>
            <InputGroup _label="Location" ref="locationName" _type="text" _btnText="Submit"/>
          </form>
          <form onSubmit={this._submitTerm}>
            <InputGroup _label="Employment Term" ref="termName" _type="text" _btnText="Submit"/>
          </form>
          <form onSubmit={this._submitSGO}>
            <InputGroup _label="SGO" ref="sgoName" _type="text" _btnText="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
