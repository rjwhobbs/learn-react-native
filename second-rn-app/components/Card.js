import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
	return (
		<View style={{...styles.card, ...props.style}}>
			{props.children}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		shadowColor: '#4f7790',
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
		shadowOpacity: 0.5,
		backgroundColor: 'white',  //Background defualts to transparent
		elevation: 5, // Only android, android doesn't take shadow attributes
		padding: 10,
		borderRadius: 7
	},
});

export default Card;
