import React from 'react';

const Card = props => {
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
	    <div>
	      <ul style={styles.ulContent}>
	        <li style={styles.liContent}>
	          <strong>Name:</strong> {props.name}
	        </li>
	        <li style={styles.liContent}>
	          <strong>Occupation:</strong> {props.occupation}
	        </li>
	        <li style={styles.liContent}>
	          <strong>Location:</strong> {props.location}
	        </li>
	      </ul>
	    </div>
  </div>
}

const styles = {
	cardStyle: {
		background: '#fff',
		borderRadius: '2px',
		height: '325px',
		margin: '1rem',
		position: 'relative',
		width: '325px',
		boxShadow: '0 3px 6px #999, 0 3px 6px #999',
		textAligh: 'left'
	},
	imgContainer: {
		height: '60%',
		overflow: 'hidden',
		textAlign: 'center',
		background: '#6caddc'
	},
	img: {
		width: '60%'
	},
	ulContent: {
		paddingLeft: '1rem',
		paddingRight: '1rem',
		fontSize: '15px'
	},
	liContent: {
		marginTop: '18px'
	}
};

export default Card;
