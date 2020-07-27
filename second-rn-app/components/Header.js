import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import colours from '../constants/colours';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>
				{props.title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: colours.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: '#fff',
		fontSize: 24
	}
});

export default Header;
