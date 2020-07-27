import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './srceens/StartGameScreen';
import GameScreen from './components/GameScreen';

export default function App() {
	const [userNum, setUserNum] = useState();

	const startGameHandler = (userNum) => {
		setUserNum(userNum);
	}

	let content = <StartGameScreen onStartGame={startGameHandler}/>;

	if (userNum) {
		content = <GameScreen userNum={userNum}/>;
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
