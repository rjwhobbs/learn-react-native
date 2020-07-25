import React from 'react';
import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = (props) => {
	const [inputText, setInputText] = useState('');

	const handleInput = (input) => {
		setInputText(input);
	};

	return (
		<Modal 
			visible={props.show}
			animationType='fade'
		>
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
		</Modal>
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
		flex: 1,
		justifyContent: 'center',	// Align is for opposite of main axis
		alignItems: 'center'
	},
});
