import React from 'react';
import {View, StyleSheet, Text, TextInput, Button, ImagePropTypes} from 'react-native';
import colours from '../constants/colours';

const Input = (props) => {
	return (
		<TextInput 
			{...props} 
			style={{...styles.input, ...props.style}}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: colours.accent,
		borderBottomWidth: 1,
		marginVertical: 10
	}
});

export default Input;
