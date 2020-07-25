import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'

const StartGameScreen = () => {
	return (
		<View style={styles.screen}> 
			<Text style={styles.title}>Start</Text>
			<View style={styles.inputCon}>
				<Text style={styles.inputText}>Select a number</Text>
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
		alignItems: 'center',
		shadowColor: '#4f7790',
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
		shadowOpacity: 0.5,
		backgroundColor: 'white',  //Background defualts to transparent
		elevation: 5, // Only android
		padding: 10,
		borderRadius: 5
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
