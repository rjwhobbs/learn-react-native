import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';

const MealDetailScreen = props => {
	const mealId = props.navigation.getParam('mealId');
	const slectedMeal = MEALS.find(meal => mealId === meal.id);

  return (
    <View style={styles.screen}>
      <Text>{slectedMeal.title}</Text>
			<Button 
				title="Go back to catergories"
				onPress={() => {
					props.navigation.popToTop(); // Resets stack, ie sends you back to default top
				}}
			/>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => mealId === meal.id);

	return {
		headerTitle: selectedMeal.title
	}
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
