import React from 'react';
import { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = (props) => {
	const [inputText, setInputText] = useState('');

	const handleInput = (input) => {
		setInputText(input);
	};

	return (
		<View style={styles.row}>
			<TextInput 
				style={styles.input}
				placeholder="course goals"
				onChangeText={handleInput}
				value={inputText}
			/>
			<Button 
				title="ADD" 
				onPress={() => props.handleAdd(inputText)}
			/>
		</View>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 5,
		width: '80%'
	},
	row: {
		flexDirection: 'row', 
		justifyContent: 'space-between',	// Align is for opposite of main axis
		alignItems: 'center'
	},
});
