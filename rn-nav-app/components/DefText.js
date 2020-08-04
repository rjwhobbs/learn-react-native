import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
} from 'react-native';	
	
const DefText = (props) => {	
	return (	
		<Text style={styles.container}>
			{props.children}	
		</Text>	
	);	
}	
	
const styles = StyleSheet.create({
	container: {
		fontFamily: 'open-sans'
	}	
});	
	
export default DefText;