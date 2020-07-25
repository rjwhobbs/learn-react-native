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
			[...prevInputList, {
				id: Math.random().toString(), 
				val: inputText
			}]
		));
	};

	const delItem = (itemId) => {
		setInputList(prevInputList => {
			return prevInputList.filter(item => item.id !== itemId);
		});
	}

  return (
    <View style={styles.con}>
			<GoalInput handleAdd={handleAdd} />
			<FlatList
				data={inputList}
				renderItem={itemData => (
					<GoalItem 
						item={itemData.item.val} 
						handleDelete={delItem.bind(this, itemData.item.id)}
					/>	
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

