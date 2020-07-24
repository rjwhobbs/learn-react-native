import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
	const [inputText, setInputText] = useState('sdf');

	function handlePress(input) {
		setInputText(input);
	}

  return (
    <View style={{padding: 30}}>
			<View style={sLayOut}>
				<TextInput 
					placeholder="course goals"
					style={sTextInput}
				/>
				<Button title="ADD" />
			</View>
			<View>

			</View>
    </View>
  );
}

const sTextInput = {
	borderBottomColor: 'black',
	borderBottomWidth: 1,
	padding: 5
	
}

const sLayOut = {
	flexDirection: 'row', 
	justifyContent: 'space-between',
	// Align is for opposite of main axis
	alignItems: 'center'
}
