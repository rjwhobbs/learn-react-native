import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import c from '../constants/colours';

import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = props => {

	const renderGrid = (itemData) => {
		return (
			<TouchableOpacity 
				style={styles.gridItem}
				onPress={() => {
				props.navigation.navigate({
					routeName: 'CategoryMeals', 
					params: {
						cid: itemData.item.id
				}})
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
