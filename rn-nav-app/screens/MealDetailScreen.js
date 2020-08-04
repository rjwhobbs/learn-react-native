import React from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Button, 
	ScrollView, 
	Image 
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';
import DefText from '../components/DefText'

const MealDetailScreen = props => {
	const mealId = props.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => mealId === meal.id);

	return (
		<ScrollView>
			<Image 
				source={{uri: selectedMeal.imgUrl}} 
				style={s.image}
			/>
			<View style={s.details}>
				<DefText>{selectedMeal.duration}m</DefText>
				<DefText>{selectedMeal.complexity.toUpperCase()}</DefText>
				<DefText>{selectedMeal.value.toUpperCase()}</DefText>
			</View>
			<Text style={s.title}>
				Ingredients
			</Text>
			<Text>
				List of ingredients...
			</Text>
			<Text style={s.title}>
				Steps
			</Text>
			<Text>
				List of Steps...
			</Text>
			{/* <View style={s.screen}>
				<Text>{slectedMeal.title}</Text>
				<Button
					title="Go back to catergories"
					onPress={() => {
						props.navigation.popToTop(); // Resets stack, ie sends you back to default top
					}}
				/>
			</View> */}
		</ScrollView>
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

const s = StyleSheet.create({
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: "space-around"
	},
	image: {
		width: '100%',
		height: 200
	}
});

export default MealDetailScreen;
