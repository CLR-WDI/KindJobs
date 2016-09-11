import React from "react";
import {Link} from "react-router"

const JobCard = (props) => {
  return(
    <div className = {props.term+'Card jobCard col-lg-3 col-md-4 col-sm-6'}>
      <div class="inner">
        <img src={props.image} />
        <h4>{props.sector}</h4>
        <p>{props.title}</p>
        <Link to={'/kindjobs/'+props.id}>
          <button type="button" class="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
