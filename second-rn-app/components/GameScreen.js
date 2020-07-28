import React, {useState, useRef, useEffect} from 'react';
import {
	View, 
	StyleSheet,
	Text,
	Button,
	Alert
} from 'react-native';
import NumberCon from './NumberCon';
import Card from './Card';
import {Ionicons} from '@expo/vector-icons'
import MainButton from './MainButton';

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
	const {userNum, onGameOver} = props;
	const [guess, setGuess] = useState(genRandBetween(1, 100, userNum));
	const [rounds, setRounds] = useState(0);
	const currLow = useRef(1); // the benifit of doing this is that the comp doesn't rerender when the val is changed.
	const currHigh = useRef(100);


	useEffect(() => {
		if (guess === userNum) {
			onGameOver(rounds);
		}
	}, [guess, userNum, onGameOver]); // This will only rerun if these consts change, not if props changes. vid 70

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
		} else if (direction === 'greater') {
			currLow.current = guess;
		}

		const nextNum = genRandBetween(currLow.current, currHigh.current, guess);
		setGuess(nextNum);
		setRounds(prevRounds => prevRounds + 1);
	}

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberCon>{guess}</NumberCon>
			<Card style={styles.buttonCon}>
				<MainButton onPress={() => nextGuessHandler('lower')}>
					<Ionicons name="md-remove" size={24} color="white"/>
				</MainButton>
				<MainButton onPress={() => nextGuessHandler('greater')}>
					<Ionicons name="md-add" size={24} color="white"/>
				</MainButton>
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
