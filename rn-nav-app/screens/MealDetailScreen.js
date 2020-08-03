import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';

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
		headerTitle: selectedMeal.title,
		headerRight: () => ( 
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
			{/* Here title is a fall back (Title also used as key)
				multiple items also possible */}
				<Item 
					title="Favourite"
					iconName='ios-star' // This is a Ionicons icon name
					onPress={() => {
						console.log("Fav button pressed");
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
  }
});

export default MealDetailScreen;
