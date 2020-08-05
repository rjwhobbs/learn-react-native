import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE} from '../actions/meals'

const initState = {
	meals: MEALS,
	mealsFilter: MEALS,
	mealsFav: []
}

const mealsReducer = (state = initState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			// Findindex is for typed arrays
			existingIndex = state.mealsFav.findIndex(meal => action.mealId === meal.id);
			if (existingIndex >= 0) {
				const upDatedFavs = [...state.mealsFav];
				upDatedFavs.splice(existingIndex, 1);
				return {...state, mealsFav: upDatedFavs}
			} else {
				const meal = state.meals.find(meal => action.mealId === meal.id);
				return {...state, mealsFav: state.mealsFav.concat(meal)}
			}
		// default will run the first time
		default:
			return state;
	}
}

export default mealsReducer;