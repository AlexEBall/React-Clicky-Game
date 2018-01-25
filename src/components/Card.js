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
	    <div style={styles.content}>
	    	<ul>
	    		<li>{props.name}</li>
	    	</ul>
	    </div>
  </div>
);

const styles = {
	cardStyle: {
		background: '#fff',
		margin: '0.7rem',
		borderRadius: '0.2rem',
		margin: '1rem',
		position: 'relative',
		width: '32.5rem',
		boxShadow: '0 .3rem .6rem #999',
		textAlign: 'left'
	},
	imgContainer: {
		height: '16rem',
		width: '10rem',
		textAlign: 'center',
		overflow: 'hidden'
	},
	img: {
		// height: '100%',
		width: '60%'
	},
	content: {
		paddingLeft: '1rem',
		paddingRight: '1rem',
		fontSize: '1.5rem'
	}
};

export default Card;
