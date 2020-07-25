import React from 'react';
import { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = (props) => {
	const [inputText, setInputText] = useState('');

	const handleInput = (input) => {
		setInputText(input);
	};

	const handlePress = () => {
		props.handleAdd(inputText);
		setInputText('');
	}
	
	const handleCancel = () => {
		props.handleCancel();
		setInputText('');
	}

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
				<View style={styles.buttonCon}>
					<Button 
						title="ADD" 
						onPress={handlePress}
					/>
					<Button 
						title="CANCEL"
						onPress={handleCancel}
						color="red"
					/>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	buttonCon: {
		flexDirection: 'row', // the view container takes the width of its children hence space-between wont work without a set width
		width: '60%',
		justifyContent: 'space-around'
	},
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
