import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../components/Card';
import colours from '../constants/colours';
import Input from '../components/Input';

const StartGameScreen = () => {
	const [userInput, setUserInput] = useState('');

	const inputHandler = (input) => {
		setUserInput(input.replace(/[^0-9]/g, ''));
	}

	return (
		<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
			<View style={styles.screen}> 
				<Text style={styles.title}>Start</Text>
				<Card style={styles.inputCon}>
					<Text style={styles.inputText}>Select a number</Text>
					<Input 
						style={styles.input}
						blurOnSubmit
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={inputHandler}
						value={userInput}
					/>
					<View style={styles.buttonCon}>
						<View style={styles.button}>
							<Button 
								title="Reset"
								color={colours.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button 
								title="Confirm"
								color={colours.primary}
							/>
						</View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		color: colours.primary,
		paddingBottom: 20
	},
	inputCon: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonCon: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	inputText: {
		color: colours.primary,
		fontWeight: 'bold'
	},
	button: {
		width: 90,

	},
	input: {
		width: 50,
		textAlign: 'center'
	}
})

export default StartGameScreen;
