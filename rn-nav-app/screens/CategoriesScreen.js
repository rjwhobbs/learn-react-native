import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import c from '../constants/colours';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';

import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
	const renderGrid = (itemData) => {
		return (
			<CategoryGridTile 
				title={itemData.item.title}
				color={itemData.item.color}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'CategoryMeals', 
						params: {
							cid: itemData.item.id,
							title: itemData.item.title
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

CategoriesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Meal Catergories',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
				<Item 
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer(); //So I guess this will only work if a drawer was setup
					}}
				/>
			</HeaderButtons>
		)
	}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
	},
});

export default CategoriesScreen;
