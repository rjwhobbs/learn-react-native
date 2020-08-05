import React from 'react';
import {useSelector} from 'react-redux';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import DefText from '../components/DefText';
import c from '../constants/colours';

const CategoryMealScreen = props => {
	const catId = props.navigation.getParam('cid');
	let test = props.navigation.getParam('title'); // This works, not sure why the tutor doesn't do it this way.
	// indexOf() returns -1 if it can't find the value
	const availableMeals = useSelector(state => state.meals.mealsFilter);
	const displayMeals = availableMeals.filter(meal => meal.catId.indexOf(catId) >=0 );

	if (displayMeals.length === 0 || !displayMeals) {
		return (
			<View style={s.messageCon}>
				<DefText style={s.message}>
					There seem to be no meals here, please check your filter settings.
				</DefText>
			</View>
		)
	}
	
  return (
		<MealList
			listData={displayMeals}
			navigation={props.navigation} // navigation is not available on nested props
		/>
  );
};

// So this seems to work asyncronously hence a global var doesn't work.
// Would probably be more eficient to pass the title from the parent? Yup it is
CategoryMealScreen.navigationOptions = (navigationData) => {
	const catId = navigationData.navigation.getParam('cid');
	const selectedCat = CATEGORIES.find(cat => cat.id === catId);
	
	return {
		headerTitle: selectedCat.title
	};
}

const s = StyleSheet.create({
	messageCon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	message: {
		color: c.accent,
		fontSize: 20
	}
});

export default CategoryMealScreen;
