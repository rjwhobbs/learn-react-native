import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './srceens/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const getFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})
}

export default function App() {
	const [userNum, setUserNum] = useState();
	const [numRounds, setNumRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading 
				startAsync={getFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log}
			/>
		); //Has to be a function that returns a promise
	}

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
	// test
	// content = (
	// 	<GameOverScreen 
	// 		rounds={1}
	// 		userNum={1}
	// 		onNewGame={newGame}
	// 	/>
	// );

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
		<SafeAreaView style={styles.screen}>
			<Header title={'Guess a number'}/>
			{content}
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
