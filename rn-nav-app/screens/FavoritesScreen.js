import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';
import DefText from '../components/DefText';
import c from '../constants/colours';

const FavoritesScreen = props => {
	const favMeals = useSelector(state => state.meals.mealsFav);

	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={s.message}>
				<DefText style={s.text}>
					You don't have any favorite meals
				</DefText>
			</View>
		)
	}
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

const s = StyleSheet.create({
	message: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: c.accent,
		fontSize: 20
	}
})

export default FavoritesScreen;
