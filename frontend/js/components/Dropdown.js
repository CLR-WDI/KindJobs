import React from "react";
import {FormControl} from "react-bootstrap";

class Dropdown extends React.Component{

  render() {
    let sgoOptions = this.props._sgo_list.map( (sgo) => {
      return <option key={sgo._id} value={sgo._id}>{sgo.SGO_name}</option>
    })
    console.log("the sgos in this dropdown are ", this.props._sgo_list);
    return(
      <div class="form-group">
        {this.props._label}
        <FormControl componentClass="select" ref="inp" placeholder="SGO">
        {sgoOptions}
        </FormControl>
      </div>

    )
  }
}


export default Dropdown
