import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,
	ImageBackground		
} from 'react-native';
const {ps} = require('../constants/platformSelect');	
	
const MealItem = (props) => {
	const NativeButton = ps.NativeButton;
	return (
		<View style={s.mealItem}>
			<NativeButton onPress={props.onSelect}>
				<View>
					<View style={{...s.row, ...s.mealHeader}}>
						<ImageBackground 
							source={{uri: props.image}}
							style={s.bgImage}>
							<View style={s.titleCon}>
								<Text 
									style={s.title}
									numberOfLines={1}>
									{props.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{...s.row, ...s.mealDetail}}>
						<Text>{props.duration}m</Text>
						<Text>{props.complexity.toUpperCase()}</Text>
						<Text>{props.value.toUpperCase()}</Text>
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
		backgroundColor: '#f5f5f5',
		borderRadius: 10,
		overflow: 'hidden', // Without this the image overflows the radius
		marginVertical: 15
	},
	row: { 
		flexDirection: 'row'
	},
	mealHeader: {
		height: '85%'
	},
	mealDetail: {
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '15%'
	},
	bgImage: {
		width: '100%', // Web images need 100 here
		height: '100%',
		justifyContent: 'flex-end'
	},
	titleCon: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)', // black background with transparency
		paddingVertical: 5,
		paddingHorizontal: 12,
	},	
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: '#fff',
		textAlign: 'center',
	}
});	
	
export default MealItem;