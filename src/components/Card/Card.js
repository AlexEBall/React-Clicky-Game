import React from 'react';
import "./Card.css";

const Card = props => (
	<div 
		className="cardStyle"
		onClick={() => props.setClicked(props.id)}>
	    <div className="imgContainer">
	      <img
	      	className="img"
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
	    <div className="content">	
	    	{props.name}
	    </div>
  </div>
);

export default Card;
