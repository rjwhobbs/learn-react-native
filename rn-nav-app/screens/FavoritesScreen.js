import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.meals);
  return (
    <MealList
			listData={favMeals}
			navigation={props.navigation}
		/>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Favourites!',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
				<Item 
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	}
}

export default FavoritesScreen;
