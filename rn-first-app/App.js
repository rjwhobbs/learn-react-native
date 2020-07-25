import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [inputList, setInputList] = useState([]);
	const [show, setShow] = useState(false);

	const handleAdd = (inputText) => {
		setInputList(prevInputList => (
			[...prevInputList, {
				id: Math.random().toString(), 
				val: inputText
			}]
		));
		setShow(false);
	};

	const cancelAdd = () => {
		setShow(false);
	}

	const delItem = (itemId) => {
		setInputList(prevInputList => {
			return prevInputList.filter(item => item.id !== itemId);
		});
	}

	const handleShow = () => {
		setShow(true);
	}

  return (
    <View style={styles.con}>
			<Button 
				title="Add"
				onPress={handleShow}/>
			<GoalInput
				show={show} 
				handleAdd={handleAdd} 
				handleCancel={cancelAdd}/>
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

