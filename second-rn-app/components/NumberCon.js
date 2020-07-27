import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colours from '../constants/colours';

const NumberCon = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{props.children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: colours.accent,
		padding: 10,
		borderRadius: 7,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	number: {
		color: colours.accent,
		fontSize: 22
	}
});

export default NumberCon;
