import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
const {pc} = require('../constants/platformColours');

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: pc.headerbg
			},
			headerTintColor: pc.headerText,
			cardStyle: {
				backgroundColor: "#fff"
			}
		}
	},
  CategoryMeals: {
		screen: CategoryMealsScreen,
		navigationOptions: {
			headerStyle: {
				backgroundColor: pc.headerbg
			},
			headerTintColor: pc.headerText,
			cardStyle: {
				backgroundColor: "#fff"
			}
		}
  },
	MealDetail: MealDetailScreen,
	
});

export default createAppContainer(MealsNavigator);