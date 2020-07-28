import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native'
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
		backgroundColor: Platform.OS === 'android' ? colours.primary : 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Platform.OS === 'ios' ?  colours.accent : 'transparent',
		borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
	},
	title: {
		fontFamily: 'open-sans-bold',
		color: Platform.OS === 'android' ? "#fff" : colours.accent,
		fontSize: 24
	}
});

export default Header;
