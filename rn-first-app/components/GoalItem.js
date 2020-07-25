import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = (props) => {
	return (
		<View style={styles.listItems} >
			<Text >{props.item}</Text>
		</View> 
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	listItems: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});