import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'

const StartGameScreen = () => {
	return (
		<View style={styles.screen}> 
			<Text style={styles.title}>Start</Text>
			<View style={styles.inputCon}>
				<Text>Select a number</Text>
				<TextInput />
				<View style={styles.buttonCon}>
					<Button 
						title="Reset"
						color='#7ab5d6'
					/>
					<Button 
						title="Confirm"
						color='#7ab5d6'
					/>
				</View>
			</View>
		</View>
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
		color: '#7ab5d6'
	},
	inputCon: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center'
	},
	buttonCon: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	inputText: {
		color: '#2d2d2d'
	}
})

export default StartGameScreen;
