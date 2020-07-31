import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,	
	SafeAreaView,
	TouchableOpacity	
} from 'react-native';	
	
const CategoryGridTile = (props) => {	
	return (	
		<TouchableOpacity 
			style={styles.gridItem}
			onPress={props.onSelect}
		>
			<View >
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);	
}	
	
const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}	
});	
	
export default CategoryGridTile;