import React, {useState} from 'react';
import { 
		View, 
		StyleSheet, 
		Text, 
		TextInput, 
		Button, 
		TouchableWithoutFeedback, 
		Keyboard,
		Alert 
} from 'react-native'
import Card from '../components/Card';
import colours from '../constants/colours';
import Input from '../components/Input';
import NumberCon from '../components/NumberCon';

const StartGameScreen = (props) => {
	const [userInput, setUserInput] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNum, setSelectedNum] = useState(0);

	const inputHandler = (input) => {
		setUserInput(input.replace(/[^0-9]/g, ''));
	};

	const confirmHandler = () => {
		const num = parseInt(userInput);
		if (isNaN(num) || num <= 0 || num >= 100) {
			Alert.alert(
				'Invalid number', 
				'Number must be between 1 and 99', 
				[{test: 'Okay', style: 'destructive', onPress: resetHandler}]);
			return ;
		}
		setSelectedNum(num);
		setConfirmed(true);
		setUserInput('');
		Keyboard.dismiss();
	};

	const resetHandler = () => {
		setUserInput('');
		setConfirmed(false);
	};

	let confirmedOutPut = null;

	if (confirmed) {
		confirmedOutPut = (
			<Card style={styles.confirmCon}>
				<Text style={styles.confirmText}>You selected</Text>
				<NumberCon>
					{selectedNum}	
				</NumberCon>
				<Button 
					title="START GAME"
					color={colours.accent}
					onPress={() => props.onStartGame(selectedNum)}
				/>
			</Card>
		);
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
								onPress={resetHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button 
								title="Confirm"
								color={colours.primary}
								onPress={confirmHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutPut}
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
	},
	confirmCon: {
		marginTop: 20,
		alignItems: 'center' // this is default stretch
	},
	confirmText: {
		color: colours.accent,
		fontWeight: 'bold'
	}
})

export default StartGameScreen;
