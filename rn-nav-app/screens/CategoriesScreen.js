import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import c from '../constants/colours';
const {pc} = require('../constants/platformColours');

import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = props => {

	const renderGrid = (itemData) => {
		return (
			<TouchableOpacity 
				style={styles.gridItem}
				onPress={() => {
				props.navigation.navigate({routeName: 'CategoryMeals'})
			}}>
				<View >
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

  return (
		<FlatList 
			data={CATEGORIES}
			numColumns={2}
			renderItem={renderGrid}
		/>
  );
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Catergories',
	headerStyle: {
		backgroundColor: pc.headerbg
	},
	headerTintColor: pc.headerText,
	cardStyle: {
		backgroundColor: "#fff"
	}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}
});

export default CategoriesScreen;
