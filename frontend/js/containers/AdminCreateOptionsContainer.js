import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import EditOptions from "../components/EditOptions"
import InputText from "../components/InputText"
import InputGroup from "../components/InputGroup"
import {createScope, deleteScope, fetchScopes} from "../actions/scopeActions"
import {createSector, fetchSectors} from "../actions/sectorActions"
import {createLocation} from "../actions/locationActions"
import {createTerm} from "../actions/termActions"
import {createSGO} from "../actions/SGOActions"
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
  }

  componentWillMount(){
    this.props.dispatch( fetchScopes() );
    this.props.dispatch( fetchSectors() );
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

  _submitTerm(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.termName.refs.inp).value
    }
    this.props.dispatch(createTerm(form, this.props.jwtToken));
    alert( "Employment term created" );
  }

  _submitSGO(e) {
    e.preventDefault();
    let form = {
      name: ReactDOM.findDOMNode(this.refs.sgoName.refs.inp).value
    }
    this.props.dispatch(createSGO(form, this.props.jwtToken));
    alert( "SGO created" );
  }

  _editScope(e){
    let targetId = e.target.id;
    let targetText = e.target.innerHTML;
    console.log("the default text should be ", targetText);
    console.log("the name of the scope is ", this.props.scopes);

    var editForm = <EditOptions _optionEdit="scope" _id={targetId} _token={this.props.jwtToken} _defaultValue = {targetText}/>
    ReactDOM.render(editForm, document.getElementById(targetId))


  }

  _deleteScope(e){
    let targetID = e.target.className;
    this.props.dispatch( deleteScope(targetID, this.props.jwtToken) )
  }

  render() {
    if( !this.props.admin ){hashHistory.push({pathname: 'login'})}
    console.log("the scopes are ", this.props.scopes);
    let sectorsList = this.props.sectors.map( (sector) => {
      return (
          <tr key={sector._id}>
            <td class={sector._id}>{sector.name}</td>
            <td>{sector.image}</td>
            <td>Delete</td>
          </tr>
        )
      })
    let scopesList = this.props.scopes.map( (scope) => {
      return (
          <tr key={scope._id}>
            <td onClick={this._editScope} id={scope._id}>{scope.name}</td>
            <td class={scope._id} onClick={this._deleteScope}>Delete</td>
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
                <th class="col-md-2">Sectore Name</th>
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
          <form ref="termForm" onSubmit={this._submitTerm}>
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
