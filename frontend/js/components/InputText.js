import React from "react";

const InputText = (props) => {
  return(
    <div class="form-group">
      <label> {props.label}</label>
      <input type="text" class="form-control" ref={props.ref} onChange={props.onChange} value={props.value}></input>
      <br/>
    </div>
  )
}

export default InputText
