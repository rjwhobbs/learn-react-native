import React from 'react';
import { 
	Platform,  
	TouchableNativeFeedback,
	TouchableOpacity,
	Text
} from 'react-native';
import c from './colours';

let os;
let headerText;
let headerbg;
let NativeButton;
let visibility;
let tabBarLabelMeals;

if (Platform.OS === 'ios') {
	os = 'ios'
	headerText = c.primary;
	headerbg = '#fff'
	NativeButton = TouchableOpacity;
	visibility = 'visible';
	tabBarLabelMeals = 'Meals';
} else if (Platform.OS === 'android') {
	os = 'android'
	headerText = "#fff"
	headerbg = c.primary
	NativeButton = TouchableNativeFeedback;
	visibility = 'hidden';
	tabBarLabelMeals = (
		<Text style={{fontFamily: 'open-sans-bold'}}>
			Meals
		</Text>
	);
}

console.log("Platform detector");

export const ps = {
	os,
	NativeButton,
	headerText,
	headerbg,
	visibility,
	tabBarLabelMeals
};