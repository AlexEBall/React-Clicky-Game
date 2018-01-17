import React from "react";

const Title = props => <h1 style={styles.title}>{props.children}</h1>;

const styles = {
	title: {
	  width: '100%',
	  textAlign: 'center',
	  fontSize: '3rem',
	  textDecoration: 'underline',
	  color: '#2A77AE',
	  marginBottom: '50px'
	}
}
export default Title;