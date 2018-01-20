import React from 'react';

const Card = props => (
	<div 
		style={styles.cardStyle}
		onClick={() => props.setClicked(props.id)}>
	    <div style={styles.imgContainer}>
	      <img
	      	style={styles.img}
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
  </div>
);

const styles = {
	cardStyle: {
	// 	background: '#fff',
	// 	borderRadius: '2px',
	// 	height: '325px',
		margin: '0.7rem'
	// 	position: 'relative',
	// 	width: '225px',
	// 	boxShadow: '0 3px 6px #999, 0 3px 6px #999',
	// 	textAligh: 'left'
	},
	imgContainer: {
		height: '16rem',
		width: '10rem',
		// overflow: 'hidden',
		textAlign: 'center',
		// background: '#6caddc'
	},
	img: {
		height: '100%',
		width: '100%'
	}
};

export default Card;
