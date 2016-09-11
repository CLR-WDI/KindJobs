import React from "react";

class InputText extends React.Component{
  render() {
    return(
      <div>
        <label> {this.props.label}
          <input type="text" ref={this.props.ref} onChange={this.props.onChange} value={this.props.value}></input>
        </label>
        <br/>
      </div>
    )
  }
}


export default InputText
