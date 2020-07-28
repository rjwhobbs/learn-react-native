import React, {useState, useEffect} from 'react';
import { 
		View, 
		StyleSheet, 
		Text, 
		TextInput, 
		Button, 
		TouchableWithoutFeedback, 
		Keyboard,
		Alert,
		Image,
		Dimensions,
		ScrollView,
		KeyboardAvoidingView 
} from 'react-native'
import Card from '../components/Card';
import c from '../constants/colours';
import s from '../constants/styles';
import Input from '../components/Input';
import NumberCon from '../components/NumberCon';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {
	const [userInput, setUserInput] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNum, setSelectedNum] = useState(0);
	const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

	useEffect(() => {
		const upDateButtonWidth = () => {
			setButtonWidth(Dimensions.get('window').width / 4);
		}
		Dimensions.addEventListener('change', upDateButtonWidth);
		return () => {
			Dimensions.removeEventListener('change', upDateButtonWidth);
		}
	});

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
				<MainButton onPress={() => props.onStartGame(selectedNum)}>
					START GAME
				</MainButton>
			</Card>
		);
	}

	return (
		<ScrollView>
			<KeyboardAvoidingView 
				behavior='position' // pos typically better for ios
				keyboardVerticalOffset={30}
			>
				<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
					<View style={styles.screen}> 
						<Text style={{...styles.title, ...s.bold}}>
							Start
						</Text>
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
								<View style={{width: buttonWidth}}>
									<Button 
										title="Reset"
										color={c.accent}
										onPress={resetHandler}
									/>
								</View>
								<View style={{width: buttonWidth}}>
									<Button 
										title="Confirm"
										color={c.primary}
										onPress={confirmHandler}
									/>
								</View>
							</View>
						</Card>
						{confirmedOutPut}
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScrollView>
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
		color: c.primary,
		paddingBottom: 20
	},
	inputCon: {
		width: '80%',
		minWidth: 300,
		maxWidth: '95%',
		alignItems: 'center',
	},
	buttonCon: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	inputText: {
		color: c.primary,
		fontFamily: 'open-sans-bold',
	},
	// button: {
	// 	// width: 90,
	// 	// Dimensions is only calculated when app starts, it only runs once 
	// 	width: Dimensions.get('window').width / 4  // The benifit of this is you don't have to rely on the parent if using percentages
	// },
	input: {
		width: 50,
		textAlign: 'center'
	},
	confirmCon: {
		marginTop: 20,
		alignItems: 'center' // this is default stretch
	},
	confirmText: {
		color: c.accent,
		fontWeight: 'bold'
	}
})

export default StartGameScreen;
