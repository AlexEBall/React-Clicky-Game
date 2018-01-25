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
	    	<ul>
	    		<li>{props.name}</li>
	    	</ul>
	    </div>
  </div>
);

// const styles = {
// 	cardStyle: {
// 		background: '#f8f5de',
// 		backgroundImage : 'linear-gradient(to right, rgba(255, 210, 0, 0.4), rgba(200, 160, 0, 0.1) 11%, rgba(0, 0, 0, 0) 35%, rgba(200, 160, 0, 0.1) 65%))',
// 		margin: '0.7rem',
// 		borderRadius: '0.2rem',
// 		position: 'relative',
// 		width: '32.5rem',
// 		boxShadow: 'inset 0 0 75 px rgba(255, 210, 0, 0.3), inset 0 0 20 px rgba(255, 210, 0, 0.4), inset 0 0 30 px rgba(220, 120, 0, 0.8)',
// 		textAlign: 'left',
// 		color: 'rgba(0, 0, 0, 0.5)',
// 		letterSpacing: '0.05rem',
// 		lineHeight: '1.8',
// 		// padding: '5rem 
// 	},
// 	imgContainer: {
// 		height: '16rem',
// 		width: '100%',
// 		textAlign: 'center',
// 		overflow: 'hidden'
// 	},
// 	img: {
// 		// height: '100%',
// 		width: '60%'
// 	},
// 	content: {
// 		paddingLeft: '1rem',
// 		paddingRight: '1rem',
// 		fontSize: '1.5rem'
// 	}
// };

export default Card;
