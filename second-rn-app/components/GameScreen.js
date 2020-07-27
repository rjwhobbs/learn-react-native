import React, {useState, useRef} from 'react';
import {
	View, 
	StyleSheet,
	Text,
	Button,
	Alert
} from 'react-native';
import NumberCon from './NumberCon';
import Card from './Card';

const genRandBetween = (min, max, exclude) => {
	min = Math.ceil(min); // rounds up
	max = Math.floor(max); // rounds down
	const randNum = Math.floor((Math.random() * (max - min)) + min );
	if (randNum === exclude) {
		return genRandBetween(min, max, exclude);
	} else {
		return randNum;
	}
}

const GameScreen = (props) => {
	const [guess, setGuess] = useState(genRandBetween(1, 100, props.userNum));
	const currLow = useRef(1); // the benifit of doing this is that the comp doesn't rerender when the val is changed.
	const currHigh = useRef(100);

	const nextGuessHandler = (direction) => {
		if ((direction === 'lower' && guess < props.userNum) ||
				(direction === 'greater' && guess > props.userNum)) {
			Alert.alert(
				'Mmm...', 
				'your hint seems to be off', 
				[{text: 'Try again', style: 'cancel'}]
			);

			return ;
		}

		if (direction === 'lower') {
			currHigh.current = guess;
		}
	}

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberCon>{guess}</NumberCon>
			<Card style={styles.buttonCon}>
				<Button 
					title='LOWER'
					onPress={() => nextGuessHandler('lower')}
				/>
				<Button 
					title='GREATER'
					onPress={() => nextGuessHandler('greater')}
				/>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonCon: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	}
});

export default GameScreen;
