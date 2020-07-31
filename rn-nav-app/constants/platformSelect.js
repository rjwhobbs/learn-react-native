import React from 'react';
import { 
	Platform,  
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native';
import c from './colours';

let os;
let headerText;
let headerbg;
let NativeButton;

if (Platform.OS === 'ios') {
	os = 'ios'
	headerText = c.primary;
	headerbg = '#fff'
	NativeButton = TouchableOpacity;
} else if (Platform.OS === 'android') {
	os = 'android'
	headerText = "#fff"
	headerbg = c.primary
	NativeButton = TouchableNativeFeedback;
}

console.log("THis ran");

export const ps = {
	os,
	NativeButton,
	headerText,
	headerbg,
};