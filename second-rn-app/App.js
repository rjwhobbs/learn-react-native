import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './srceens/StartGameScreen';

export default function App() {
  return (
		<View style={styles.screen}>
			<Header title={'Guess a number'}/>
			<StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
