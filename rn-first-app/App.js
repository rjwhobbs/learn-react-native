import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
	const [inputText, setInputText] = useState('');
	const [inputList, setInputList] = useState([]);

	const handleInput = (input) => {
		setInputText(input);
	};

	const handleAdd = () => {
		setInputList(prevInputList => (
			[...prevInputList, inputText]
		));
		setInputText('');
	};

	const listItems = () => {
		let items = inputList.map((item, index) => {
			return (
				<View
					key={item + index} 
					style={styles.listItems}
				>
					<Text >{item}</Text>
				</View> 
			)
		});
	return (<>{items}</>);
	}

  return (
    <View style={styles.con}>
			<View style={styles.row}>
				<TextInput 
					style={styles.input}
					placeholder="course goals"
					onChangeText={handleInput} // So we only pass the function to be used, otherwise it actually gets called, eg f() instead of f?
					value={inputText}
				/>
				<Button 
					title="ADD" 
					onPress={handleAdd}
				/>
			</View>
			<ScrollView>
				<View>
					{listItems()}
				</View>
			</ScrollView>
    </View>
	);
}

const styles = StyleSheet.create({
	con: {
		padding: 30
	},
	input: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 5,
		width: '80%'
	},
	row: {
		flexDirection: 'row', 
		justifyContent: 'space-between',	// Align is for opposite of main axis
		alignItems: 'center'
	},
	listItems: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
});

