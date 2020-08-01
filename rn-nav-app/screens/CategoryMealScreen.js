import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem 
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				value={itemData.item.value}
				image={itemData.item.imgUrl}
				onSelect={() => {}}
			/>
		);
	}

	const catId = props.navigation.getParam('cid');
	let test = props.navigation.getParam('title'); // This works, not sure why the tutor doesn't do it this way.
	// indexOf() returns -1 if it can't find the value
	const displayMeals = MEALS.filter(meal => meal.catId.indexOf(catId) >=0 );
	
  return (
		<View style={styles.screen}>
			<FlatList
				style={{width: '100%'}}
				data={displayMeals}
				renderItem={renderMealItem} 
			/>
    </View>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
		alignItems: 'center', 
		padding: 15
  }
});

export default CategoryMealScreen;
