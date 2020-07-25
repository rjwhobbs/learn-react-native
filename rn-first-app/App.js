import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [inputList, setInputList] = useState([]);

	const handleAdd = (inputText) => {
		setInputList(prevInputList => (
			[...prevInputList, inputText]
		));
	};

  return (
    <View style={styles.con}>
			<GoalInput handleAdd={handleAdd} />
			<FlatList
				keyExtractor={(item, index) => item + index} // By default flat list can look for an id or key val
				data={inputList}
				renderItem={itemData => (
					<GoalItem item={itemData.item} />	
				)}
			/>
    </View>
	);
}

const styles = StyleSheet.create({
	con: {
		padding: 30
	},
});

