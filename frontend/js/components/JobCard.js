import React from "react";
import {Link} from "react-router";

const JobCard = (props) => {
  let description = props.description.substr(0,90);
  console.log(description);
  return(
    <div className = {'jobCard '+props.term+' col-md-4 col-sm-6'}>
      <div class="inner">
        <h1><i class={"jobicon icon-"+props.image}></i></h1>
        <h4>{props.sector}</h4>
        <p>{props.title}</p>
        <p>{description}</p>
        <Link to={'/kindjobs/'+props.id}>
          <button type="button" class="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
