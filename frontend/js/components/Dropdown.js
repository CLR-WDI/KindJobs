import React from "react";
import {FormControl} from "react-bootstrap";

class Dropdown extends React.Component{

  render() {
    var sorted_list =this.props._list.sort((a, b) => { return a.name > b.name})
    let listOptions = sorted_list.map( (listoption) => {
      return <option key={listoption._id} selected={listoption._id === this.props._default} value={listoption._id}>{listoption.name}</option>
    })
    return(
      <div class="form-group">
        {this.props._label}
        <FormControl componentClass="select" ref="inp">
          {listOptions}
        </FormControl>
      </div>

    )
  }
}


export default Dropdown
