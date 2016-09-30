import React from "react";
import {Link} from "react-router";

const JobCard = (props) => {
  let description = props.description.substr(0,90);
  return(
    <div className = {'jobCard '+props.term+' col-md-4 col-sm-6'}>
      <div class="inner">
        <i class={"jobicon icon-"+props.image}></i>
        <div class="content">
          <h3>{props.title}</h3>
          <h4><span class="label">{props.sector}</span></h4>
          <p>{description}</p>
        </div>
        <Link to={'/kindjobs/'+props.id}>
          <button type="button" class="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
