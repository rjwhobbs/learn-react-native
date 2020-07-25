import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableOpacity onPress={props.handleDelete}>
			<View style={styles.listItems} >
				<Text >{props.item}</Text>
			</View> 
		</TouchableOpacity>
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