import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,		
} from 'react-native';
const {ps} = require('../constants/platformSelect');	
	
const MealItem = (props) => {
	const NativeButton = ps.NativeButton;
	return (
		<View style={s.mealItem}>
			<NativeButton onPress={props.onSelect}>
				<View>
					<View style={s.row}>
						<Text>
							{props.title}
						</Text>
						<View style={s.row}></View>
					</View>
				</View>	
			</NativeButton>	
		</View>
	);	
}	
	
const s = StyleSheet.create({
	mealItem: {
		height: 200,
		width: '100%',
		backgroundColor: '#ccc'
	},
	row: {
		flexDirection: 'row'
	}	
});	
	
export default MealItem;