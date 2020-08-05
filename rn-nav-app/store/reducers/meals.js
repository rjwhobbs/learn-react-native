import {MEALS} from '../../data/dummy-data';

const initState = {
	meals: MEALS,
	mealsFilter: MEALS,
	mealsFav: []
}

const mealsReducer = (state = initState, action) => {
	return state;
}

export default mealsReducer;