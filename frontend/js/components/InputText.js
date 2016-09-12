import React from "react";

class InputText extends React.Component{
  render() {
    return(
      <div>
        <label> {this.props._label}
          <input type={this.props._type} ref="inp" onChange={this.props._updateInput} value={this.props._value}></input>
        </label>
        <br/>
      </div>
    )
  }
}


export default InputText
