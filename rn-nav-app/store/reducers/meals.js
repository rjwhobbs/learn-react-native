import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/meals'

const initState = {
	meals: MEALS,
	mealsFilter: MEALS,
	mealsFav: []
}

const mealsReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.mealsFav.findIndex(meal => action.mealId === meal.id);
			if (existingIndex >= 0) {
				const upDatedFavs = [...state.mealsFav];
				upDatedFavs.splice(existingIndex, 1);
				return {...state, mealsFav: upDatedFavs}
			} else {
				const meal = state.meals.find(meal => action.mealId === meal.id);
				return {...state, mealsFav: state.mealsFav.concat(meal)}
			}
		case SET_FILTERS:
			console.log("RRRR", action.filters);
			const upDatedFilteredMeals = state.meals.filter(meal => {
				// It seems so simple but this is a real nice implamentation of a check
				if (action.filters.glutenFree && !meal.isGlutenFree) {
					return false;
				}
				if (action.filters.lactoseFree && !meal.isLactoseFree) {
					return false;
				}
				if (action.filters.vegan && !meal.isVegan) {
					return false;
				}
				if (action.filters.vegetarian && !meal.isVegetarian) {
					return false;
				}
				return true;
			});
			return {...state, mealsFilter: upDatedFilteredMeals}
		// default will run the first time
		default:
			return state;
	}
}

export default mealsReducer;