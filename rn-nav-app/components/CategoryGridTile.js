import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,	
	SafeAreaView,
} from 'react-native';	
const {ps} = require('../constants/platformSelect');
	
const CategoryGridTile = (props) => {	
	const NavButton = ps.NativeButton;
	return (	
		<View style={styles.gridItem}>
			<NavButton 
				style={{flex: 1}}
				onPress={props.onSelect}
			>
				<View style={{...styles.screen, ...{backgroundColor: props.color}}}>
					<Text 
						numberOfLines={2}
						style={styles.title}
					>
						{props.title}
					</Text>
				</View>
			</NavButton>
		</View>
	);	
}	
	
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 10,
		padding: 15,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
		elevation: 8,
		overflow: ps.visibility // 'hidden' // this kills shadow effect
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 18,
		textAlign: 'right'
	}	
});	
	
export default CategoryGridTile;