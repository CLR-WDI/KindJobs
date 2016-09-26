import React from "react";
import {Link} from "react-router";

const JobCard = (props) => {
  let description = props.description.substr(0,90);
  console.log(description);
  return(
    <div className = {'jobCard '+props.term+' col-md-4 col-sm-6'}>
      <div class="card card-block">
        <i class={"jobicon icon-"+props.image}></i>
        <div class="content">
          <h3 class="card-title">{props.title}</h3>
          <h4><Tag class="label">{props.sector}</Tag></h4>
          <p class="card-text">{description}</p>
        </div>
        <Link to={'/kindjobs/'+props.id}>
          <button type="button" class="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
