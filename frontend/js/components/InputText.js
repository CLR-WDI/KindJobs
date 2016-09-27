import React from "react";

class InputText extends React.Component{
  render() {
    return(
      <div class="form-group">
        <label>{this.props._label}</label>
        <input type={this.props._type} class="form-control" ref="inp" defaultValue={this.props._default} placeholder={this.props._default}></input>
      </div>
    )
  }
}


export default InputText
