import React from "react";
import {Link} from "react-router"

const JobCard = (props) => {
  return(
    <div className = {props.term+'Card jobCard'}>
      <img src={props.image} />
      <h4>{props.sector}</h4>
      <p>{props.title}</p>
      <Link to={'/kindjobs/'+props.id}>
        <button type="button">Details</button>
      </Link>
    </div>
  )
}

export default JobCard
