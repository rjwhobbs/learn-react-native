import React, {useState} from 'react';
import {
	View, 
	StyleSheet,
	Text,
	Button
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

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberCon>{guess}</NumberCon>
			<Card style={styles.buttonCon}>
				<Button 
					title='LOWER'
					onPress={() => {}}
				/>
				<Button 
					title='GREATER'
					onPress={() => {}}
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
