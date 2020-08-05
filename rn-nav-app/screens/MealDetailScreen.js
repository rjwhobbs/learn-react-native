import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
import { toggleFavorite } from '../store/actions/meals';

const ListItem = (props) => {
	return (
		<View style={s.listItem}>
			<DefText>
				{props.children}
			</DefText>
		</View>
	)
}

const MealDetailScreen = props => {
	const mealId = props.navigation.getParam('mealId');
	const availableMeals = useSelector(state => state.meals.meals);
	const selectedMeal = availableMeals.find(meal => mealId === meal.id);
	const currMealIsFav = useSelector(
		state => state.meals.mealsFav.some(meal => meal.id === mealId)
	);
	const dispatch = useDispatch(); // React-redux makes sure this never changes

	const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

	useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
	}, [toggleFavoriteHandler]);
	
	useEffect(() => {
    props.navigation.setParams({isFav: currMealIsFav});
  }, [currMealIsFav]);

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
			<Text style={s.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((item, index) => (
				<ListItem 
					key={item + index}>
					{item}	
				</ListItem>
			))}
			<Text style={s.title}>Steps</Text>
			{selectedMeal.steps.map((item, index) => (
				<ListItem 
					key={item + index}>
					{item}	
				</ListItem>
			))}
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
	// const mealId = navigationData.navigation.getParam('mealId');
	const mealTitle = navigationData.navigation.getParam('mealTitle');
	const toggleFavorite = navigationData.navigation.getParam('toggleFav');
	const isFav = navigationData.navigation.getParam('isFav');
	console.log("CXCXC", isFav);
	// const selectedMeal = MEALS.find(meal => mealId === meal.id);

	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
				{/* Here title is a fall back (Title also used as key)
				multiple items also possible */}
				<Item
					title="Favourite"
					iconName={isFav? 'ios-star': 'ios-star-outline'} // This is a Ionicons icon name
					onPress={toggleFavorite}
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
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: "#f5f5f5",
		borderWidth: 1,
		padding: 10
	}
});

export default MealDetailScreen;
