import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux"
import {Link} from "react-router"
import InputText from "../components/InputText"
import InputGroup from "../components/InputGroup"
import {editScope} from "../actions/scopeActions"
import {editSector} from "../actions/sectorActions"
import {editLocation} from "../actions/locationActions"
import {editTerm} from "../actions/termActions"
import {editSGO} from "../actions/SGOActions"

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

    let image = {
      image: ReactDOM.findDOMNode(this.refs.updateOption.refs.inp).value
    }
    if (this.props._optionEdit === "sector_name") {
        this.props._props.dispatch( editSector(targetId, form, this.props._token)  );
    } else if (this.props._optionEdit === "sector_link") {
        console.log(image);
        this.props._props.dispatch( editSector(targetId, image, this.props._token)  )
    } else if (this.props._optionEdit === "scope") {
        this.props._props.dispatch( editScope(targetId, form, this.props._token)  );
    } else if (this.props._optionEdit === "location") {
        this.props._props.dispatch( editLocation(targetId, form, this.props._token)  );
    } else if (this.props._optionEdit === "term") {
        this.props._props.dispatch( editTerm(targetId, form, this.props._token)  );
    } else if (this.props._optionEdit === "sgo") {
        this.props._props.dispatch( editSGO(targetId, form, this.props._token)  );
    }

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
