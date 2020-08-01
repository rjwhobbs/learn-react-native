import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealScreen = props => {
	const renderMealItem = (itemData) => {
		return (
			<View>
				<Text>
					{itemData.item.title}
				</Text>
			</View>
		);
	}

	const catId = props.navigation.getParam('cid');
	let test = props.navigation.getParam('title'); // This works, not sure why the tutor doesn't do it this way.
	// indexOf() returns -1 if it can't find the value
	const displayMeals = MEALS.filter(meal => meal.catId.indexOf(catId) >=0 );
	
  return (
		<View style={styles.screen}>
			<FlatList
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
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
