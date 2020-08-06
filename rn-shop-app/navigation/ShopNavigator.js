import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from  'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const {ps} = require('../constants/platformSelect');

const defaultStackOptions = {
	headerStyle: {
		backgroundColor: ps.headerbg
	},
	// headerTitleStyle: {
	// 	fontFamily: 'open-sans-bold'
	// },
	// headerBackTitleStyle: {
	// 	fontFamily: 'open-sans'
	// },
	headerTintColor: ps.headerText, // the actual header text
	cardStyle: {
		backgroundColor: "#fff"
	}
};

const ProductsNavigator = createStackNavigator({
		ProductOverview: {
			screen: ProductOverviewScreen
		}
}, {
	defaultNavigationOptions: defaultStackOptions
});

export default createAppContainer(ProductsNavigator);
