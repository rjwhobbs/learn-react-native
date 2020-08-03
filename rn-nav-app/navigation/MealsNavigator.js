import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FavoritesScreen from '../screens/FavoritesScreen'
const {ps} = require('../constants/platformSelect');

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
	},
  CategoryMeals: {
		screen: CategoryMealsScreen,
  },
	MealDetail: MealDetailScreen,
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: ps.headerbg
		},
		headerTintColor: ps.headerText,
		cardStyle: {
			backgroundColor: "#fff"
		}
	}
});

const MealsTabNavigator = createBottomTabNavigator({
	Meals: MealsNavigator,
	Favorites: FavoritesScreen
}); //Returns a react component

export default createAppContainer(MealsTabNavigator);