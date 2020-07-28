import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native'
import colours from '../constants/colours';

const Header = (props) => {
	return (
		<View 
			style={{
				...styles.header, 
				...Platform.select({
					ios: styles.iosHeader, 
					android: styles.androidHeader})
				}}
		>
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
		alignItems: 'center',
		justifyContent: 'center',
	},
	iosHeader: {
		backgroundColor: 'white',
		borderBottomColor: colours.accent,
		borderBottomWidth: 1 
	},
	androidHeader: {
		backgroundColor: colours.primary 
	},
	title: {
		fontFamily: 'open-sans-bold',
		color: Platform.OS === 'android' ? "#fff" : colours.accent,
		fontSize: 24
	}
});

export default Header;
