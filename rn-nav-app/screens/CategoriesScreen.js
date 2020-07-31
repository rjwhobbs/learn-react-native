import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import c from '../constants/colours';
import CategoryGridTile from '../components/CategoryGridTile';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
	const renderGrid = (itemData) => {
		return (
			<CategoryGridTile 
				title={itemData.item.title}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', 
						params: {
							cid: itemData.item.id
						}})
				}}
			/>
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
	headerTitle: 'Meal Catergories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
	},
});

export default CategoriesScreen;
