import React from 'react';

const Player = props => (
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
		margin: '0.7rem'
	},
	imgContainer: {
		height: '16rem',
		width: '10rem',
		textAlign: 'center'
	},
	img: {
		height: '100%',
		width: '100%'
	}
};

export default Player;
