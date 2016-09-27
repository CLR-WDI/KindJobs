import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import EditOptions from "../components/EditOptions"
import InputText from "../components/InputText"
import InputGroup from "../components/InputGroup"
import {createScope, deleteScope, fetchScopes} from "../actions/scopeActions"
import {createSector, deleteSector, fetchSectors} from "../actions/sectorActions"
import {createLocation, deleteLocation, fetchLocations} from "../actions/locationActions"
import {createTerm, fetchTerms, deleteTerm} from "../actions/termActions"
import {createSGO, fetchSGOs, deleteSGO} from "../actions/SGOActions"
// for redirect to home
import {hashHistory} from "react-router"

@connect((store) => {
  return {
    scopes: store.scopes.scopes,
    sectors: store.sectors.sectors,
    locations: store.locations.locations,
    terms: store.terms.terms,
    SGOs: store.sgos.sgos,
    admin: store.users.admin,
    jwtToken: store.users.jwtToken,
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
    this._deleteScope = this._deleteScope.bind(this);
    this._editScope = this._editScope.bind(this);
    this._deleteLocation = this._deleteLocation.bind(this);
    this._editLocation = this._editLocation.bind(this);
    this._deleteTerm = this._deleteTerm.bind(this);
    this._editTerm = this._editTerm.bind(this);
    this._deleteSGO = this._deleteSGO.bind(this);
    this._editSGO = this._editSGO.bind(this);
    this._deleteSector = this._deleteSector.bind(this);
    this._editSectorName = this._editSectorName.bind(this);
    this._editSectorIcon = this._editSectorIcon.bind(this);
  }

  componentWillMount(){
    this.props.dispatch( fetchScopes() );
    this.props.dispatch( fetchSectors() );
    this.props.dispatch( fetchLocations() );
    this.props.dispatch( fetchTerms() );
    this.props.dispatch( fetchSGOs() );
  }

  _submitSector(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.sectorName.refs.inp).value,
      image: ReactDOM.findDOMNode(this.refs.sectorImage.refs.inp).value
    }
    this.props.dispatch(createSector(form, this.props.jwtToken));
    alert( "Sector created" );
  }

  _editSectorName(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;
    var editForm = <EditOptions id={targetId} _props={this.props} _optionEdit="sector_name" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _editSectorIcon(e){
    let targetId = e.target.id;
    let sectorId = targetId.substr(5);
    let targetText = e.target.innerHTML;
    var editForm = <EditOptions _props={this.props} _optionEdit="sector_link" _id={sectorId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _deleteSector(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteSector(targetID, this.props.jwtToken) )
  }

  _submitScope(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.scopeName.refs.inp).value
    }
    this.props.dispatch(createScope(form, this.props.jwtToken));
    alert( "Scope created" );
  }

  _submitLocation(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.locationName.refs.inp).value
    }
    this.props.dispatch(createLocation(form, this.props.jwtToken));
    alert( "Location created" );
  }

  _editLocation(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;
    var editForm = <EditOptions _props={this.props} _optionEdit="location" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _deleteLocation(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteLocation(targetID, this.props.jwtToken) )
  }

  _submitTerm(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.termName.refs.inp).value
    }
    this.props.dispatch(createTerm(form, this.props.jwtToken));
    alert( "Employment term created" );
  }

  _editTerm(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;
    var editForm = <EditOptions _props={this.props} _optionEdit="term" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _deleteTerm(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteTerm(targetID, this.props.jwtToken) )
  }


  _submitSGO(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.sgoName.refs.inp).value
    }
    this.props.dispatch(createSGO(form, this.props.jwtToken));
    alert( "SGO created" );
  }

  _editSGO(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;
    var editForm = <EditOptions _props={this.props} _optionEdit="sgo" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _deleteSGO(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteSGO(targetID, this.props.jwtToken) )
  }

  _editScope(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;

    var editForm = <EditOptions _props={this.props} _optionEdit="scope" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))

  }

  _deleteScope(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteScope(targetID, this.props.jwtToken) )
  }

  render() {
    // if( !this.props.admin ){hashHistory.push({pathname: 'login'})}
    // show list of sectors and allow to edit
    let sectorsList = this.props.sectors.map( (sector) => {
      return (
          <tr key={sector._id}>
            <td onClick={this._editSectorName} id={sector._id}>{sector.name}</td>
            <td onClick = {this._editSectorIcon} id = {"link_" + sector._id}>{sector.image}</td>
            <td class={sector._id} onClick={this._deleteSector}>Delete</td>
          </tr>
        )
      })

    // show list of scopes and allow to edit
    var sortedScopes =this.props.scopes.sort((a, b) => { return a.name > b.name})
    let scopesList = sortedScopes.map( (scope) => {
      return (
          <tr key={scope._id}>
            <td onClick={this._editScope} id={scope._id}>{scope.name}</td>
            <td class={scope._id} onClick={this._deleteScope}>Delete</td>
          </tr>
        )
      })

      // show list of locations and allow to edit
      var sortedLocations =this.props.locations.sort((a, b) => { return a.name > b.name})
      let locationsList = sortedLocations.map( (location) => {
        return (
            <tr key={location._id}>
              <td onClick={this._editLocation} id={location._id}>{location.name}</td>
              <td class={location._id} onClick={this._deleteLocation}>Delete</td>
            </tr>
          )
        })
      // show list of terms and allow to edit
      var sortedTerms =this.props.terms.sort((a, b) => { return a.name > b.name})
      let termsList = sortedTerms.map( (term) => {
        return (
            <tr key={term._id}>
              <td onClick={this._editTerm} id={term._id}>{term.name}</td>
              <td class={term._id} onClick={this._deleteTerms}>Delete</td>
            </tr>
          )
        })

      // show list of SGOs and allow to edit
      var sortedSGO =this.props.SGOs.sort((a, b) => { return a.name > b.name})
      let sgosList = sortedSGO.map( (sgo) => {
        return (
            <tr key={sgo._id}>
              <td onClick={this._editSGO} id={sgo._id}>{sgo.name}</td>
              <td class={sgo._id} onClick={this._deleteSGOs}>Delete</td>
            </tr>
          )
        })

    return(
      <div class="container-fluid">
        <div class="col-md-8 col-md-offset-2">
          <h1>Create Options for Kind Jobs</h1>
          <form ref="sectorForm" onSubmit={this._submitSector}>
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
          <table>
            <thead>
              <tr>
                <th class="col-md-2">Sector Name</th>
                <th class="col-md-2">Sector Icon Link</th>
                <th class="col-md-2">Delete</th>
              </tr>
            </thead>
            <tbody>
                {sectorsList}
            </tbody>
          </table>
          <form ref="scopeForm" onSubmit={this._submitScope}>
            <InputGroup _label="Scope" ref="scopeName" _type="text" _btnText="Submit"/>
          </form>
          <table>
            <thead>
              <tr>
                <th class="col-md-2">Scope Name</th>
                <th class="col-md-2">Delete</th>
              </tr>
            </thead>
            <tbody>
                {scopesList}
            </tbody>
          </table>
          <form ref="locationForm" onSubmit={this._submitLocation}>
            <InputGroup _label="Location" ref="locationName" _type="text" _btnText="Submit"/>
          </form>
          <table>
            <thead>
              <tr>
                <th class="col-md-2">Location Name</th>
                <th class="col-md-2">Delete</th>
              </tr>
            </thead>
            <tbody>
                {locationsList}
            </tbody>
          </table>
          <form ref="termForm" onSubmit={this._submitTerm}>
            <InputGroup _label="Employment Term" ref="termName" _type="text" _btnText="Submit"/>
          </form>
          <table>
            <thead>
              <tr>
                <th class="col-md-2">Employment Term</th>
                <th class="col-md-2">Delete</th>
              </tr>
            </thead>
            <tbody>
                {termsList}
            </tbody>
          </table>
          <form onSubmit={this._submitSGO}>
            <InputGroup _label="SGO" ref="sgoName" _type="text" _btnText="Submit"/>
          </form>
          <table>
            <thead>
              <tr>
                <th class="col-md-2">SGO Name</th>
                <th class="col-md-2">Delete</th>
              </tr>
            </thead>
            <tbody>
                {sgosList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
