import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
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

export default createAppContainer(MealsNavigator);