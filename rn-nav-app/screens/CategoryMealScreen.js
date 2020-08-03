import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
	const catId = props.navigation.getParam('cid');
	let test = props.navigation.getParam('title'); // This works, not sure why the tutor doesn't do it this way.
	// indexOf() returns -1 if it can't find the value
	const displayMeals = MEALS.filter(meal => meal.catId.indexOf(catId) >=0 );
	
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

const styles = StyleSheet.create({
});

export default CategoryMealScreen;
