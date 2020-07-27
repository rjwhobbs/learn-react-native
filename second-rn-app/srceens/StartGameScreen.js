import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import Card from '../components/Card';

const StartGameScreen = () => {
	return (
		<View style={styles.screen}> 
			<Text style={styles.title}>Start</Text>
			<Card style={styles.inputCon}>
				<Text style={styles.inputText}>Select a number</Text>
				<TextInput />
				<View style={styles.buttonCon}>
					<View style={styles.button}>
						<Button 
							title="Reset"
							color='#7ab5d6'
						/>
					</View>
					<View style={styles.button}>
						<Button 
							title="Confirm"
							color='#4f7790'
						/>
					</View>
				</View>
			</Card>
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
		color: '#7ab5d6',
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
		color: '#7ab5d6',
		fontWeight: 'bold'
	},
	button: {
		width: 90,

	}
})

export default StartGameScreen;
