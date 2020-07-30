import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import * as font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts = () => {
	font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
}

export default function App() {
	const [fontLaoded, setFontLoaded] = useState(false);

	if (!fontLaoded) {
		return (
			<AppLoading 
				startAsync={fetchFonts} 
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

  return (
		<View>
			<Text>hey vbvbvbvbvbvbv</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
