import React from "react";

const InputText = (props) => {
  return(
    <div>
      <label> {props.label}
        <input type="text" ref={props.ref} onChange={props.onChange} value={props.value}></input>
      </label>
      <br/>
    </div>
  )
}

export default InputText
