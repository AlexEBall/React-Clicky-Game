import React from "react";

const Wrapper = props => <div style={styles.wrapper}>{props.children}</div>;

const styles = {
	wrapper: {
	  paddingTop: '50px',
	  background: '#ECEFF1',
	  height: '100%',
	  display: 'flex',
	  flexDirection: 'row wrap',
	  padding: '20px',
	  justifyContent: 'space-around',
	  alignItems: 'flex-start',
	  overflow: 'auto'
	}
}

export default Wrapper;