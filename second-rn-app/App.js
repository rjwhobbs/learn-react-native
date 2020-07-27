import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './srceens/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

export default function App() {
	const [userNum, setUserNum] = useState();
	const [numRounds, setNumRounds] = useState(0);

	const newGame = () => {
		setNumRounds(0);
		setUserNum(null);
	}

	const startGameHandler = (userNum) => {
		setUserNum(userNum);
		setNumRounds(0);
	};

	const gameOverHandler = (rounds) => {
		setNumRounds(rounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler}/>;

	if (userNum && numRounds <= 0) {
		content = ( 
			<GameScreen 
				userNum={userNum}
				onGameOver={gameOverHandler}
			/>
		);
	} else if (numRounds > 0) {
		content = (
			<GameOverScreen 
				rounds={numRounds}
				userNum={userNum}
				onNewGame={newGame}
			/>
		);
	}

  return (
		<View style={styles.screen}>
			<Header title={'Guess a number'}/>
			{content}
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
