import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen';
import c from '../constants/colours';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
const {ps} = require('../constants/platformSelect');

const defaultStackOptions = {
	headerStyle: {
		backgroundColor: ps.headerbg
	},
	headerTitleStyle: {
		fontFamily: 'open-sans-bold'
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans'
	},
	headerTintColor: ps.headerText,
	cardStyle: {
		backgroundColor: "#fff"
	}
};

const MealsNavigator = createStackNavigator({
	Categories: {
		screen: CategoriesScreen,
	},
  CategoryMeals: {
		screen: CategoryMealsScreen,
  },
	MealDetail: MealDetailScreen,
}, {
	defaultNavigationOptions: defaultStackOptions
});

const FavoritesNav = createStackNavigator({
	Favorites: FavoritesScreen,
	MealDetail: MealDetailScreen
}, {
	defaultNavigationOptions: defaultStackOptions
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
			tabBarColor: c.accent,
			// Work around for styling tabs for android material
			tabBarLabel: ps.tabBarLabel('Meals')
		}
	},
	Favorites: {
		screen: FavoritesNav,
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
			tabBarColor: c.primary, // gives this tab a different color, shifting must be true
			tabBarLabel: ps.tabBarLabel('Favourites')
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
		activeTintColor: c.secondary,
		labelStyle: {
			fontFamily: 'open-sans-bold'
		}
	}
}); //Returns a react component

// The reason for using a stack nav here is to get a header
const FiltersNav = createStackNavigator({
	Filters: FiltersScreen
},  {
	defaultNavigationOptions: defaultStackOptions
})

const MainNavigator = createDrawerNavigator({
	MealsFavs: {
		screen: MealsTabNavigator,
		navigationOptions: {
			drawerLabel: 'Meals'
		}
	},
	Filters: {
		screen: FiltersNav,
		navigationOptions: {
			drawerLabel: 'Filters'
		}
	}
}, {
	contentOptions: {
		activeTintColor: c.accent,
		labelStyle: {
			fontFamily: 'open-sans',
			// color: c.primary
		}
	}
});

export default createAppContainer(MainNavigator);