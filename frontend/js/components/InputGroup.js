import React from "react";

class InputGroup extends React.Component{
  render() {
    return(
      <div>
        <label>{this.props._label}</label>
        <div class="input-group">
          <input type={this.props._type} class="form-control" ref="inp" defaultValue={this.props._default}></input>
          <span class="input-group-btn">
            <button class="btn btn-primary" type="submit">{this.props._btnText}</button>
          </span>
        </div>
      </div>
    )
  }
}


export default InputGroup
