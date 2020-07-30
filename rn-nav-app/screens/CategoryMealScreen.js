import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealScreen = props => {
	const catId = props.navigation.getParam('cid');
	const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
			<Text>{selectedCat.title}</Text>
			<Button 
				title="Go to details"
				onPress={() => {
					props.navigation.navigate({routeName: 'MealDetail'})
				}}
			/>
			<Button 
				title="Go back"
				onPress={() => {
					props.navigation.goBack(); // Manually going back, or .pop() only for stack
				}}
			/>
    </View>
  );
};

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
