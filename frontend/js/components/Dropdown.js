import React from "react";
import {FormControl} from "react-bootstrap";

class Dropdown extends React.Component{

  render() {
    console.log(this.props._list);
    let listOptions = this.props._list.map( (listoption) => {
      return <option key={listoption._id} value={listoption._id}>{listoption.name}</option>
    })
    return(
      <div class="form-group">
        {this.props._label}
        <FormControl componentClass="select" ref="inp" placeholder="SGO">
          {listOptions}
        </FormControl>
      </div>

    )
  }
}


export default Dropdown
