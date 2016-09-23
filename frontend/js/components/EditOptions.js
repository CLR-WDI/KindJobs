import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import InputText from "../components/InputText"
import InputGroup from "../components/InputGroup"
import {editScope} from "../actions/scopeActions"
import {createSector, fetchSectors} from "../actions/sectorActions"
import {createLocation} from "../actions/locationActions"
import {createTerm} from "../actions/termActions"
import {createSGO} from "../actions/SGOActions"

export default class EditOptions extends React.Component {
  constructor(props) {
    super(props)
    this._updateOption = this._updateOption.bind(this)
  }

  _updateOption(e){
    e.preventDefault();
    const targetId = this.props._id
    let form = {
      name: ReactDOM.findDOMNode(this.refs.updateOption.refs.inp).value
    }
    this.props._props.dispatch( editScope(targetId, form, this.props._token)  );
  }

  render() {

    return(
      <div>
      <form ref="updateForm" onSubmit={this._updateOption}>
        <InputGroup _label="field" ref="updateOption" _type="text" _btnText="Submit" _default={this.props._defaultValue}/>
      </form>
      </div>
    )
  }
}
