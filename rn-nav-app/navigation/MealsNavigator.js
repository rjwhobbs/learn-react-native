import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FavoritesScreen from '../screens/FavoritesScreen'
const {ps} = require('../constants/platformSelect');
import c from '../constants/colours';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

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

const tabsScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons 
						name="ios-restaurant" 
						size={25}
						color={tabInfo.tintColor} // This take the active tint colour below
					/>
				);
			},
			tabBarColor: c.accent
		}
	},
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarLabel: 'Favorites!', // default is identifier
			tabBarIcon: (tabInfo) => {
				return (
					<Ionicons 
						name="ios-star" 
						size={25}
						color={tabInfo.tintColor} 
					/>
				);
			},
			tabBarColor: c.primary // gives this tab a different color, shifting must be true
		}
	}
};

const MealsTabNavigator = ps.os === 'android' 
? createMaterialBottomTabNavigator(
	tabsScreenConfig, {
		activeColor: '#fff',
		shifting: false,
		barStyle: {
			backgroundColor: c.primary
		}
	}
) 
: createBottomTabNavigator(
	tabsScreenConfig, {
	tabBarOptions: {
		activeTintColor: c.secondary
	}
}); //Returns a react component

export default createAppContainer(MealsTabNavigator);