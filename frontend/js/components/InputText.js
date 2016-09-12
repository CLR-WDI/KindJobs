import React from "react";

class InputText extends React.Component{
  render() {
    return(
      <div class="form-group">
        <label> {this.props._label}
          <input type={this.props._type} class="form-control" ref="inp" defaultValue={this.props._default}></input>
        </label>
        <br/>
      </div>
    )
  }
}


export default InputText
